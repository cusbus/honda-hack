(function() {
    'use strict';

    angular.module('client.hubs')
        .controller('hubInlandEmpireController', HubInlandEmpireController)

        HubInlandEmpireController.$inject = ['$log', '$window']

    function HubInlandEmpireController($log, $window) {
        var vm = this

        init()

        function init() {
            $window.scrollTo(0, 0);
        }


    }
})();
