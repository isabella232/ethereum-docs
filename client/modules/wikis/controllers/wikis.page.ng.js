angular
    .module('ethdev')
    .controller('WikisPageController', WikisPageController);

function WikisPageController($meteor, $scope) {

    $scope.page = $meteor.collection(function(){
        return DocsCompounds.find({
            _version: 'develop',
            _project: $scope.selection.wiki,
            slug: $scope.selection.page
        });
    });

}
