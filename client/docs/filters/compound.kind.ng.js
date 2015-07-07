angular
    .module('ethdev.docs')
    .filter('compoundKindFilter', compoundKindFilter);

function compoundKindFilter() {
    return function(input) {
        switch (input) {
            case 'function':
                return 'Functions';
            case 'typedef':
                return 'Types';
        }
    };
}