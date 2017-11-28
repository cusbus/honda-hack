(function() {
    'use strict';

    angular.module('client.hubs')
        .controller('hubInlandEmpireController', HubInlandEmpireController)

        HubInlandEmpireController.$inject = ['$log']

    function HubInlandEmpireController($log) {
        var vm = this
        vm.hub = "Inland Empire"
        vm.rates = {
            metroB: '135.95',
            metroP: '195.95',
            metroSP: '225.95'
        }

        init()

        function init() {

        }


    }
})();
