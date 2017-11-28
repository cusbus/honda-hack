(function() {
    'use strict';

    angular.module('client.hubs')
        .controller('hubLaController', HubLaController)

    HubLaController.$inject = ['$log', '$window']

    function HubLaController($log, $window) {
        var vm = this

        init()
        vm.hub = "Los Angeles"
        vm.rates = {
            metroB: '195.95',
            metroP: '245.95',
            metroSP: '300.00'
        }


        function init() {
            $window.scrollTo(0, 0);
        }
    }
})();
