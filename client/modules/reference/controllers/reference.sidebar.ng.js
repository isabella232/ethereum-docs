angular
    .module('ethdev')
    .controller('ReferenceSidebarController', ReferenceSidebarController);

function ReferenceSidebarController($scope, $state) {

    // Select compound
    $scope.setCompound = function(){
        $state.go('page.reference.project.compound', {
            version: $scope.selection.version,
            project: $scope.selection.project,
            compound: $scope.selection.compound
        })
    };

    $scope.sidebarClassFilter = function(item){

        switch (item.parser){

            case 'jsdoc':
                return (item.kind == 'function' || item.kind == 'typedef' || item.kind == 'class');

            case 'marked':
                return (item.kind == 'page');

            case 'doxygen':
                return (item.kind == 'class' || item.kind == 'struct');

        }

    };

}
