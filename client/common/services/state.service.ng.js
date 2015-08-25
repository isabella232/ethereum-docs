angular
    .module('ethdev')
    .factory('StateService', StateService);

function StateService($state, $rootScope) {

    var selected = {};

    function getState(){
        return $state;
    }

    function setSelected(state){
        selected = {
            version: state.params.version,
            project: state.params.project,
            type: state.params.type,
            class: state.params.class,
            file: state.params.file,
            wiki: state.params.wiki,
            page: state.params.page
        };
        $rootScope.$broadcast("selection:updated");
    }

    function getSelected(){
        return selected;
    }

    function selectVersion(version){

        selected.version = version;

        if (selected.version) {

            $state.go('page.reference.version', {
                version: selected.version
            });

        } else {

            $state.go('page.reference.index');

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectProject(project){

        selected.project = project;

        if (selected.project) {

            $state.go('page.reference.project', {
                version: selected.version,
                project: selected.project
            });

        } else {

            $state.go('page.reference.version', {
                version: selected.version
            });

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectType(type){

        selected.type = type;

        if (selected.type){

            if (selected.type.toLowerCase() == 'classes'){

                $state.go('page.reference.classes', {
                    version: selected.version,
                    project: selected.project
                });

            } else if (selected.type.toLowerCase() == 'files'){

                $state.go('page.reference.files', {
                    version: selected.version,
                    project: selected.project
                });

            }

        } else {

            $state.go('page.reference.project', {
                version: selected.version,
                project: selected.project
            });

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectClass(classname){

        selected.class = classname;
        selected.compound = classname;

        if (selected.class) {

            $state.go('page.reference.class', {
                version: selected.version,
                project: selected.project,
                class: selected.class
            });

        } else {

            $state.go('page.reference.classes', {
                version: selected.version,
                project: selected.project
            });

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectFile(filename){

        selected.file = filename;
        selected.compound = filename;

        if (selected.file) {

            $state.go('page.reference.file', {
                version: selected.version,
                project: selected.project,
                file: selected.file
            });

        } else {

            $state.go('page.reference.files', {
                version: selected.version,
                project: selected.project
            });

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectWiki(wiki){

        selected.wiki = wiki;

        if (selected.wiki) {

            $state.go('page.wikis.wiki', {
                wiki: selected.wiki
            });

        } else {

            $state.go('page.wikis.index');

        }

        $rootScope.$broadcast("selection:updated");

    }

    function selectPage(page){

        selected.page = page;

        if (selected.page) {

            $state.go('page.wikis.page', {
                wiki: selected.wiki,
                page: selected.page
            });

        } else {

            $state.go('page.wikis.wiki', {
                wiki: selected.wiki
            });

        }

        $rootScope.$broadcast("selection:updated");

    }

    return {
        getState: getState,
        setSelected: setSelected,
        getSelected: getSelected,
        selectVersion: selectVersion,
        selectProject: selectProject,
        selectType: selectType,
        selectClass: selectClass,
        selectFile: selectFile,
        selectWIki: selectWiki,
        selectPage: selectPage
    };

}

function ReferenceStateService($state, $rootScope){

    var params = {
        version: undefined,
        project: undefined,
        type: undefined,
        compound: undefined
    };

    function init(state){
        params = state.params;
    }

    function getParams(){
        return params;
    }

    function setVersion(){
        $rootScope.$broadcast("state:params:updated");
    }

    function setProject(){
        $rootScope.$broadcast("state:params:updated");
    }

    function setClass(){
        $rootScope.$broadcast("state:params:updated");
    }

    function setFile(){
        $rootScope.$broadcast("state:params:updated");
    }

    return {
        init: init,
        getParams: getParams,
        setVersion: setVersion,
        setProject: setProject,
        setClass: setClass,
        setFile: setFile
    };

}

function WikisStateService($state, $rootScope){

    var params = {
        wiki: undefined,
        page: undefined
    };

    function init(state){
        params = state.params;
    }

    function getParams(){
        return params;
    }

    function setWiki(){
        $rootScope.$broadcast("state:params:updated");
    }

    function setPage(){
        $rootScope.$broadcast("state:params:updated");
    }

    return {
        init: init,
        getParams: getParams,
        setWiki: setWiki,
        setPage: setPage
    };

}
