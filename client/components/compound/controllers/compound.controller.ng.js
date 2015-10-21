angular
    .module('ethdev')
    .controller('CompoundController', CompoundController);

function CompoundController($meteor, $scope, $state, $uiViewScroll, $window) {

    $scope.ref = function(compound){
        $state.go('page.reference.project.compound', {
            version: $state.params.version,
            project: $state.params.project,
            compound: compound
        });
    };

    $scope.openLink = function(link) {

        if (link.substring(0, 1) == "#") {
            var elem = angular.element(document.querySelector(link));
            $uiViewScroll(elem);
        } else {
            $window.location.href = link;
        }

    }

}
