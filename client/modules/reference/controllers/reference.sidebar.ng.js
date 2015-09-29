angular
    .module('ethdev')
    .controller('ReferenceSidebarController', ReferenceSidebarController);

function ReferenceSidebarController($scope) {

    $scope.sidebarClassFilter = function(item){

        switch (item.parser){

            case 'jsdoc':
                return (item.kind == 'function' || item.kind == 'typedef');

            case 'marked':
                return (item.kind == 'page');

            case 'doxygen':
                return (item.kind == 'class' || item.kind == 'struct');

        }

    };

}
