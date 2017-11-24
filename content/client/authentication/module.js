/* global angular */
(function() {
    'use strict'

    angular.module('client.authentication', ['ui.router'])
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app.register', {
                url: '/register',
                views: {
                    'content@app': {
                        templateUrl: 'client/authentication/views/register.html',
                        controller: 'authenticationController as login'
                    }
                }
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'content@app': {
                        templateUrl: 'client/authentication/views/login.html',
                        controller: 'authenticationController as login'
                    }
                }
            })
    }
})()
