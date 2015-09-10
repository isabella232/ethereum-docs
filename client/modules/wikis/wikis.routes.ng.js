angular
    .module('ethdev')
    .config(wikisRoutes);

function wikisRoutes($stateProvider) {

    $stateProvider.state('page.wikis', {
        url: 'wikis/',
        controller: 'WikisController',
        templateUrl: 'client/modules/wikis/views/wikis.layout.ng.html',
        abstract: true,
        resolve: {
            selection: function($stateParams){
                return $stateParams;
            }
        }
    });

    $stateProvider.state('page.wikis.index', {
        url: '',
        controller: 'WikisIndexController',
        templateUrl: 'client/modules/wikis/views/wikis.index.ng.html'
    });

    $stateProvider.state('page.wikis.wiki', {
        url: ":wiki/",
        controller: 'WikisWikiController',
        templateUrl: 'client/modules/wikis/views/wikis.wiki.layout.ng.html',
        abstract: true
    });

    $stateProvider.state('page.wikis.wiki.index', {
        url: "",
        templateUrl: 'client/modules/wikis/views/wikis.wiki.index.ng.html'
    });

    $stateProvider.state('page.wikis.wiki.page', {
        url: ":page/",
        controller: 'WikisPageController',
        templateUrl: 'client/modules/wikis/views/wikis.wiki.page.ng.html'
    });

}
