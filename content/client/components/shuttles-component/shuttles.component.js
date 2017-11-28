(function() {
    angular.module('client.hubs')
        .component('shuttlesComponent', {
            templateUrl: '/client/components/shuttles-component/shuttles.html',
            controller: 'shuttlesController',
            bindings: {
                rates: '<',
                hub: '<'
            }
        })

    angular.module('client.hubs')
        .controller('shuttlesController', ShuttlesController)

    ShuttlesController.$inject = []

    function ShuttlesController() {
        var vm = this
        vm.$onInit = init

        function init() {
            vm.services = [{ metroB: 'Metro Basic' }, { metroP: 'Metro Plus' }, { metroSP: 'Metro SuperPlus' }]
        }
    }
})()
