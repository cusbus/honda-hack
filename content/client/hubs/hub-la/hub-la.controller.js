(function () {
    'use strict';

    angular.module('client.hubs')
        .controller('hubLaController', HubLaController)

    HubLaController.$inject = ['$log']

    function HubLaController($log) {
        var vm = this
        init()
        vm.hub = "Los Angeles"
        vm.rates = {
            metroB: '195.95',
            metroP: '245.95',
            metroSP: '300.00'
        }


        function init() {


        }


    }
})();
