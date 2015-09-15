angular
    .module('ethdev')
    .controller('WikiController', WikiController);

function WikiController($meteor, $scope, WikiStateService, $state) {

    $scope.books = $meteor.collection(DocsWikiBooks);
    $scope.pages = $meteor.collection(DocsWikiPages);

    // Detect selection on initial page load
    $scope.selection = WikiStateService.getSelection();

    // Update selection on state change
    $scope.$on('state:updated', function() {
        $scope.selection = WikiStateService.getSelection();
    });

    // Select wiki book
    $scope.setBook = function(){
        $state.go('page.wiki.book.index', {
            book: $scope.selection.book,
            language: $scope.selection.language
        })
    };

    // Select book page
    $scope.setPage = function(){
        $state.go('page.wiki.book.page', {
            book: $scope.selection.book,
            language: $scope.selection.language,
            page: $scope.selection.page
        })
    };

}
