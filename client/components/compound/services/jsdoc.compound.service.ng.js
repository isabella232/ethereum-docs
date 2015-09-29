angular
    .module('ethdev')
    .factory('JsdocCompoundService', JsdocCompoundService);

function JsdocCompoundService($compile, $templateCache){

    function jsdocName(scope, name){
        scope.name = name;
        return $compile(
            $templateCache.get('client/components/compound/views/jsdoc/name.ng.html')
        )(scope);
    }

    function jsdocDescription(scope, description){
        scope.description = description;
        return $compile(
            $templateCache.get('client/components/compound/views/jsdoc/description.ng.html')
        )(scope);
    }

    function jsdocParams(scope, params){
        scope.params = params;
        return $compile(
            $templateCache.get('client/components/compound/views/jsdoc/params.ng.html')
        )(scope);
    }

    function jsdocReturns(scope, returns){
        scope.returns = returns;
        return $compile(
            $templateCache.get('client/components/compound/views/jsdoc/returns.ng.html')
        )(scope);
    }

    return {
        name: jsdocName,
        description: jsdocDescription,
        params: jsdocParams,
        returns: jsdocReturns
    };

}
