(function () {
    'use strict'

angular.module('client.crud').component('hubValley',{
    templateUrl: 'client/components/hub-oc/hub-valley.html',
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