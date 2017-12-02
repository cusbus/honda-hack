(function() {
    'use strict';
    angular.module('client.home')
        .controller('homeController', HomeController)
    
        HomeController.$inject = ['$state']

    function HomeController($state) {
        var $ctrl = this;
        $ctrl.state = "home";

        $ctrl.redirect = _redirect
        
        function _redirect(hub) {
            $state.go(`site.hubs.${hub}`)
        }
    }

})();
