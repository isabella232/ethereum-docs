angular
    .module('ethdev')
    .run(runState);

function runState($rootScope, SubscriptionsService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        var unsubscribe = [];
        var subscribe = [];

        conditionalSubscription(fromState, toState, 'versions', function(state){
            return state.name.substring(0, 14) == "page.reference";
        });

        conditionalSubscription(fromState, toState, 'wikis', function(state){
            return state.name.substring(0, 10) == "page.wikis";
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
                    SubscriptionsService.versions.unsubscribe();
                    break;

                case 'version':
                    SubscriptionsService.version.unsubscribe(fromParams.version);
                    break;

                case 'project':
                    SubscriptionsService.project.unsubscribe(fromParams.version, fromParams.project);
                    break;

                case 'compound':
                    SubscriptionsService.compound.unsubscribe(fromParams.version, fromParams.project, fromParams.compound);
                    break;

                case 'wikis':
                    SubscriptionsService.wikis.unsubscribe();
                    break;

                case 'wiki':
                    SubscriptionsService.wiki.unsubscribe(fromParams.wiki);
                    break;

                case 'page':
                    SubscriptionsService.compound.unsubscribe('develop', fromParams.wiki, fromParams.page);
                    break;

            }

        });

        subscribe.forEach(function(subscriptionData){

            switch (subscriptionData.key) {

                case 'versions':
                    SubscriptionsService.versions.subscribe();
                    break;

                case 'version':
                    SubscriptionsService.version.subscribe(toParams.version);
                    break;

                case 'project':
                    SubscriptionsService.project.subscribe(toParams.version, toParams.project);
                    break;

                case 'compound':
                    SubscriptionsService.compound.subscribe(toParams.version, toParams.project, toParams.compound);
                    break;

                case 'wikis':
                    SubscriptionsService.wikis.subscribe();
                    break;

                case 'wiki':
                    SubscriptionsService.wiki.subscribe(toParams.wiki);
                    break;

                case 'page':
                    SubscriptionsService.compound.subscribe('develop', toParams.wiki, toParams.page);
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

        $rootScope.$broadcast("state:updated");

    });

}
