(function() {
    'use strict';

    angular.module('client.hubs')
        .controller('hubValleyController', HubValleyController)

    HubValleyController.$inject = ['$log', '$window']

    function HubValleyController($log, $window) {
        var vm = this

        init()

        function init() {
            $window.scrollTo(0, 0);
        }


    }
})();
