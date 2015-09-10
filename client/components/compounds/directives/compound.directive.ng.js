angular
    .module('ethdev')
    .directive('compound', compound);

function compound($compile, $templateCache, $state) {

    return {
        restrict: 'E',
        controller: 'CompoundController',
        scope: {
            parser: '=',
            body: "="
        },
        link: function (scope, element, attrs) {

            switch(scope.parser) {

                case 'jsdoc':
                    element.append(createJsdocCompounds(scope));
                    break;

                case 'markdown':
                    element.append(createMarkdownCompounds(scope));
                    break;

                case 'doxygen':
                    element.append(createDoxygenCompounds(scope));
                    break;

            }

        }
    };

    function createDoxygenCompounds(scope) {

        switch (scope.body.kind) {

            case 'class':
            case 'struct':
                return createDoxygenClass(scope);

            case 'file':
                return createDoxygenFile(scope);

            case 'page':
                return createDoxygenPage(scope);

            case 'dir':
                return createDoxygenDir(scope);

            // TODO: Doxygen compound templates
            //case 'union':
            //case 'interface':
            //case 'protocol':
            //case 'category':
            //case 'exception':
            //case 'example':
            //case 'namespace':
            //case 'group':

            default:
                console.log('No template for Doxygen ' + scope.body.kind);

        }

    }

    function createDoxygenClass(scope) {

        var $sections = $('<div></div>');

        var sortedCompounds = sortCompounds(scope.body, [
            'name',
            "kind",
            "prot",
            'briefdescription',
            'detaileddescription',
            'sections'
        ]);

        _.forEach(sortedCompounds, function(value, key){

            var $section = $('<section class="compound"></section>');

            switch(key) {

                case 'name':
                    scope.name = value;
                    $section.addClass('compound-name');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/heading.ng.html')
                    )(scope));
                    break;

                case 'briefdescription':
                    scope.description = value;
                    $section.addClass('compound-brief-description');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/brief-description.ng.html')
                    )(scope));
                    break;

                case 'detaileddescription':
                    scope.description = value;
                    $section.addClass('compound-detailed-description');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/detailed-description.ng.html')
                    )(scope));
                    break;

                case 'sections':
                    scope.sections = value;
                    $section.addClass('compound-sections');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/sections.ng.html')
                    )(scope));
                    break;

                case 'kind':
                    // Do nothing
                    break;

                default:
                    //console.log('No template for: ' + key);
                    return;

            }

            $sections.append($section);

        });

        return $sections;

    }

    function createDoxygenFile(scope) {

        var $sections = $('<div></div>');

        // TODO: sort compounds appropriately
        var sortedCompounds = scope.body;

        _.forEach(sortedCompounds, function(value, key){

            var $section = $('<section class="compound"></section>');

            switch(key) {

                case 'name':
                    scope.name = value;
                    $section.addClass('compound-name');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/heading.ng.html')
                    )(scope));
                    break;

                default:
                    //console.log('No template for: ' + key);
                    return;

            }

            $sections.append($section);

        });

        return $sections;

    }

    function createDoxygenPage(scope) {

        var $sections = $('<div></div>');

        // TODO: sort compounds appropriately
        var sortedCompounds = scope.body;

        _.forEach(sortedCompounds, function(value, key){

            var $section = $('<section class="compound"></section>');

            switch(key) {

                case 'name':
                    scope.name = value;
                    $section.addClass('compound-name');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/heading.ng.html')
                    )(scope));
                    break;

                default:
                    console.log('No template for: ' + key);
                    return;

            }

            $sections.append($section);

        });

        return $sections;

    }

    function createDoxygenDir(scope) {

        var $sections = $('<div></div>');

        // TODO: sort compounds appropriately
        var sortedCompounds = scope.body;

        _.forEach(sortedCompounds, function(value, key){

            var $section = $('<section class="compound"></section>');

            switch(key) {

                case 'name':
                    scope.name = value;
                    $section.addClass('compound-name');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/heading.ng.html')
                    )(scope));
                    break;

                default:
                    console.log('No template for: ' + key);
                    return;

            }

            $sections.append($section);

        });

        return $sections;

    }

    function createMarkdownCompounds(scope) {

        var $mdBlock = $('<div></div>');
        $mdBlock.html(scope.body.content);
        return $mdBlock;

    }

    function createJsdocCompounds(scope) {

        var $sections = $('<div></div>');

        var sortedCompounds = sortCompounds(scope.body, [
            'name',
            'description',
            "properties",
            "params",
            'returns',
            'examples'
        ]);

        _.forEach(sortedCompounds, function(value, key){

            var $section = $('<section class="compound"></section>');

            switch(key) {

                case 'name':
                    scope.name = value;
                    $section.addClass('compound-name');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/heading.ng.html')
                    )(scope));
                    break;

                case 'properties':
                    scope.properties = value;
                    $section.addClass('compound-properties');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/properties.ng.html')
                    )(scope));
                    break;

                case 'params':
                    if (value.length){
                        scope.params = value;
                        $section.addClass('compound-params');
                        $section.append($compile(
                            $templateCache.get('client/components/compounds/views/params.ng.html')
                        )(scope));
                    }
                    break;

                case 'returns':
                    scope.returns = value;
                    $section.addClass('compound-returns');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/returns.ng.html')
                    )(scope));
                    break;

                case 'examples':
                    scope.examples = value;
                    $section.addClass('compound-examples');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/examples.ng.html')
                    )(scope));
                    break;

                // TODO: process internal links
                case 'description':
                    scope.text = value;
                    $section.addClass('compound-description');
                    $section.append($compile(
                        $templateCache.get('client/components/compounds/views/text.ng.html')
                    )(scope));
                    break;

                case 'id':
                case 'longname':
                case 'kind':
                case 'scope':
                case 'order':
                case 'deprecated':
                    // Do nothing
                    break;

                default:
                    console.log('No template for: ' + key);
                    return;

            }

            $sections.append($section);

        });

        return $sections;

    }

    // TODO: review efficiency
    function sortCompounds(compounds, order){

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
