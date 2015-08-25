angular
    .module('ethdev')
    .config(landingRoutes);

function landingRoutes($stateProvider) {

    $stateProvider.state('landing', {
        url: '/',
        controller: 'LandingController',
        templateUrl: 'client/modules/landing/views/landing.ng.html'
    });

}