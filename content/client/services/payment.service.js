(function () {
    angular.module('client.services')
        .factory('paymentService', PaymentService)

    PaymentService.$inject = ['$http']

    function PaymentService($http) {

        return {
            create: _create
        }

        function _create(transaction) {
            return $http.post(`/api/payment-routes`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(err) {
            return err
        }

    }

})()