angular
    .module('ethdev.docs')
    .controller('DocsCompoundController', DocsCompoundController);

function DocsCompoundController($scope, $timeout) {

    // TODO: Wait for the compounds collection to fetch
    $timeout(function(){

        $scope.compound = _.find($scope.compounds, function(compound) {
            return compound.slug == $scope.selected.compound
        });

    }, 500);

}