(function () {

    angular.module('client.components')
        .component('hubRequest', {
            templateUrl: '/client/components/hub-request/hub-request.html',
            controller: "requestController"
        })

    angular.module('client.components')
        .controller('requestController', RequestController)
    RequestController.$inject = ['toastr', '$state']
    function RequestController(toastr, $state) {
        var vm = this
        vm.submit = _submit

        function init() {

        }
        function _submit() {
            toastr.success("Request Submitted")
            $state.go('site.hub-confirmed')
        }
    }
})()
