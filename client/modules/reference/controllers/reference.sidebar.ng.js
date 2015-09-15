angular
    .module('ethdev')
    .controller('ReferenceSidebarController', ReferenceSidebarController);

function ReferenceSidebarController($scope) {

    $scope.sidebarClassFilter = function(item){

        switch (item.parser){

            case 'marked':
                return (item.summary.kind == 'page');

            case 'doxygen':
                return (item.summary.kind == 'class' /*|| item.summary.kind == 'struct'*/);

            case 'jsdoc':
                return (item.summary.kind == 'function' || item.summary.kind == 'typedef');

        }

    };

}
