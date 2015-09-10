angular
    .module('ethdev')
    .config(tutorialsRoutes);

function tutorialsRoutes($stateProvider) {

    $stateProvider.state('page.tutorials', {
        url: 'tutorials/',
        controller: 'TutorialsController',
        templateUrl: 'client/modules/tutorials/views/tutorials.layout.ng.html',
        tileTemplateUrl: 'client/modules/tutorials/views/tutorials.tile.ng.html',
        abstract: true
    });

    // List of all available tutorials
    $stateProvider.state('page.tutorials.index', {
        url: '',
        templateUrl: 'client/modules/wikis/views/wikis.wiki.ng.html'
    });

    // Tutorial listing
    $stateProvider.state('page.tutorials.page', {
        url: ':page/',
        templateUrl: 'client/modules/wikis/views/wikis.page.ng.html'
    });

}