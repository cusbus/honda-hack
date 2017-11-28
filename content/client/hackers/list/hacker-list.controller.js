/* global angular */
(function() {
    'use strict'

    angular.module('client.hackers')
        .controller('hackerListController', HackerListController)

    HackerListController.$inject = ['hackerService', 'hackers', '$log']

    function HackerListController(hackerService, hackers, $log) {
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
