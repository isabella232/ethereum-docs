angular
    .module('ethdev')
    .directive('compoundParagraphs', compoundParagraphs);

function compoundParagraphs($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        link: function (scope, element, attrs) {

            scope.items.forEach(function(item){

                var $paragraph = $('<div></div>');
                $paragraph.html(item);
                element.append($paragraph);

            });

        }
    };

}
