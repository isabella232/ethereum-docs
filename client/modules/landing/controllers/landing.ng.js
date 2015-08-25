angular
    .module('ethdev')
    .controller('LandingController', LandingController);

function LandingController($scope) {

    $scope.tiles = [
        'page.wikis',
        'page.reference',
        'page.tutorials',
        'page.status'
    ];

}
