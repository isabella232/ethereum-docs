angular
    .module('ethdev')
    .directive('docsCompound', docsCompound);

function docsCompound($compile, $templateCache, $state, DoxygenCompoundService) {

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

        switch (scope.kind) {

            default:
                console.log('No template for: jsdoc ' + scope.kind);

        }

    }

    function markedCompound(scope){

        switch (scope.kind) {

            default:
                console.log('No template for: marked ' + scope.kind);

        }

    }

    function doxygenCompound(scope){

        var templates = {
            "name": DoxygenCompoundService.name,
            "description": DoxygenCompoundService.description,
            "includes": DoxygenCompoundService.includes,
            "includedby": DoxygenCompoundService.includedBy,
            "inner": DoxygenCompoundService.inner,
            "listofallmembers": DoxygenCompoundService.listOfAllMembers,
            "references": DoxygenCompoundService.references,
            "sections": DoxygenCompoundService.sections,
            "location": DoxygenCompoundService.location,
            "templateparams": DoxygenCompoundService.templateParams,
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






/*
 case 'name':
 case 'description':
 case 'includes':
 case 'includedby':

 case 'innerdir':
 case 'innerfile':
 case 'innerclass':
 case 'innernamespace':
 case 'innerpage':
 case 'innergroup':

 case 'listofallmembers':

 case 'basecompoundref':
 case 'derivedcompoundref':

 case 'sections':

 case 'location':

 case 'templateparamlist':

 case 'programlisting':

 case 'incdepgraph':
 case 'invincdepgraph':
 case 'briefdescription':
 case 'detaileddescription':
 case 'inheritancegraph':
 case 'collaborationgraph':
 */
