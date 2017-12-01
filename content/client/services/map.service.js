(function () {
    'use strict';
    angular.module('client.services')
        .factory('mapServices', MapServicesFactory)

    MapServicesFactory.$inject = ["$http"];

    function MapServicesFactory($http) {
        return {
            getMetroStops: getMetroStops,
            getMonuments:getMonuments,
            getParks:getParks,
            getBikeWays:getBikeWays
        }

        function getMetroStops() {
            return $http.get('http://geohub.lacity.org/datasets/ae53fbeb5d5348c7b7f48a9348fd7ff6_186.geojson')
                .then(onSuccess)
                .catch(onError)
        }

        function getMonuments() {
            return $http.get('http://geohub.lacity.org/datasets/d0920dbc9b73473e9acafda961abc2ef_9.geojson')
                .then(onSuccess)
                .catch(onError)
        }
       
        function getParks(){
            return $http.get('http://geohub.lacity.org/datasets/138bf27d90f94293b19ffe35f4f5f076_5.geojson')
            .then(onSuccess)
            .catch(onError)
        }
        function getBikeWays(){
            return $http.get('http://geohub.lacity.org/datasets/230abc621b144dbc96cca83d65bd454d_0.geojson')
            .then(onSuccess)
            .catch(onError)
        }

        
        function onSuccess(response) {
            return response.data
        }

        function onError(error) {
            return $q.reject(error.data)
        }
    }


})();