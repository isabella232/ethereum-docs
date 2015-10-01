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
        controller: function($scope, $state) {

            // Select book page
            $scope.setPage = function(){
                $state.go('page.wiki.book.page', {
                    book: $scope.selection.book,
                    language: $scope.selection.language || 'english',
                    page: $scope.selection.page
                })
            };

        },
        link: function (scope, element, attrs) {

            scope.$watch('selection.language', function(){

                scope.groupedPages = getPages(scope.selection.language);

                element.html($compile(
                    $templateCache.get('client/modules/wiki/views/wiki.sidebar.ng.html')
                )(scope));

            });

            scope.$watch('pages.length', function(){

                scope.groupedPages = getPages(scope.selection.language);

                element.html($compile(
                    $templateCache.get('client/modules/wiki/views/wiki.sidebar.ng.html')
                )(scope));

            });

            function getPages(language) {

                var groupedPages = [];

                scope.pages.forEach(function(page){

                    if (page.summary[language]) {

                        var pagename = page.slug;
                        var category = 'Uncategorized';

                        if (page.summary[language].meta) {

                            if (page.summary[language].meta.name) {
                                pagename = page.summary[language].meta.name;
                            }

                            if (page.summary[language].meta.category) {
                                category = page.summary[language].meta.category;
                            }

                        }

                        groupedPages.push({
                            slug: page.slug,
                            name: pagename,
                            category: category
                        });

                    }

                });

                return groupedPages;

            }

        }
    };

}
