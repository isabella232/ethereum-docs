angular
    .module('ethdev')
    .controller('WikiPageController', WikiPageController);

function WikiPageController($meteor, $scope) {

    // Currently selected book page
    $scope.page = $meteor.collection(function(){
        return DocsWikiPages.find({
            _book: $scope.selection.book,
            slug: $scope.selection.page
        });
    });

}
