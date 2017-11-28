/* global angular */
(function () {
    'use strict';

    angular.module('client.site', ['ui.router'])

    angular.module('client.site').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.home', {
                url: '/home',
                views: {
                    templateUrl: 'client/site/home/home.html',
                    controller: 'homeController as hCtrl'
                }
            })
            .state('site.hub.la', {
                url: '/hub-la',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/hub-la/hub-la.html',
                        controller: 'hubLaController as laCtrl'
                    }
                }
            })
    }
})();
