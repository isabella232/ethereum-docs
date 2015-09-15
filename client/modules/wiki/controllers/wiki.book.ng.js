angular
    .module('ethdev')
    .controller('WikiBookController', WikiBookController);

function WikiBookController($meteor, $scope) {

    // Currently selected wiki book
    $scope.book = $meteor.collection(function(){
        return DocsWikiBooks.find({
            slug: $scope.selection.book
        });
    });

}
