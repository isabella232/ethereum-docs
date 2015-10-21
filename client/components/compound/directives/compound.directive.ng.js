angular
    .module('ethdev')
    .directive('docsCompound', docsCompound);

function docsCompound(JsdocCompoundService, DoxygenCompoundService, MarkedCompoundService) {

    return {
        restrict: 'E',
        controller: 'CompoundController',
        scope: {
            parser: '=',
            kind: '=',
            body: "="
        },
        link: function (scope, element, attrs) {

            switch (scope.parser) {

                case 'jsdoc':
                    element.append(jsdocCompound(scope));
                    break;

                case 'marked':
                    element.append(markedCompound(scope));
                    break;

                case 'doxygen':
                    element.append(doxygenCompound(scope));
                    break;

            }

        }
    };

    function jsdocCompound(scope){

        var templates = {
            "longname": JsdocCompoundService.name,
            "description": JsdocCompoundService.description,
            "params": JsdocCompoundService.params,
            "returns": JsdocCompoundService.returns
        };

        var data = sortKeys(scope.body, Object.keys(templates));

        var $sections = $('<div></div>');

        $sections.addClass('docs-compound-jsdoc');

        _.forEach(data, function(value, key) {

            var $section = $('<section></section>');
            $section.addClass('docs-jsdoc-' + key);

            var html = (templates[key] || function(){
                console.log('No template for: jsdoc ' + key);
            })(scope, value);

            $section.append(html);

            $sections.append($section);

        });

        return $sections;

    }

    function markedCompound(scope){

        return MarkedCompoundService.page(scope);

    }

    function doxygenCompound(scope){

        var templates = {
            "name": DoxygenCompoundService.name,
            "description": DoxygenCompoundService.description,
            "location": DoxygenCompoundService.location,
            "includes": DoxygenCompoundService.includes,
            "includedby": DoxygenCompoundService.includedBy,
            "templateparams": DoxygenCompoundService.templateParams,
            "listofallmembers": DoxygenCompoundService.listOfAllMembers,
            "inner": DoxygenCompoundService.inner,
            "references": DoxygenCompoundService.references,
            "sections": DoxygenCompoundService.sections,
            "programlisting": DoxygenCompoundService.programListing
        };

        var data = sortKeys(scope.body, Object.keys(templates));

        var $sections = $('<div></div>');

        $sections.addClass('docs-compound-doxygen');

        _.forEach(data, function(value, key) {

            var $section = $('<section></section>');
            $section.addClass('docs-doxygen-' + key);

            var html = (templates[key] || function(){
                console.log('No template for: doxygen ' + key);
            })(scope, value);

            $section.append(html);

            $sections.append($section);

        });

        return $sections;

    }

    function sortKeys(compounds, order){

        var keys = Object.keys(compounds);
        var i, len = keys.length;
        var sortedCompounds = {};

        keys.sort(function(a,b){
            var indexA = $.inArray(a, order);
            var indexB = $.inArray(b, order);
            return (indexA < indexB) ? -1 : (indexA > indexB) ? 1 : 0;
        });

        for (i = 0; i < len; i++){
            sortedCompounds[keys[i]] = compounds[keys[i]];
        }

        return sortedCompounds;

    }

}
