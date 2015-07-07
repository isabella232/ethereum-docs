angular
    .module('ethdev.docs')
    .filter('compoundLanguageFilter', compoundLanguageFilter);

function compoundLanguageFilter() {
    return function(input) {
        switch (input) {
            case 'js':
                return 'Javascript';
        }
    };
}