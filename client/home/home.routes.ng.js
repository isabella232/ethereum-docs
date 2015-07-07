angular
    .module('ethdev')
    .config(homeRoutes);

function homeRoutes($stateProvider) {
    $stateProvider.state('page.home', {
        url: '',
        templateUrl: 'client/home/views/home.ng.html'
    });
}