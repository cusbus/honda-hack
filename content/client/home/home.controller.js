(function () {
    'use strict';
    angular.module('client.home')
        .controller('homeController', HomeController)
    HomeController.$inject = []
    function HomeController() {
        var $ctrl = this;


        var map;

        $ctrl.$onInit = () => {
            $ctrl.initalizeMap();
        }
        
        $ctrl.initalizeMap = () => {
            var maptype = google.maps.MapTypeId.ROADMAP
            var losangeles = new google.maps.LatLng(33.881624, -118.142158);
            var mapOptions = { zoom: 11, mapTypeId: maptype, center: losangeles, gestureHandling: 'auto', scrollwheel: false }
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }
    
    }
})();