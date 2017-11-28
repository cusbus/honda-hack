(function () {
    'use strict'
    angular.module('client.search', ['ui.router'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.search', {
                url: '/search',
                views: {
                    'content@site': {
                        templateUrl: 'client/search/search.html',
                        controller: 'searchController as searchCtrl'
                    }
                }
            })
    }
})();