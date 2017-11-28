(function () {
    'use strict';
    angular.module('client.seatcheck', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            // route for the home page
            .state('site.seatcheck', {
                url: '/seats',
                abstract: true
            })
            .state('site.seatcheck.seatcheck', {
                url: '/check',
                views: {
                    'content@site': {
                        templateUrl: 'client/seatcheck/seatcheck.html',
                        controller: 'seatController as seatCtrl'
                    }
                }
            })      
    }

})();