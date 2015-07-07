angular
    .module('ethdev.docs')
    .directive('codeBlock', codeBlock);


function codeBlock($http, $templateCache, $compile) {

    return {
        restrict: 'E',
        template: '<div id="codeblock"></div>',
        scope: {
            mode: "=",
            value: "="
        },
        link: function (scope, element, attrs) {

            AceEditor.instance("codeblock", {
                theme: "chrome",
                mode: scope.mode
            }, function(editor){
                editor.$blockScrolling = Infinity;
                editor.textInput.getElement().disabled = true;
                editor.renderer.$cursorLayer.element.style.opacity = 0;
                editor.commands.commmandKeyBinding = {};
                editor.setOptions({
                    maxLines: Infinity,
                    readOnly: true,
                    highlightActiveLine: false,
                    highlightGutterLine: false
                });
                editor.setValue(scope.value, 1);
            });

        }
    };

}
