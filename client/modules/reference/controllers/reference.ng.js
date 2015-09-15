angular
    .module('ethdev')
    .controller('ReferenceController', ReferenceController);

function ReferenceController($meteor, $scope, ReferenceStateService, $state) {

    $scope.versions = $meteor.collection(DocsReferenceVersions);
    $scope.projects = $meteor.collection(DocsReferenceProjects);
    $scope.compounds = $meteor.collection(DocsReferenceCompounds);

    $scope.selection = ReferenceStateService.getSelection();

    $scope.$on('state:updated', function() {
        $scope.selection = ReferenceStateService.getSelection();
    });

    $scope.setVersion = function(){
        $state.go('page.reference.version', {
            version: $scope.selection.version
        })
    };

    $scope.setProject = function(){
        $state.go('page.reference.project.index', {
            version: $scope.selection.version,
            project: $scope.selection.project
        })
    };

    $scope.setCompound = function(){
        $state.go('page.reference.project.compound', {
            version: $scope.selection.version,
            project: $scope.selection.project,
            compound: $scope.selection.compound
        })
    };

}
