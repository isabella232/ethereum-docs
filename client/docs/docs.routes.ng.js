angular
    .module('ethdev.docs')
    .config(docsRoutes);

function docsRoutes($stateProvider) {

    $stateProvider.state('page.docs', {
        abstract: true,
        url: 'docs/',
        templateUrl: 'client/docs/views/docs.layout.ng.html',
        controller: 'DocsController',
        resolve: {
            selected: function(StateService){
                return StateService.getParams();
            }
        }
    });
    $stateProvider.state('page.docs.index', {
        url: '',
        templateUrl: 'client/docs/views/index.page.ng.html'
    });
    $stateProvider.state('page.docs.version', {
        url: ':version/',
        templateUrl: 'client/docs/views/version.page.ng.html',
        controller: 'DocsVersionController'
    });

    $stateProvider.state('page.docs.project', {
        abstract: true,
        url: ':version/:project/',
        templateUrl: 'client/docs/views/project.layout.ng.html',
        controller: 'DocsProjectController'
    });
    $stateProvider.state('page.docs.project.index', {
        url: '',
        templateUrl: 'client/docs/views/project.page.ng.html'
    });
    $stateProvider.state('page.docs.project.compound', {
        url: ':compound/',
        templateUrl: 'client/docs/views/compound.page.ng.html',
        controller: 'DocsCompoundController'
    });

}
