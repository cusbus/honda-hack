(function () {
    'use strict';

    angular.module('client.hubs')
        .controller('hubValleyController', HubValleyController)

    HubValleyController.$inject = ['$log', '$window']

    function HubValleyController($log, $window) {
        var vm = this
        vm.hub = "San Fernando Valley"
        vm.rates = {
            metroB: '175.95',
            metroP: '225.95',
            metroSP: '265.95'
        }

        init()

        function init() {
            $window.scrollTo(0, 0);
        }


    }
})();
