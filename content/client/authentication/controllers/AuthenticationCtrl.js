/* global angular */
(function() {
    'use strict'

    angular.module('client.authentication')
  .controller('authenticationController', AuthenticationController)

    AuthenticationController.$inject = ['authenticationService', '$controller']

    function AuthenticationController(authenticationService, $controller) {
        'use strict'

        var vm = this
        $controller('BaseController', { vm: vm })

        vm.user = {}
        vm.register = _register;
        vm.signin = _signin;

        function _register() {
            authenticationService.register(vm.user)
                .then(data => {
                    vm.user = null
                    vm.alert = data.alert
                })
                .catch(err => console.log(err))
        }

        function signin() {
            authenticationService.signin(vm.user)
                .then(data => {
                    vm.user = null
                    vm.alert = data.alert
                })
                .catch(err => console.log(err))
        }
    }
})()
