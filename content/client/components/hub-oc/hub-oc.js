(function () {
    'use strict'

angular.module('client.crud').component('hubOc',{
    templateUrl: 'client/components/hub-oc/hub-oc.html',
    controller:'hubOcComponent as ctrl'
})

    angular.module('client.crud')
        .controller('hubOcComponent', HubOcComponent)

    HubOcComponent.$inject = ['$log']

    function HubOcComponent($log) {
        const vm = this
        vm.$onInit = _init
 
        function _init() {
        }
    }
})()