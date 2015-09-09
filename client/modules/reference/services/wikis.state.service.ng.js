angular
    .module('ethdev')
    .factory('WikisStateService', WikisStateService);

function WikisStateService($state){

    return {
        getSelection: function(){
            return {
                wiki: $state.params.wiki,
                page: $state.params.page
            }
        }
    };

}
