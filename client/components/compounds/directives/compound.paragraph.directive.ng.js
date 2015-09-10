angular
    .module('ethdev')
    .directive('compoundParagraph', compoundParagraph);

function compoundParagraph($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        controller: 'CompoundParagraphController',
        scope: {
            items: '='
        },
        link: function (scope, element, attrs) {

            scope.items.forEach(function(item){

                switch (item.name){

                    case 'ref':
                        // TODO: Fix href value
                        var $ulink = $('<a href=""></a>');
                        $ulink.text(item.body);
                        $ulink.bind("click", function(e){
                            scope.selectCompound(item.slug);
                        });
                        element.append(' ').append($ulink);
                        break;

                    default:
                        element.append(item);

                }

            });

        }
    };

}
