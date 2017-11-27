/* global angular */
(function() {
    angular.module('client.service')
        .factory('shuttleService', ShuttleServiceFactory)

    ShuttleServiceFactory.$inject = ['http', '$q']

    function ShuttleServiceFactory($http, $q) {
        return {

        }
    }
})()
