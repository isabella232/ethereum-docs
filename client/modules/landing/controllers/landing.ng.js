angular
    .module('ethdev')
    .controller('LandingController', LandingController);

function LandingController($meteor, $scope, $state) {

    $scope.projects = $meteor.collection(function(){
        return DocsProjects.find({
            _version: 'develop',
            type: 'project'
        });
    });

    $scope.wikis = $meteor.collection(function(){
        return DocsProjects.find({
            _version: 'develop',
            'type': 'wiki'
        });
    });

    var transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition' : 'transitionend',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
    };

    var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

    $scope.openProject = function(project){

        var $tile = $('#ethereum-tile-reference');

        if (!$tile.data('open')) {
            $tile.data('open', true).addClass('expanded');
            $tile.on(transEndEventName, function(event) {
                if (event.originalEvent.propertyName == 'opacity') {
                    $state.go('page.reference.project.index', {
                        version: project._version,
                        project: project.slug
                    })
                }
            });
        }

    };

    $scope.openWiki = function(wiki){

        var $tile = $('#ethereum-tile-wikis');

        if (!$tile.data('open')) {
            $tile.data('open', true).addClass('expanded');
            $tile.on(transEndEventName, function(event) {
                if (event.originalEvent.propertyName == 'opacity') {
                    $state.go('page.wikis.wiki.index', {
                        version: wiki._version,
                        wiki: wiki.slug
                    })
                }
            });
        }

    };

}
