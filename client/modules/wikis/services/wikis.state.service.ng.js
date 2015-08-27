angular
    .module('ethdev')
    .factory('WikisStateService', WikisStateService);

function WikisStateService($state, $rootScope){

    var params = {
        wiki: undefined,
        page: undefined
    };

    function init(state){
        _.forEach(state, function(value, param) {
            params[param] = value;
        });
    }

    function getParams(){
        return params;
    }

    function setWiki(){
        $rootScope.$broadcast("state:params:updated");
    }

    function setPage(){
        $rootScope.$broadcast("state:params:updated");
    }

    return {
        init: init,
        getParams: getParams,
        setWiki: setWiki,
        setPage: setPage
    };

}
