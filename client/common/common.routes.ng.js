angular
    .module('ethdev')
    .config(commonRoutes);

function commonRoutes($stateProvider) {

    // Wrapper for all pages
    $stateProvider.state('page', {
        url: '/',
        templateUrl: 'client/common/views/page.layout.ng.html',
        controller: 'PageController',
        abstract: true
    });

}
