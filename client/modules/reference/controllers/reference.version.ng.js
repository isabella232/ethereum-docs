angular
    .module('ethdev')
    .controller('ReferenceVersionController', ReferenceVersionController);

function ReferenceVersionController($meteor, $scope) {

    $scope.version = $meteor.collection(function(){
        return DocsReferenceVersions.find({
            slug: $scope.selection.version
        });
    });

}
