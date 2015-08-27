angular
    .module('ethdev')
    .factory('ReferenceStateService', ReferenceStateService);

function ReferenceStateService($state){

    return {
        getSelection: function(){
            return {
                version: $state.params.version,
                project: $state.params.project,
                compound: $state.params.compound
            }
        }
    };

}
