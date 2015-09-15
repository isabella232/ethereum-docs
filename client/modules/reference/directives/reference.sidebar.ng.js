angular
    .module('ethdev')
    .directive('ethereumReferenceSidebar', ethereumReferenceSidebar);

function ethereumReferenceSidebar($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        scope: {
            compounds: '=',
            selection: '='
        },
        controller: 'ReferenceSidebarController',
        link: function (scope, element, attrs) {

            element.append($compile(
                $templateCache.get('client/modules/reference/views/reference.sidebar.ng.html')
            )(scope));

        }
    };

}
