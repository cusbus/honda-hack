(function () {
    'use strict';
    angular.module('client.hubs', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            // route for the home page
            .state('site.hubs', {
                url: '/hubs',
                abstract: true
            })
            .state('site.hubs.hub-la', {
                url: '/hub-la',
                views: {
                    'content@site': {
                        templateUrl: 'client/hubs/hub-la/hub-la.html',
                        controller: 'hubLaController as laCtrl'
                    }
                }
            })
            .state('site.hubs.hub-valley', {
                url: '/hub-valley',
                views: {
                    'content@site': {
                        templateUrl: 'client/hubs/hub-valley/hub-valley.html',
                        controller: 'hubValleyController as valCtrl'
                    }
                }
            })
            .state('site.hubs.hub-ie', {
                url: '/hub-ie',
                views: {
                    'content@site': {
                        templateUrl: 'client/hubs/hub-ie/hub-ie.html',
                        controller: 'hubInlandEmpireController as ieCtrl'
                    }
                }
            })
            
    }

})();