(function () {
    'use strict'

angular.module('client.crud').component('hubOc',{
    templateUrl: 'client/components/hub-oc/hub-oc.html',
    controller:'hubOcController as ctrl'
})

    angular.module('client.crud')
        .controller('hubOcController', HubOcController)

    HubOcController.$inject = ['$log']

    function HubOcController($log) {
        const vm = this
        vm.$onInit = _init
 
        function _init() {
        }
    }
})()