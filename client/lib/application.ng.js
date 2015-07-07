ethdev = {};

ethdev.configuration = (function () {

    // Init module configuration options
    var applicationModuleName = 'ethdev';
    var applicationModuleVendorDependencies = [
        'angular-meteor',
        'ui.router',
        'ui.bootstrap'
    ];

    // Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
        // Create angular module
        angular.module(moduleName, dependencies || []);

        // Add the module to the AngularJS configuration file
        angular.module(applicationModuleName).requires.push(moduleName);

        return angular.module(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

(function(){

    // Define the main module and add the module dependencies
    angular.module(
        ethdev.configuration.applicationModuleName,
        ethdev.configuration.applicationModuleVendorDependencies
    );

    // Configure router
    angular
        .module(ethdev.configuration.applicationModuleName)
        .config(routerConfig);
        //.run(stateInterceptor)

    // Initialize the application
    /*angular.element(document).ready(function() {
        angular.bootstrap(document, [
            ethdev.configuration.applicationModuleName
        ], {
            strictDi: true
        });
    });*/

    function routerConfig($locationProvider, $urlRouterProvider, $stateProvider) {

        // Setting HTML5 Location Mode
        $locationProvider.html5Mode(true);

        // Redirecting unspecified routes
        $urlRouterProvider.otherwise('/');

        // Adding mandatory trailing slash
        $urlRouterProvider.rule(function($injector, $location) {
            var path = $location.path(), search = $location.search();
            if (path[path.length-1] !== '/') {
                if (search === {}) {
                    return path + '/';
                } else {
                    var params = [];
                    angular.forEach(search, function(v, k){
                        params.push(k + '=' + v);
                    });
                    return path + '/?' + params.join('&');
                }
            }
        });

        // Wrapper for all pages
        $stateProvider.state('page', {
            url: '/',
            templateUrl: 'client/common/views/page.layout.ng.html',
            controller: 'PageController',
            abstract: true
        });
    }

    /*function stateInterceptor($state, $rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $.each(toParams, function(index, value) {
                Session.set(index, value);
            });
        });
    }*/

})();

ethdev.configuration.registerModule('ethdev.docs');