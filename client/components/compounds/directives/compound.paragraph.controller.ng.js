angular
    .module('ethdev')
    .controller('CompoundParagraphController', CompoundParagraphController);

function CompoundParagraphController($scope, $state) {

    $scope.selectCompound = function(compoundSlug){
        $state.go('page.reference.project.compound', {
            version: $state.params.version,
            project: $state.params.project,
            compound: compoundSlug
        })
    }

}
