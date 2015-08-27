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

    function routerConfig($locationProvider, $urlRouterProvider) {

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

    }

})();
