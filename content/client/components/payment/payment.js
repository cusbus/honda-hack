(function () {
    'use strict'

    angular.module('client.home').component('paymentComponent', {
        templateUrl: '/client/components/payment/payment.html',
        controller: 'paymentController as ctrl'
    })

    angular.module('client.home')
        .controller('paymentController', PaymentController)

    PaymentController.$inject('$http', '$log', '$alert', 'shuttleService')

    function PaymentController($http, $log, $alert, shuttleService) {
        let vm = this
        vm.submit = _submit
        
        init()

        function init(){
            $log.log('payment landed')
        }

        function _submit(){
            let reservation = {
                name: vm.name,
                cardType: vm.cardType,
                cardNumber: vm.cardNumber,
                cardExpiration: vm.cardExpirationMonth+vm.cardExpirationYear,
                cardSecCode: vm.cardSecCode,
                addressA: vm.addressA,
                addressB: vm.addressB,
                city: vm.city,
                state: vm.state,
                zip: vm.zip
            }
            $alert(reservation)
            // shuttleService.submitPayment(reservation)
            //     .then(result => $alert('Reservation Completed!'))
        }

    }

})()