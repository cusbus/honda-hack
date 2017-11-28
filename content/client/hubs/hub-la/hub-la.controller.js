(function () {
    'use strict';

    angular.module('client.hubs')
        .controller('hubLaController', HubLaController)

    HubLaController.$inject = ['sendGridService','$log']

    function HubLaController(sendGridService, $log) {
        var vm = this
        vm.sendEmail = _sendEmail

        init()
        vm.hub = "Los Angeles"
        vm.rates = {
            metroB: '195.95',
            metroP: '245.95',
            metroSP: '300.00'
        }


        function init() {


        }

        function _sendEmail() {
            sendGridService.sendGrid()
            .then(data => console.log(`this means you got it right! ${data}`))
            .catch(data => console.log(`WRONG ${data}`))
        }

    }
})();
