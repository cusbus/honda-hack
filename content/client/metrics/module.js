(function () {
    'use strict'
    angular.module('client.metrics', ['ui.router', 'highcharts-ng'])
        .config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.metrics', {
                url: '/metrics',
                views: {
                    'content@site': {
                        templateUrl: 'client/metrics/metrics.html',
                        controller: 'metricsController as metricsCtrl'
                    }
                }
            })
    }
})();