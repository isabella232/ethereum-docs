angular
    .module('ethdev')
    .directive('ethereumWikiSidebar', ethereumWikiSidebar);

function ethereumWikiSidebar($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        scope: {
            pages: '=',
            selection: '='
        },
        link: function (scope, element, attrs) {

            var defaultLanguage = 'english';

            console.log(scope.pages)

            scope.links = [];

            scope.pages.forEach(function(page){

                if (page.summary['english']) {

                    scope.links.push({
                        slug: page.slug,
                        name: page.summary['english'].name
                    });

                }

                /*var name, language;

                if (page.summary[scope.selection.language]) {
                    name = page.summary[scope.selection.language].name;
                    language = scope.selection.language;
                } else if (page.summary[defaultLanguage]) {
                    name = page.summary[defaultLanguage].name;
                    language = defaultLanguage;
                }

                // If there is translation or English original
                if (name) {
                    scope.links.push({
                        slug: page.slug,
                        name: name,
                        language: language
                    });
                }*/

            });

            element.append($compile(
                $templateCache.get('client/modules/wiki/views/wiki.sidebar.ng.html')
            )(scope));

        }
    };

}
