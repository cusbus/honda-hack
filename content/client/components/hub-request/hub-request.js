(function () {

    angular.module('client.components')
        .component('hubRequest', {
            templateUrl: '/client/components/hub-request/hub-request.html',
            controller: "requestController"
        })

    angular.module('client.compoments')
        .controller('requestController', RequestController)
    RequestController.$inject = ['toastr']
    function RequestController(toastr) {
        var vm = this
        vm.submit = _submit
    }
})