angular
    .module('ethdev')
    .config(statusRoutes);

function statusRoutes($stateProvider) {

    $stateProvider.state('page.status', {
        url: 'status/',
        controller: 'StatusController',
        templateUrl: 'client/modules/status/views/status.layout.ng.html',
        background: '#4c5053',
        tileTemplateUrl: 'client/modules/status/views/status.tile.ng.html',
        abstract: true
    });

    $stateProvider.state('page.status.index', {
        url: '',
        template: 'status index page'
    });

}