angular
    .module('ethdev')
    .directive('aceEditor', aceEditor);

function aceEditor($compile) {
    return {
        restrict: 'E',
        controller: function($element){
            console.log($element)
        },
        scope: {
            code: "="
        },
        link: function (scope, element, attrs) {

            var $editor = $('<div style="height:300px;"></div>');

            $editor.append(scope.code);

            var editor = AceEditor.instance($editor[0], {
                theme: "dawn",
                mode: "html"
            });

            /*editor.getSession().setUseWrapMode(false);

            editor.setOptions({
                maxLines: editor.session.getLength()
            });*/

            element.replaceWith($editor);

        }
    };
}
