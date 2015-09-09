angular
    .module('ethdev')
    .config(referenceRoutes);

function referenceRoutes($stateProvider) {

    $stateProvider.state('page.reference', {
        url: 'reference/',
        controller: 'ReferenceController',
        templateUrl: 'client/modules/reference/views/reference.layout.ng.html',
        background: '#4c5053',
        tileTemplateUrl: 'client/modules/reference/views/reference.tile.ng.html',
        abstract: true,
        resolve: {
            selection: function($stateParams){
                return $stateParams;
            }
        }
    });

    // List of all available documentation versions
    $stateProvider.state('page.reference.index', {
        url: '',
        controller: 'ReferenceIndexController',
        templateUrl: 'client/modules/reference/views/reference.index.ng.html'
    });

    // List of all projects in the selected version
    $stateProvider.state('page.reference.version', {
        url: ':version/',
        controller: 'ReferenceVersionController',
        templateUrl: 'client/modules/reference/views/reference.version.ng.html'
    });

    $stateProvider.state('page.reference.project', {
        url: ":version/:project/",
        controller: 'ReferenceProjectController',
        templateUrl: 'client/modules/reference/views/reference.project.layout.ng.html',
        abstract: true
    });

    $stateProvider.state('page.reference.project.index', {
        url: "",
        templateUrl: 'client/modules/reference/views/reference.project.index.ng.html'
    });

    $stateProvider.state('page.reference.project.compound', {
        url: ":compound/",
        controller: 'ReferenceCompoundController',
        templateUrl: 'client/modules/reference/views/reference.project.compound.ng.html'
    });









    $stateProvider.state('page.wikis', {
        url: 'wikis/',
        controller: 'WikisController',
        templateUrl: 'client/modules/reference/views/wikis.layout.ng.html',
        background: '#4c5053',
        tileTemplateUrl: 'client/modules/reference/views/reference.tile.ng.html',
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
        templateUrl: 'client/modules/reference/views/wikis.index.ng.html'
    });

    $stateProvider.state('page.wikis.wiki', {
        url: ":wiki/",
        controller: 'WikisWikiController',
        templateUrl: 'client/modules/reference/views/wikis.wiki.layout.ng.html',
        abstract: true
    });

    $stateProvider.state('page.wikis.wiki.index', {
        url: "",
        templateUrl: 'client/modules/reference/views/wikis.wiki.index.ng.html'
    });

    $stateProvider.state('page.wikis.wiki.page', {
        url: ":page/",
        controller: 'WikisPageController',
        templateUrl: 'client/modules/reference/views/wikis.wiki.page.ng.html'
    });

}
