(function () {

    angular.module('client.site').component('paymentComponent', {
        templateUrl: 'client/components/payment/payment.html',
        controller: 'paymentController as ctrl'
    })

    angular.module('client.site')
        .controller('paymentController', PaymentController)

    PaymentController.$inject('$http')

    function PaymentController($http) {

        init()

        function init(){
            
        }


    }

})()