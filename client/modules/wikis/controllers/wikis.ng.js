angular
    .module('ethdev')
    .controller('WikisController', WikisController);

function WikisController($meteor, $scope) {

    // Set current selection based on state params
    //StateService.setSelected(state);

    /*$scope.wikis = $meteor.collection(DocsWikis);
    $scope.pages = $meteor.collection(DocsPages);

    $scope.selectWiki = StateService.selectWiki;
    $scope.selectPage = StateService.selectPage;

    $scope.$on('selection:updated', function() {
        $scope.selected = StateService.getSelected();
    });*/

}
