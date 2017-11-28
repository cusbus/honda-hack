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
                //abstract: true
                views: {
                    templateUrl: 'client/site/home/home.html',
                    controller: 'homeController as hCtrl'
                }
            })
            
    }
})();
