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

                scope.categories = {};
                scope.groupedPages = [];

                scope.pages.forEach(function(page){

                    if (page.summary[scope.selection.language]) {

                        var pagename = page.slug;
                        var category = 'Uncategorized';

                        if (page.summary[scope.selection.language].meta) {

                            if (page.summary[scope.selection.language].meta.name) {
                                pagename = page.summary[scope.selection.language].meta.name;
                            }

                            if (page.summary[scope.selection.language].meta.category) {
                                category = page.summary[scope.selection.language].meta.category;
                            }

                        }

                        if (!scope.categories[category]) {
                            scope.categories[category] = {
                                name: category,
                                pages: []
                            };
                        }

                        scope.categories[category].pages.push({
                            slug: page.slug,
                            name: pagename
                        });

                        scope.groupedPages.push({
                            slug: page.slug,
                            name: pagename,
                            category: category
                        });

                    }

                });

                element.html($compile(
                    $templateCache.get('client/modules/wiki/views/wiki.sidebar.ng.html')
                )(scope));

            });



        }
    };

}
