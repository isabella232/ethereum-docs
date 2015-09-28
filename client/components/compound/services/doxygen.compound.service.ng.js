angular
    .module('ethdev')
    .factory('DoxygenCompoundService', DoxygenCompoundService);

function DoxygenCompoundService($compile, $templateCache){

    function doxygenName(scope, name){
        scope.name = name;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/name.ng.html')
        )(scope);
    }

    function doxygenDescription(scope, description){
        return $compile(description.html)(scope);
    }

    function doxygenIncludes(scope, includes){
        scope.includes = includes;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/includes.ng.html')
        )(scope);
    }

    function doxygenIncludedBy(scope, includedBy){
        scope.includedBy = includedBy;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/includedby.ng.html')
        )(scope);
    }

    function doxygenInner(scope, inner){
        scope.inner = inner;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/inner.ng.html')
        )(scope);
    }

    function doxygenListOfAllMembers(scope, members){
        scope.members = members;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/members.ng.html')
        )(scope);
    }

    function doxygenReferences(scope, references){
        scope.references = references;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/references.ng.html')
        )(scope);
    }

    function doxygenSections(scope, sections){
        scope.sections = sections;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/sections.ng.html')
        )(scope);
    }

    function doxygenLocation(scope, location){
        scope.location = location;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/location.ng.html')
        )(scope);
    }

    function doxygenTemplateParams(scope, templateParams){
        scope.params = templateParams;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/params.ng.html')
        )(scope);
    }

    function doxygenProgramListing(scope, programListing){
        scope.listing = programListing;
        return $compile(
            $templateCache.get('client/components/compound/views/doxygen/listing.ng.html')
        )(scope);
    }

    return {
        name: doxygenName,
        description: doxygenDescription,
        includes: doxygenIncludes,
        includedBy: doxygenIncludedBy,
        inner: doxygenInner,
        listOfAllMembers: doxygenListOfAllMembers,
        references: doxygenReferences,
        sections: doxygenSections,
        location: doxygenLocation,
        templateParams: doxygenTemplateParams,
        programListing: doxygenProgramListing
    };

}
