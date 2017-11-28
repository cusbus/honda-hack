(function () {
    "use strict";
    angular.module("client.components")
        .component("testComponent", {
            templateUrl: "/client/components/test-component/test.component.html",
            controller: TestComponentController
        });

        TestComponentController.$inject = ['$location', '$window', '$rootScope'];

    function TestComponentController($location, $window, $rootScope) {
        var $ctrl = this;

        $ctrl.alertTest=()=>{
            alert("the component works")
        }
    }
})();