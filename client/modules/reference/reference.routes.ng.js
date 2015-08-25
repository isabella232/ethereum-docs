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
        abstract: true
    });

    // List of all available documentation versions
    $stateProvider.state('page.reference.index', {
        url: '',
        templateUrl: 'client/modules/reference/views/reference.index.ng.html'
    });

    // List of all projects in the selected version
    $stateProvider.state('page.reference.version', {
        url: ':version/',
        templateUrl: 'client/modules/reference/views/reference.version.ng.html'
    });

    // Project summary, links to class and file references
    $stateProvider.state('page.reference.project', {
        url: ':version/:project/',
        templateUrl: 'client/modules/reference/views/reference.project.ng.html'
    });

    // File reference for the selected project
    $stateProvider.state('page.reference.files', {
        url: ':version/:project/files/',
        templateUrl: 'client/modules/reference/views/reference.files.ng.html'
    });

    // File listing
    $stateProvider.state('page.reference.file', {
        url: ':version/:project/files/:file/',
        templateUrl: 'client/modules/reference/views/reference.file.ng.html'
    });

    // Class reference for the selected project
    $stateProvider.state('page.reference.classes', {
        url: ':version/:project/classes/',
        templateUrl: 'client/modules/reference/views/reference.classes.ng.html'
    });

    // Class description
    $stateProvider.state('page.reference.class', {
        url: ':version/:project/classes/:class/',
        templateUrl: 'client/modules/reference/views/reference.class.ng.html'
    });

}
