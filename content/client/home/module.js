(function () {
    'use strict';
    angular.module('client.home', ['ui.router']).config(RouteConfig);
    RouteConfig.$inject = ['$stateProvider'];
    function RouteConfig($stateProvider) {
        $stateProvider
            // route for the home page
            .state('site.home', {
                url: '/',
                views: {
                    'content@site': {
                        templateUrl: 'client/home/home.html',
                        controller: 'homeController as homeCtrl'
                    }
                }
            })
            
    }

})();