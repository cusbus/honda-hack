// Description: This will inject an instance of this controller into the scope of the child controller
// Usage: Psuedo inheritance in child controller, $controller('BaseController', { vm: vm });
// Refs: http://jasonwatmore.com/post/2014/03/25/angularjs-a-better-way-to-implement-a-base-controller
/* global angular */
(function() {
    'use strict'

    angular.module('client._common')
    .controller('BaseController', BaseController)

    BaseController.$inject = ['$document', '$log', 'vm']

    function BaseController($document, $log, vm) {
        vm.closeAlert = function() {
            vm.alert = null
        }

        vm.$document = $document
        vm.$log = $log
    }
})()
