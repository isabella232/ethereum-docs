angular
    .module('ethdev')
    .controller('WikisController', WikisController);

function WikisController($meteor, $scope, WikisStateService, $state) {

    $scope.wikis = $meteor.collection(DocsProjects);
    $scope.pages = $meteor.collection(DocsCompounds);

    $scope.selection = WikisStateService.getSelection();

    $scope.$on('state:updated', function() {
        $scope.selection = WikisStateService.getSelection();
    });

    $scope.setWiki = function(){
        $state.go('page.wikis.wiki.index', {
            wiki: $scope.selection.wiki
        })
    };

    $scope.setPage = function(){
        $state.go('page.wikis.wiki.page', {
            wiki: $scope.selection.wiki,
            page: $scope.selection.page
        })
    };

}
