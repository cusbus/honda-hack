(function () {
    'use strict'

    angular.module('client.components')
        .component('paymentComponent', {
            templateUrl: '/client/components/payment/payment.html',
            controller: PaymentController
        })

    PaymentController.$inject = ['$http', '$log', "$state", "toastr"]
    function PaymentController($http, $log, $state, toastr) {
        let $ctrl = this
        $ctrl.submit = _submit

        $ctrl.name = 'Joe Tourist'
        $ctrl.cardNumber = '****-****-****-9090'
        // $ctrl.cardSecCode = '900'
        $ctrl.addressA = '1034 Traveling St'
        $ctrl.city = 'Topeka'
        $ctrl.state = 'KS'
        $ctrl.zip = '66605'

        init()

        function init() {
            $log.log('payment component landed')
        }

        function _submit() {
            let reservation = {
                name: $ctrl.cardName,
                cardType: $ctrl.cardType,
                cardNumber: $ctrl.cardNumber,
                cardExpiration: $ctrl.cardExpirationMonth + "|" + $ctrl.cardExpirationYear,
                cardSecCode: $ctrl.cardSecCode,
                addressA: $ctrl.addressA,
                addressB: $ctrl.addressB,
                city: $ctrl.city,
                state: $ctrl.state,
                zip: $ctrl.zip
            }
            toastr.success('Success!!')
            $log.log(reservation)
            $state.go('site.confirmation')
            // shuttleService.submitPayment(reservation)
            //     .then(result => alert('Reservation Completed!'))
        }


     





    }
})()