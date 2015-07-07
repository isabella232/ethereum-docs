angular
    .module('ethdev.docs')
    .controller('DocsVersionController', DocsVersionController);

function DocsVersionController($scope, $timeout) {

    // TODO: Wait for the versions collection to fetch
    $timeout(function(){

        $scope.version = _.find($scope.versions, function(version) {
            return version.slug == $scope.selected.version
        });

    }, 500);

}