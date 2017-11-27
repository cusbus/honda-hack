/* global angular */

(function() {
    'use strict'

    angular.module('client.authentication')
        .factory('authenticationService', AuthenticationServiceFactory)

    AuthenticationServiceFactory.$inject = ['$http', '$q', 'baseService']

    function AuthenticationServiceFactory($http, $q, baseService) {
        const authenticationService = Object.create(baseService)

        authenticationService.register = _register
        authenticationService.signin = _signin

        return authenticationService

        function _register(userData) {
            return $http.post('/api/users/register', userData)
                .then(response => response.data)
                .catch(err => {
                    console.log(err.data)
                    return $q.reject(err.data)
                })
        }

        function signin(userData) {
            return $http.post('/api/users/login', userData)
                .then(response => response.data)
                .catch(err => {
                    console.log(err.data)
                    return $q.reject(err.data)
                })
        }

    }
})()
