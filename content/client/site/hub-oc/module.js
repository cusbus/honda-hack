(function() {
    'use strict'

    angular.module('client.layout', ['ui.router']).config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.hub.oc', {
                url: '/hub-oc',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/hub-oc/hub-oc.html',
                        controller: 'hubOcController as ocCtrl'
                    }
                }
            })
    }
})()