angular
    .module('ethdev')
    .controller('WikiController', WikiController);

function WikiController($meteor, $scope, WikiStateService, $state) {

    $scope.books = $meteor.collection(DocsWikiBooks);
    $scope.pages = $meteor.collection(DocsWikiPages);

    $scope.languages = [
        {
            slug: 'english'
        },
        {
            slug: 'japanese'
        }
    ];

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
            language: $scope.selection.language || 'english'
        })
    };

    // Select book page
    $scope.setPage = function(){
        $state.go('page.wiki.book.page', {
            book: $scope.selection.book,
            language: $scope.selection.language || 'english',
            page: $scope.selection.page
        })
    };

    // Select language
    $scope.setLanguage = function(){
        if ($scope.selection.page) {
            $scope.setPage();
        } else {
            $scope.setBook();
        }
    };

}
