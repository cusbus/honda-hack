(function () {
    'use strict'

angular.module('client.crud').component('hubValley',{
    templateUrl: 'client/components/hub-oc/hub-valley.html',
    controller:'hubValleyComponent as ctrl'
})

    angular.module('client.crud')
        .controller('hubValleyComponent', HubValleyComponent)

    HubOcComponent.$inject = ['$log']

    function HubValleyComponent($log) {
        const vm = this
        vm.$onInit = _init
 
        function _init() {
        }
    }
})()