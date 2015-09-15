angular
    .module('ethdev')
    .controller('LandingController', LandingController);

function LandingController($meteor, $scope, $state, $timeout) {

    $scope.projects = $meteor.collection(function(){
        return DocsReferenceProjects.find({
            _version: 'develop'
        });
    });

    $scope.books = $meteor.collection(function(){
        return DocsWikiBooks.find({});
    });

    /////// TODO: move to a directive

    $scope.openProject = function(project){
        expandTile('#ethereum-tile-reference', 'page.reference.project.index', {
            version: project._version,
            project: project.slug
        });
    };

    $scope.openBook = function(book){
        expandTile('#ethereum-tile-wiki', 'page.wiki.book.index', {
            book: book.slug,
            language: 'english'
        });
    };

    function expandTile(tile, state, params){

        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        };

        var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

        var $tile = $(tile);

        if (!$tile.data('open')) {
            $tile.data('open', true).addClass('expanded');
            $tile.on(transEndEventName, function(event) {
                if (event.originalEvent.propertyName == 'opacity') {
                    $state.go(state, params)
                }
            });
        }

    }

    /////////////////////////////////

}
