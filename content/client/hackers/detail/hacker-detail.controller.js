/* global angular */
(function() {
    'use strict'

    angular.module('client.hackers')
        .controller('hackerDetailController', HackerDetailController)

    HackerDetailController.$inject = ['hackerService', '$stateParams', '$log']

    function HackerDetailController(hackerService, $stateParams, $log) {
        var vm = this
        vm.tagline = null

        init()

        function init() {
            vm.tagline = 'Hack The Planet!'

            if ($stateParams.id) {
                hackerService.readById($stateParams.id)
                    .then(data => vm.hacker = data.item)
                    .catch(data => $log.log(`Error: ${data.errors}`))
            }
        }
    }
})()