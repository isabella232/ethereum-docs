angular
    .module('ethdev')
    .factory('WikiStateService', WikiStateService);

function WikiStateService($state){

    return {
        getSelection: function(){
            return {
                book: $state.params.book,
                language: $state.params.language,
                page: $state.params.page
            }
        }
    };

}
