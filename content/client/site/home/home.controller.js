(function() {
    'use strict';

    angular.module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['$log']

    function HomeController($log) {
        var vm = this

        init()

        function init() {

        }


    }
})();
