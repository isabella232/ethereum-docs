angular
    .module('ethdev')
    .directive('docsSection', docsSection);

function docsSection($compile, $templateCache) {

    return {
        restrict: 'E',
        controller: 'CompoundController',
        scope: {
            kind: '=',
            body: "="
        },
        link: function (scope, element, attrs) {

            var headings = {
                "user-defined": "User defined",
                "public-type": "Public types",
                "public-func": "Public functions",
                "public-attrib": "Public attributes",
                "public-slot": "Public slots",
                "signal": "Signals",
                "dcop-func": "Desktop communication protocol functions",
                "property": "Properties",
                "event": "Events",
                "public-static-func": "Public static functions",
                "public-static-attrib": "Public static attributes",
                "protected-type": "Protected types",
                "protected-func": "Protected functions",
                "protected-attrib": "Protected attributes",
                "protected-slot": "Protected slots",
                "protected-static-func": "Protected static functions",
                "protected-static-attrib": "Protected static attributes",
                "package-type": "Package types",
                "package-func": "Package functions",
                "package-attrib": "Package attributes",
                "package-static-func": "Package static functions",
                "package-static-attrib": "Package static attributes",
                "private-type": "Private types",
                "private-func": "Private functions",
                "private-attrib": "Private attributes",
                "private-slot": "Private slots",
                "private-static-func": "Private static functions",
                "private-static-attrib": "Private static attributes",
                "friend": "Friends",
                "related": "Related",
                "define": "Defines",
                "prototype": "Prototypes",
                "typedef": "Type definitions",
                "enum": "Enumerations",
                "func": "Functions",
                "var": "Variables"
            };

            scope.heading = headings[scope.kind];

            element.append($compile(
                $templateCache.get('client/components/compound/views/doxygen/section.ng.html')
            )(scope));

        }
    };


}
