angular
    .module('ethdev.docs')
    .run(runState);

function runState($rootScope, SubscriptionService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        var unsubscribe = [];
        var subscribe = [];

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
                case 'version':
                    SubscriptionService.unsubscribe('docs-version', [
                        fromParams.version
                    ]);
                    SubscriptionService.unsubscribe('docs-projects', [
                        fromParams.version
                    ]);
                    break;
                case 'project':
                    SubscriptionService.unsubscribe('docs-project', [
                        fromParams.version,
                        fromParams.project
                    ]);
                    SubscriptionService.unsubscribe('docs-compounds', [
                        fromParams.version,
                        fromParams.project
                    ]);
                    break;
                case 'compound':
                    SubscriptionService.unsubscribe('docs-compound', [
                        fromParams.version,
                        fromParams.project,
                        fromParams.compound
                    ]);
                    break;
            }
        });

        subscribe.forEach(function(subscriptionData){
            switch (subscriptionData.key) {
                case 'version':
                    SubscriptionService.subscribe('docs-version', [
                        toParams.version
                    ]);
                    SubscriptionService.subscribe('docs-projects', [
                        toParams.version
                    ]);
                    break;
                case 'project':
                    SubscriptionService.subscribe('docs-project', [
                        toParams.version,
                        toParams.project
                    ]);
                    SubscriptionService.subscribe('docs-compounds', [
                        toParams.version,
                        toParams.project
                    ]);
                    break;
                case 'compound':
                    SubscriptionService.subscribe('docs-compound', [
                        toParams.version,
                        toParams.project,
                        toParams.compound
                    ]);
                    break;
            }
        });

    });

}
