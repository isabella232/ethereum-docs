angular
    .module('ethdev')
    .controller('ReferenceCompoundController', ReferenceCompoundController);

function ReferenceCompoundController($meteor, $scope) {

    $scope.compound = $meteor.collection(function(){
        return DocsCompounds.find({
            _version: $scope.selection.version,
            _project: $scope.selection.project,
            slug: $scope.selection.compound
        });
    });

}
