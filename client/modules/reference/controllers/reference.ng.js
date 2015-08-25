angular
    .module('ethdev')
    .controller('ReferenceController', ReferenceController);

function ReferenceController($meteor, $scope, StateService, state) {

    // Set current selection based on state params
    StateService.setSelected(state);

    $scope.versions = $meteor.collection(DocsVersions);
    $scope.projects = $meteor.collection(DocsProjects);
    $scope.compounds = $meteor.collection(DocsCompounds);

    $scope.selectVersion = StateService.selectVersion;
    $scope.selectProject = StateService.selectProject;
    $scope.selectType = StateService.selectType;
    $scope.selectClass = StateService.selectClass;
    $scope.selectFile = StateService.selectFile;

    $scope.$on('selection:updated', function() {
        console.log($scope.selected);
        $scope.selected = StateService.getSelected();
    });

}
