angular
    .module('ethdev.docs')
    .controller('DocsProjectController', DocsProjectController);

function DocsProjectController($scope, $timeout) {

    // TODO: Wait for the projects collection to fetch
    $timeout(function(){

        $scope.project = _.find($scope.projects, function(project) {
            return project.slug == $scope.selected.project
        });

        $scope.groupedCompounds = _.groupByMulti(
            $scope.getReactively('compounds'), ['language', 'kind']
        );

    }, 500);

}