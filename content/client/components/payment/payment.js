(function () {
    'use strict'

    angular.module('client.components')
        .component('paymentComponent', {
            templateUrl: '/client/components/payment/payment.html',
            controller: PaymentController
        })

    PaymentController.$inject = ['$http', '$log', "$state", "toastr", 'paymentService']
    function PaymentController($http, $log, $state, toastr, paymentService) {
        let $ctrl = this
        $ctrl.submit = _submit

        $ctrl.name = 'Joe Tourist'
        $ctrl.cardNumber = '****-****-****-9090'
        $ctrl.cardSecCode = '900'
        $ctrl.addressA = '1034 Traveling St'
        $ctrl.city = 'Topeka'
        $ctrl.state = 'KS'
        $ctrl.zip = '66605'
        $ctrl.cardExpirationMonth = '02'
        $ctrl.cardExpirationYear = '2019'

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
            // paymentService.create(reservation)
            //     .then(result => {
                    toastr.success('Success!!')
                    $state.go('site.confirmation')
                // })
                // .catch(err => $log.log(err))
            
            
        }


     





    }
})()