angular
    .module('ethdev')
    .directive('doxygenSection', doxygenSection);

function doxygenSection($compile, $templateCache) {

    return {
        restrict: 'E',
        scope: {
            kind: '=',
            body: "="
        },
        link: function (scope, element, attrs) {

            scope.header = scope.body.header;
            scope.description = scope.body.description;
            scope.members = scope.body.members;

            var template = $templateCache.get(
                'client/components/compounds/views/doxygen/sections/' + scope.kind + '.ng.html'
            );

            if (template) {
                element.append($compile(template)(scope));
            } else {
                console.log('No template for Doxygen section: ' + scope.kind);
            }

            //case 'private-attrib':
            //case 'private-func':
            //case 'private-static-attrib':
            //case 'protected-attrib':
            //case 'protected-func':
            //case 'public-attrib':
            //case 'public-func':
            //case 'public-static-attrib':
            //case 'public-static-func':
            //case 'public-type':

            // TODO:
            //case 'user-defined':
            //case 'public-slot':
            //case 'signal':
            //case 'dcop-func':
            //case 'property':
            //case 'event':
            //case 'private-static-func':
            //case 'protected-type':
            //case 'protected-slot':
            //case 'protected-static-func':
            //case 'protected-static-attrib':
            //case 'package-type':
            //case 'package-func':
            //case 'package-attrib':
            //case 'package-static-func':
            //case 'package-static-attrib':
            //case 'private-type':
            //case 'private-slot':
            //case 'friend':
            //case 'related':
            //case 'define':
            //case 'prototype':
            //case 'typedef':
            //case 'enum':
            //case 'func':
            //case 'var':

        }
    };

}
