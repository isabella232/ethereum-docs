angular
    .module('ethdev.docs')
    .factory('StateService', StateService);

function StateService($stateParams) {
    return {
        getParams: function(){
            return $stateParams;
        }
    }
}
