
(function () {
    'use strict'
    angular.module('client.services')
        .factory('thirdPartyApiServices', ThirdPartyApiServicesFactory);

    ThirdPartyApiServicesFactory.$inject = ['$http', '$q'];

    function ThirdPartyApiServicesFactory($http, $q) {
        'use strict'

        return {
            getMainLineRoutes: getMainLineRoutes,
            getHOVRoutes: getHOVRoutes,
            getMainLineLinks: getMainLineLinks,
            getHOVLinks: getHOVLinks,
            getIncidents: getIncidents,
            getRoadWorks: getRoadWorks,
            getRoadConditions: getRoadConditions,
            getRoadWays: getRoadWays,
            getMessageSigns: getMessageSigns,
            getTransitProviders: getTransitProviders,
            getParkRideLots: getParkRideLots
        }

        function getMainLineRoutes() {
            return $http.get('/api/get-main-line')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getHOVRoutes() {
            return $http.get('/api/get-HOV-routes')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getMainLineLinks() {
            return $http.get('/api/get-main-line-links')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getHOVLinks() {
            return $http.get('/api/get-HOV-links')
                .then(_onSuccess)
                .catch(_onError)
                ;
        };

        function getIncidents() {
            return $http.get('/api/get-incidents')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getRoadWorks() {
            return $http.get('/api/get-road-works')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getRoadConditions() {
            return $http.get('/api/get-road-conditions')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getRoadWays() {
            return $http.get('/api/get-road-ways')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getMessageSigns() {
            return $http.get('/api/get-message-signs')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getTransitProviders() {
            return $http.get('/api/get-transit-providers')
                .then(_onSuccess)
                .catch(_onError);
        };

        function getParkRideLots() {
            return $http.get('/api/get-park-ride-lots')
                .then(_onSuccess)
                .catch(_onError);
        };

        function _onSuccess(response) {
            console.log(response.data.items);
            return response.data.items;
        }

        function _onError(error) {
            console.log(error);
            return $q.reject(error.data);
        }
    }
})();