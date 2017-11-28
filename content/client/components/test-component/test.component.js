(function () {
    "use strict";
    angular.module("client.components")
        .component("testComponent", {
            templateUrl: "/content/client/components/testcomponent/test.component.html",
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