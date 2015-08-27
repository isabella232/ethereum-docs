angular
    .module('ethdev')
    .controller('ReferenceProjectController', ReferenceProjectController);

function ReferenceProjectController($meteor, $scope, $stateParams) {

    $scope.project = $meteor.collection(function(){
        return DocsProjects.find({
            _version: $scope.selection.version,
            slug: $scope.selection.project
        });
    });

}
