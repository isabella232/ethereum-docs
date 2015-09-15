angular
    .module('ethdev')
    .config(wikiRoutes);

function wikiRoutes($stateProvider) {

    $stateProvider.state('page.wiki', {
        url: 'wiki/',
        controller: 'WikiController',
        templateUrl: 'client/modules/wiki/views/wiki.layout.ng.html',
        tileTemplateUrl: 'client/modules/wiki/views/wiki.tile.ng.html',
        abstract: true,
        resolve: {
            selection: function($stateParams){
                return $stateParams;
            }
        }
    });

    $stateProvider.state('page.wiki.index', {
        url: '',
        controller: 'WikiIndexController',
        templateUrl: 'client/modules/wiki/views/wiki.index.ng.html'
    });

    $stateProvider.state('page.wiki.book', {
        url: ":book/:language/",
        controller: 'WikiBookController',
        templateUrl: 'client/modules/wiki/views/wiki.book.layout.ng.html',
        abstract: true
    });

    $stateProvider.state('page.wiki.book.index', {
        url: "",
        templateUrl: 'client/modules/wiki/views/wiki.book.index.ng.html'
    });

    $stateProvider.state('page.wiki.book.page', {
        url: ":page/",
        controller: 'WikiPageController',
        templateUrl: 'client/modules/wiki/views/wiki.book.page.ng.html'
    });

}
