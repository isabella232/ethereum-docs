angular
    .module('ethdev')
    .factory('MarkedCompoundService', MarkedCompoundService);

function MarkedCompoundService($compile, $templateCache){

    function markedPage(scope){
        return $compile(
            scope.body.html
        )(scope);
    }

    return {
        page: markedPage
    };

}
