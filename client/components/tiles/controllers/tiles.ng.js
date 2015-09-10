angular
    .module('ethdev')
    .controller('TilesController', TilesController);


function TilesController($element, $scope, $state, $templateCache, $compile) {

    var Boxlayout = (function() {

        var $container;

        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        };

        var transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
        var supportTransitions = Modernizr.csstransitions;

        function init(container, tiles) {

            if (tiles.length !== 4) {
                throw new Error("Exactly four tiles must be passed to the BoxLayout initializer");
            }

            $container = container;

            tiles.forEach(function(tile) {

                var $box = $('<div class="er-tiles-box"></div>');

                var template = $templateCache.get(
                    $state.get(tile).tileTemplateUrl
                );

                if (template) {
                    $box.append($compile(template)($scope));
                } else {
                    console.log('No template found for tile: ' + tile);
                }

                var $page = $('<div class="er-tiles-page"></div>');
                var $section = $('<section class="animated" style="background:#555;" id="'+tile+'"></section>');
                $section.append($box);
                $section.append($page);

                // Expand the clicked section and scale down the others
                $section.on('click', function() {

                    if (!$section.data('open')) {
                        $section.data('open', true).addClass('er-expand er-expand-top');
                        $container.addClass('er-expand-item');

                        $section.on(transEndEventName, function(event) {

                            if (event.originalEvent.propertyName == 'opacity') {
                                $state.go(tile + '.index');
                            }

                        });
                    }

                }).find('span.er-icon-close').on('click', function() {

                    // Close the expanded section and scale up the others
                    $section.data('open', false).removeClass('er-expand').on(transEndEventName, function(event) {

                        if (!$(event.target).is('section')) {
                            return false;
                        }

                        $(this).off(transEndEventName).removeClass('er-expand-top');

                    });

                    if (!supportTransitions) {
                        $section.removeClass('er-expand-top');
                    }

                    $container.removeClass('er-expand-item');

                    return false;

                });

                $container.append($section);

            });

            var $intersection = $('<div class="er-tiles-intersection"></div>');
            $container.append($intersection);

        }

        return {
            init : init
        };

    })();

    $(function() {
        Boxlayout.init($element, $scope.tiles);
    });

}
