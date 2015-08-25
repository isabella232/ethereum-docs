angular
    .module('ethdev')
    .controller('ReferenceController', ReferenceController);

function ReferenceController($scope) {

    // TODO: Wait for the versions collection to fetch
    $timeout(function(){

        $scope.version = _.find($scope.versions, function(version) {
            return version.slug == $scope.selected.version
        });

    }, 500);

    console.log($scope.version)

}
