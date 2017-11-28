/* global angular */
(function () {
    'use strict';

    angular.module('client.hubs')
    .factory('emailsService', EmailsServiceFactory)

    EmailsServiceFactory.$inject = [ '$http', '$q' ]

    function EmailsServiceFactory($http, $q) {
        return { sendEmail: _sendEmail }

        function _sendEmail(email) {
            return $http.post('/api/emails')
                .then(xhrSuccess)
                .catch(onError)
        }
    }
})();