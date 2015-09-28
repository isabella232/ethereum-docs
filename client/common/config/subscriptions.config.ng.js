angular
    .module('ethdev')
    .run(runState);

function runState($rootScope, SubscriptionsService) {

    var states = {
        landing: 'landing',
        reference: 'page.reference',
        wiki: 'page.wiki'
    };

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        var unsubscribe = [];
        var subscribe = [];

        conditionalSubscription(fromState, toState, 'versions', function(state){
            return state.name.substring(0, 14) == states.reference;
        });

        conditionalSubscription(fromState, toState, 'books', function(state){
            return state.name.substring(0, 9) == states.wiki || state.name.substring(0, 7) == states.landing;
        });

        conditionalSubscription(fromState, toState, 'version', function(state){
            toParams.version = 'develop';
            return state.name.substring(0, 7) == states.landing;
        });

        _.map(fromParams, function (value, key) {

            // Same state param exists
            if (toParams[key]) {

                // State param has the same value
                if (toParams[key] !== value) {
                    unsubscribe.push({
                        key: key,
                        value: fromParams[key]
                    });
                    subscribe.push({
                        key: key,
                        value: toParams[key]
                    });
                }

            } else {
                unsubscribe.push({
                    key: key,
                    value: fromParams[key]
                })
            }


        });

        _.map(toParams, function (value, key) {

            // New state param
            if (!fromParams[key]) {
                subscribe.push({
                    key: key,
                    value: toParams[key]
                })
            }

        });

        unsubscribe.forEach(function(subscriptionData){

            switch (subscriptionData.key) {

                case 'versions':
                    SubscriptionsService.reference.versions.unsubscribe();
                    break;

                case 'version':
                    SubscriptionsService.reference.version.unsubscribe(fromParams.version);
                    SubscriptionsService.reference.projects.unsubscribe(fromParams.version);
                    break;

                case 'project':
                    SubscriptionsService.reference.project.unsubscribe(fromParams.version, fromParams.project);
                    SubscriptionsService.reference.compounds.unsubscribe(fromParams.version, fromParams.project);
                    break;

                case 'compound':
                    SubscriptionsService.reference.compound.unsubscribe(fromParams.version, fromParams.project, fromParams.compound);
                    break;

                case 'books':
                    SubscriptionsService.wiki.books.unsubscribe();
                    break;

                case 'book':
                    SubscriptionsService.wiki.book.unsubscribe(fromParams.book);
                    SubscriptionsService.wiki.pages.unsubscribe(fromParams.book);
                    break;

                case 'page':
                    SubscriptionsService.wiki.page.unsubscribe(fromParams.book, fromParams.page);
                    break;

            }

        });

        subscribe.forEach(function(subscriptionData){

            switch (subscriptionData.key) {

                case 'versions':
                    SubscriptionsService.reference.versions.subscribe();
                    break;

                case 'version':
                    SubscriptionsService.reference.version.subscribe(toParams.version);
                    SubscriptionsService.reference.projects.subscribe(toParams.version);
                    break;

                case 'project':
                    SubscriptionsService.reference.project.subscribe(toParams.version, toParams.project);
                    SubscriptionsService.reference.compounds.subscribe(toParams.version, toParams.project);
                    break;

                case 'compound':
                    SubscriptionsService.reference.compound.subscribe(toParams.version, toParams.project, toParams.compound);
                    break;

                case 'books':
                    SubscriptionsService.wiki.books.subscribe();
                    break;

                case 'book':
                    SubscriptionsService.wiki.book.subscribe(toParams.book);
                    SubscriptionsService.wiki.pages.subscribe(toParams.book);
                    break;

                case 'page':
                    SubscriptionsService.wiki.page.subscribe(toParams.book, toParams.page);
                    break;

            }

        });

        function conditionalSubscription(fromState, toState, key, condition){

            if (!condition(fromState) && condition(toState)) {

                subscribe.push({
                    key: key
                });

            } else if (condition(fromState) && !condition(toState)) {

                unsubscribe.push({
                    key: key
                });

            }

        }

    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        $(".fullscreen").animate({ scrollTop: 0 }, 0);

        $rootScope.$broadcast("state:updated");

    });

}
