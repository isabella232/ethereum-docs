angular
    .module('ethdev')
    .config(wikisRoutes);

function wikisRoutes($stateProvider) {

    $stateProvider.state('page.wikis', {
        url: 'wikis/',
        controller: 'WikisController',
        templateUrl: 'client/modules/wikis/views/wikis.layout.ng.html',
        background: '#4c5053',
        tileTemplateUrl: 'client/modules/wikis/views/wikis.tile.ng.html',
        abstract: true
    });

    // List of all available wikis
    $stateProvider.state('page.wikis.index', {
        url: '',
        templateUrl: 'client/modules/wikis/views/wikis.index.ng.html'
    });

    // List of all pages in the selected wiki
    $stateProvider.state('page.wikis.wiki', {
        url: ':wiki/',
        templateUrl: 'client/modules/wikis/views/wikis.wiki.ng.html'
    });

    // Wiki page listing
    $stateProvider.state('page.wikis.page', {
        url: ':wiki/:page/',
        templateUrl: 'client/modules/wikis/views/wikis.page.ng.html'
    });

}
