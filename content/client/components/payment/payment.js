(function () {
    'use strict'

    angular.module('client.components')
        .component('paymentComponent', {
            templateUrl: '/client/components/payment/payment.html',
            controller: PaymentController
        })

    PaymentController.$inject = ['$http', '$log']
    function PaymentController($http, $log) {
        let $ctrl = this
        $ctrl.submit = _submit

        init()

        function init() {
            $log.log('payment component landed')
        }

        function _submit() {
            let reservation = {
                name: $ctrl.name,
                cardType: $ctrl.cardType,
                cardNumber: $ctrl.cardNumber,
                cardExpiration: $ctrl.cardExpirationMonth+"|"+$ctrl.cardExpirationYear,
                cardSecCode: $ctrl.cardSecCode,
                addressA: $ctrl.addressA,
                addressB: $ctrl.addressB,
                city: $ctrl.city,
                state: $ctrl.state,
                zip: $ctrl.zip
            }
            alert('Success!!')
            $log.log(reservation)
            // shuttleService.submitPayment(reservation)
            //     .then(result => alert('Reservation Completed!'))
        }
    }
})()