angular
    .module('ethdev')
    .factory('DoxygenSectionService', DoxygenSectionService);

function DoxygenSectionService($compile, $templateCache){

    function section(scope, name){

        /*
        user-defined
        public-type
        public-func
        public-attrib
        public-slot
        signal
        dcop-func
        property
        event
        public-static-func
        public-static-attrib
        protected-type
        protected-func
        protected-attrib
        protected-slot
        protected-static-func
        protected-static-attrib
        package-type
        package-func
        package-attrib
        package-static-func
        package-static-attrib
        private-type
        private-func
        private-attrib
        private-slot
        private-static-func
        private-static-attrib
        friend
        related
        define
        prototype
        typedef
        enum
        func
        var
        */

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
