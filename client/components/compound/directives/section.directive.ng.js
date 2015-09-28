angular
    .module('ethdev')
    .directive('docsSection', docsSection);

function docsSection($compile, $templateCache, $state, DoxygenCompoundService) {

    return {
        restrict: 'E',
        controller: 'CompoundController',
        scope: {
            kind: '=',
            body: "="
        },
        link: function (scope, element, attrs) {

            element.append('<div>'+scope.kind+'</div>');

        }
    };


}
