angular
    .module('ethdev.docs')
    .factory('SubscriptionService', SubscriptionService);

function SubscriptionService($meteor) {

    // Current subscriptions
    var subscriptions = [];

    return {

        subscribe: function(key, args){

            // If no arguments supplied
            args = typeof args !== 'undefined' ? args : [];

            // Copy args array by value
            var subscribeParams = args.slice();

            // Append key as a first element
            subscribeParams.unshift(key);

            $meteor.subscribe.apply(this, subscribeParams).then(function(subscriptionHandle){

                if (!subscriptions[key]){
                    subscriptions[key] = []
                }

                var argString = _arrayToString(args);

                subscriptions[key][argString] = subscriptionHandle;

            });

        },

        unsubscribe: function(key, args){

            // If no arguments supplied
            args = typeof args !== 'undefined' ? args : [];

            if (subscriptions[key]) {

                var argString = _arrayToString(args);

                if (subscriptions[key][argString]) {
                    subscriptions[key][argString].stop();
                    delete subscriptions[key][argString];
                }

            }

        }

    };

    // TODO: generate simple hash instead
    function _arrayToString(arr){
        return 's' + arr.join(":")
    }

}
