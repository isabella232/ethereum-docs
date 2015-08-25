angular
    .module('ethdev')
    .controller('PageController', PageController);


function PageController($scope, state) {

    //console.log(state);

    // Page background (specified in route definition)
    $scope.background = state.$current.parent.self.background;

}
