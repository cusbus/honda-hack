/* global angular */
(function () {
    'use strict';

    angular.module('client.hackers', ['ui.router', 'client.services'])

    angular.module('client.hackers').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.hackers', {
                url: '/hackers',
                abstract: true
            })
            .state('site.hackers.list', {
                url: '/list',
                views: {
                    'content@site': {
                        templateUrl: 'client/hackers/list/hacker-list.html',
                        controller: 'hackerListController as hackerCtrl'
                    }
                },
                resolve: {
                    hackers: getAllHackers
                }
            })
            .state('site.hackers.detail', {
                url: '/:id',
                views: {
                    'content@site': {
                        templateUrl: 'client/hackers/detail/hacker-detail.html',
                        controller: 'hackerDetailController as hackerCtrl'
                    }
                }
            });
    }

    getAllHackers.$inject = ['hackerService']

    function getAllHackers(hackerService) {
        return hackerService.readAll()
            .then(data => data.items)
    }
})();
