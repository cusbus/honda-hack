(function () {
    'use strict';
    angular
        .module('client.map')
        .controller('mapController', MapController);
    MapController.$inject = ["toastr", "sendGridService"];
    function MapController(toastr, sendGridService) {
        var vm = this;

        vm.initalizeMap = initalizeMap;
        vm.mapLayers = mapLayers;
        vm.toggleLayer = toggleLayer;
        vm.mapStyling = mapStyling;
        vm.mapInfoWindow = mapInfoWindow;
        vm.mapEventListeners = mapEventListeners;
        vm.sendmail = sendmail;
        vm.toggleActive = true;
        var infowindow = new google.maps.InfoWindow();
        var map;

        vm.$onInit = () => {
            vm.initalizeMap();
            vm.mapLayers();
            vm.mapStyling();
            vm.mapInfoWindow();
            vm.mapEventListeners();
        }


        function initalizeMap() {
            var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
            var myLatLng2 = { lat: 34.0739, lng: -118.2400 };

            vm.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 34.041025, lng: -118.269642 }
            });


            //setting specific markers on map
            var marker1 = new google.maps.Marker({
                position: myLatLng1,
                map: vm.map,
                title: 'Hub1'
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: vm.map,
                title: 'Hub2'
            });


            //draggable routes
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: vm.map,
                panel: document.getElementById('right-panel')
            });

            directionsDisplay.addListener('directions_changed', function () {
                computeTotalDistance(directionsDisplay.getDirections());
            });

            displayRoute('LA Convention Center, CA', 'Dodgers Stadium, CA', directionsService,
                directionsDisplay);
        }

        function displayRoute(origin, destination, service, display) {
            service.route({
                origin: origin,
                destination: destination,
                waypoints: null, //[{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}]
                travelMode: 'DRIVING',
                avoidTolls: true
            }, function (response, status) {
                if (status === 'OK') {
                    display.setDirections(response);
                } else {
                    alert('Could not display directions due to: ' + status);
                }
            });
        }

        function computeTotalDistance(result) {
            var total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            total = total / 1000;
            document.getElementById('total').innerHTML = total + ' km';
        }

        vm.layer1 = new google.maps.TransitLayer();
        function mapLayers() {
            vm.gcCities = 'client/map/Recreation_and_Parks_Facilities.geojson';
            vm.map.data.loadGeoJson(vm.gcCities);

            vm.layer1.setMap(vm.map);
        }
        function mapStyling() {
            vm.map.data.setStyle({
                fillColor: 'green',
                strokeWeight: 1
            });
            //set color based on object property
            // vm.map.data.setStyle(function (feature) {
            //     var color = feature.getProperty('COLOR');
            //     return {
            //         fillColor: color,
            //         strokeWeight: 1
            //     }
            // });
        }

        function mapInfoWindow() {
            vm.map.data.addListener('click', function (event) {
                var data = event.feature.f
                vm.table = document.createElement("table");
                for (var name in data) {
                    var value = data[name];
                    var tr = document.createElement('tr');
                    var leftRow = document.createElement('td');
                    leftRow.innerHTML = name;
                    tr.appendChild(leftRow);
                    var rightRow = document.createElement('td');
                    rightRow.innerHTML = value;
                    tr.appendChild(rightRow);
                    vm.table.appendChild(tr);
                }
                infowindow.setContent(vm.table);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
                infowindow.open(vm.map);
            });
        }
        function mapEventListeners() {
            google.maps.event.addListener(vm.map, 'click', function () {
                infowindow.close();
            });
            google.maps.event.addDomListener(window, "resize", function () {
                var center = vm.map.getCenter();
                google.maps.event.trigger(vm.map, "resize");
                vm.map.setCenter(center);
            });
        }

        function toggleLayer() {
            if (vm.toggleActive === true) {
                console.log("true")
                console.log(vm.toggleActive)
                vm.layer1.setMap(null);
                vm.toggleActive = false;
            }
            else {
                console.log("false")
                console.log(vm.toggleActive)
                vm.layer1.setMap(vm.map);
                vm.toggleActive = true;
            }
        }

        function sendmail() {
            console.log("hello")
            sendGridService.sendmail()
                .then(sendSuccess)
                .catch(sendError);
        }

        function sendSuccess(response) {
            console.log(response)
        }

        function sendError(response) {
            console.log(response)
        }
    }

})();