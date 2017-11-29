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
            .state('site.hub-request', {
                url: '/request-hub',
                views: {
                    'content@site': {
                        component: 'hubRequest'
                    }
                }
            })
            .state('site.hub-confirmed', {
                url: '/hub-confirmed',
                views: {
                    'content@site': {
                        templateUrl: '/client/confirmation/hub-confirmation.html',
                        controller: 'confirmationController as ctrl'
                    }

                }
            })
            .state('site.admin', {
                url: '/admin',
                views: {
                    'content@site': {
                        templateUrl: 'client/home/admin/admin.html',
                        controller: 'adminController as adCtrl'
                    }
                }
            })
    }
})()
