angular
    .module('ethdev.docs')
    .controller('DocsController', DocsController);

function DocsController($meteor, $scope, $state, selected, SubscriptionService) {

    SubscriptionService.subscribe('docs-versions');

    $scope.versions = $meteor.collection(DocVersions);
    $scope.projects = $meteor.collection(DocProjects);
    $scope.compounds = $meteor.collection(DocCompounds);

    $scope.selected = selected;

    $scope.selectVersion = function(){
        if ($scope.selected.version) {
            $state.go('page.docs.version', {
                version: $scope.selected.version
            });
        } else {
            $state.go('page.docs.index');
        }
    };

    $scope.selectProject = function(){
        if ($scope.selected.project) {
            $state.go('page.docs.project.index', {
                version: $scope.selected.version,
                project: $scope.selected.project
            });
        } else {
            $state.go('page.docs.version', {
                version: $scope.selected.version
            });
        }
    };

    $scope.selectCompound = function(){
        if ($scope.selected.compound) {
            $state.go('page.docs.project.compound', {
                version: $scope.selected.version,
                project: $scope.selected.project,
                compound: $scope.selected.compound
            });
        } else {
            $state.go('page.docs.project.index', {
                version: $scope.selected.version,
                project: $scope.selected.project
            });
        }
    };

}
