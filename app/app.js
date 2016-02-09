define(['angularAMD', 'angular-route', 'ctrl/mainController', 'directives/locationAutocomplete'], function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);
    
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/home", angularAMD.route({
            templateUrl: 'app/pages/home.html', 
            controller: 'HomeCtrl',
            controllerUrl: 'app/ctrl/homeController.js'
        }))
        .when("/about", angularAMD.route({
            templateUrl: 'app/pages/about.html', 
            controller: 'AboutCtrl',
            controllerUrl: 'app/ctrl/aboutController.js'
        }))
        .when("/contact", angularAMD.route({
            templateUrl: 'app/pages/contact.html', 
            controller: 'ContactCtrl',
            controllerUrl: 'app/ctrl/contactController.js'
        }))
        .otherwise("/home", {
        	templateUrl: "app/pages/home.html",
        	controller: 'HomeCtrl',
        	controllerUrl: 'app/ctrl/homeController.js'
        });
    });
    
    return angularAMD.bootstrap(app);
});
