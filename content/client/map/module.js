(function() {
    'use strict';

   angular.module('client.map', ['ui.router'])
           .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.map', {
                url: '/map',
                views: {
                    'content@site': {
                        templateUrl: 'client/map/map.html',
                        controller:'mapController as mapCtrl'
                    }
                }
            })
    }
})();