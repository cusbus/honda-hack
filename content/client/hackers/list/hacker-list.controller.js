/* global angular */
(function() {
    'use strict'

    angular.module('client.hackers')
        .controller('hackerListController', HackerListController)

    HackerListController.$inject = ['hackerService', 'hackers', '$log', 'thirdPartyApiServices']

    function HackerListController(hackerService, hackers, $log, thirdPartyApiServices) {
        var vm = this

        vm.tagline = null
        vm.formData = null
        vm.hackers = null
        vm.create = _create
        vm.update = _update
        vm.delete = _delete

        init()

        function init() {
            vm.formData = {}
            vm.hackers = hackers
            vm.tagline = 'Hack The Planet!'
            thirdPartyApiServices.getMainLineRoutes()
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
        }

        function _create() {
            hackerService.create(vm.formData)
                .then(data => {
                    vm.formData._id = data.item
                    vm.hackers.push(vm.formData)
                    vm.formData = null
                })
                .catch(data => $log.log(`Error: ${data.errors}`))
        }

        function _update() {
            hackerService.update(vm.formData)
                .then(data => vm.formData = null)
                .catch(data => $log.log(`Error: ${data.errors}`))
        }

        function _delete (id) {
            hackerService.delete(id)
                .then(data => {
                    vm.formData = null
                    let removeIndex = vm.hackers.findIndex(element => element._id === id)
                    vm.hackers.splice(removeIndex, 1)
                })
                .catch(data => $log.log(`Error: ${data.errors}`))
        }
    }
})()
