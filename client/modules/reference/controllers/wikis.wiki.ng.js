angular
    .module('ethdev')
    .controller('WikisWikiController', WikisWikiController);

function WikisWikiController($meteor, $scope) {

    $scope.wiki = $meteor.collection(function(){
        return DocsProjects.find({
            _version: 'develop',
            slug: $scope.selection.wiki
        });
    });

}
