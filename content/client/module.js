/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure */

(function () {
    'use strict';
    angular.module('client', [
        // 3rd party
        'ui.router',
        'ui.bootstrap',

        //base / common
        'client.layout',
        'client._common',

        //services
        'client.authentication',
        'client.services',

        //views /controllers
        'client.crud',
        'client.hackers'
    ])

    angular.module('client')
        .config(RouteConfig)
        .run(StateErrorHandler)

    StateErrorHandler.$inject = ['$rootScope', '$log']

    function StateErrorHandler($rootScope, $log) {
        $rootScope.$on('$stateChangeError', info => $log.log(info))
    }

    RouteConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider'
    ];

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/hackers/list');
        $locationProvider.html5Mode(true);
    }
})();
