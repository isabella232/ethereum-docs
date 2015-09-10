angular
    .module('ethdev')
    .config(referenceRoutes);

function referenceRoutes($stateProvider) {

    $stateProvider.state('page.reference', {
        url: 'reference/',
        controller: 'ReferenceController',
        templateUrl: 'client/modules/reference/views/reference.layout.ng.html',
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

}
