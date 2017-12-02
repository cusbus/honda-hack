(function () {
    'use strict';

    angular
        .module('client.components')
        .component('mapComponent', {
            templateUrl: '/client/components/map/map.html',
            controller: MapController,
            bindings: {
                state: '<'
            }
        })

    MapController.$inject = [];
    function MapController() {
        var $ctrl = this;

        $ctrl.initalizeMap = initalizeMap;
        $ctrl.mapLayers = mapLayers;
        $ctrl.toggleLayer = toggleLayer;
        $ctrl.mapStyling = mapStyling;
        $ctrl.mapInfoWindow = mapInfoWindow;
        $ctrl.mapEventListeners = mapEventListeners;

        $ctrl.toggleLayer2 = toggleLayer2;
        $ctrl.toggleActive = true;
        $ctrl.toggleActive2 = true;
        var infowindow = new google.maps.InfoWindow();
        var map;
        var center = {};

        var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
        var myLatLng2 = { lat: 34.0739, lng: -118.2400 };


        $ctrl.$onInit = () => {
            if ($ctrl.state == 'home' || $ctrl.state == 'hub-la') {
                center = { lat: 34.041025, lng: -118.269642 };
            }
            else if ($ctrl.state == 'hub-valley') {
                center = { lat: 34.1826, lng: -118.4397 };
            }
            else if ($ctrl.state =='hub-ie') {
                center = { lat: 34.9592, lng: -116.4194 };
            }
            else {
                center = { lat: 33.7175, lng: -117.8311 };
            }
            $ctrl.initalizeMap();
            $ctrl.mapLayers();
            $ctrl.mapStyling();
            $ctrl.mapInfoWindow();
            $ctrl.mapEventListeners();
        }


        function initalizeMap() {

            $ctrl.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: center
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: $ctrl.map,
                title: 'Hub2'
            });


            //draggable routes
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: $ctrl.map,
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

        $ctrl.layer1 = new google.maps.TransitLayer();
        $ctrl.layer2 = new google.maps.Marker({
            position: myLatLng1,
            map: $ctrl.map,
            title: 'Hub1'
        });
        function mapLayers() {
            // $ctrl.gcCities = 'client/map/Recreation_and_Parks_Facilities.geojson';
            // $ctrl.map.data.loadGeoJson($ctrl.gcCities);

            $ctrl.layer1.setMap($ctrl.map);
            $ctrl.layer2.setMap($ctrl.map);
        }

        function mapStyling() {
            $ctrl.map.data.setStyle({
                fillColor: 'green',
                strokeWeight: 1
            });
            //set color based on object property
            // $ctrl.map.data.setStyle(function (feature) {
            //     var color = feature.getProperty('COLOR');
            //     return {
            //         fillColor: color,
            //         strokeWeight: 1
            //     }
            // });
        }

        function mapInfoWindow() {
            $ctrl.map.data.addListener('click', function (event) {
                var data = event.feature.f
                $ctrl.table = document.createElement("table");
                for (var name in data) {
                    var value = data[name];
                    var tr = document.createElement('tr');
                    var leftRow = document.createElement('td');
                    leftRow.innerHTML = name;
                    tr.appendChild(leftRow);
                    var rightRow = document.createElement('td');
                    rightRow.innerHTML = value;
                    tr.appendChild(rightRow);
                    $ctrl.table.appendChild(tr);
                }
                infowindow.setContent($ctrl.table);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
                infowindow.open($ctrl.map);
            });
        }
        function mapEventListeners() {
            google.maps.event.addListener($ctrl.map, 'click', function () {
                infowindow.close();
            });
            google.maps.event.addDomListener(window, "resize", function () {
                var center = $ctrl.map.getCenter();
                google.maps.event.trigger($ctrl.map, "resize");
                $ctrl.map.setCenter(center);
            });
        }

        function toggleLayer() {
            if ($ctrl.toggleActive === true) {
                console.log("true")
                console.log($ctrl.toggleActive)
                $ctrl.layer1.setMap(null);
                $ctrl.toggleActive = false;
            }
            else {
                console.log("false")
                console.log($ctrl.toggleActive)
                $ctrl.layer1.setMap($ctrl.map);
                $ctrl.toggleActive = true;
            }
        }

        function toggleLayer2() {
            if ($ctrl.toggleActive2 === true) {
                console.log("true")
                console.log($ctrl.toggleActive2)
                $ctrl.layer2.setMap(null);
                $ctrl.toggleActive2 = false;
            }
            else {
                console.log("false")
                console.log($ctrl.toggleActive2)
                $ctrl.layer2.setMap($ctrl.map);
                $ctrl.toggleActive2 = true;
            }
        }
    }
})();