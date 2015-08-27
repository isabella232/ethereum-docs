angular
    .module('ethdev')
    .directive('compoundParams', compoundParams);

function compoundParams($compile) {
    return {
        restrict: 'E',
        scope: {
            params: "="
        },
        link: function (scope, element, attrs) {
            element.replaceWith();
        }
    };
}
