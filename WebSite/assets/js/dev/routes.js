"use strict";

app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : '/views/home',
                controller  : 'homeCtrl'
            }).when('/usuarios', {
                templateUrl : '/views/usuarios',
                controller  : 'usuariosCtrl'
            }).when('/404', {
                templateUrl : '/views/404'
            }).otherwise({ redirectTo: '/404' });

            // to remove the # in the url uncomment this
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    });