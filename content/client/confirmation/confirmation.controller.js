(function () {
    'use strict'

    angular.module('client.home')
        .controller('confirmationController', ConfirmationController)

    ConfirmationController.$inject = ['$log']

    function ConfirmationController($log) {
         
        init()
 
        function init() {
            $log.log('confirmation landed')
        }
    }
})()