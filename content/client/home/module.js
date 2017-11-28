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
            .state('site.confirmation', {
                url: '/confirmation',
                views: {
                    'content@site': {
                        templateUrl: 'client/confirmation/confirmation.html',
                        controller: 'confirmationController as ctrl'
                    }
                }
            })
            .state('site.payment', {
                url: '/payment',
                views: {
                    'content@site': {
                        component: 'paymentComponent'
                    }
                }
            })
<<<<<<< HEAD
            .state('site.hub-request', {
                url: '/request-hub',
                views: {
                    'content@site': {
                        component: 'hubRequest'
                    }
                }
            })
=======
            .state('site.admin', {
                url: '/admin',
                views: {
                    'content@site': {
                        templateUrl: 'client/home/admin/admin.html',
                        controller: 'adminController as adCtrl'
                    }
                }
            })
            


>>>>>>> c64be685439ef847642a9d623bfde47cf86284d8
    }
})()
