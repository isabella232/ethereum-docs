angular
    .module('ethdev')
    .directive('erTiles', tiles);

function tiles() {
    return {
        restrict: 'E',
        controller: 'TilesController',
        scope: {
            tiles: "="
        }
    };
}