angular
    .module('ethdev')
    .controller('CompoundController', CompoundController);

function CompoundController($meteor, $scope, $state) {

    $scope.ref = function(compound){
        $state.go('page.reference.project.compound', {
            version: $state.params.version,
            project: $state.params.project,
            compound: compound
        });
    };

}
