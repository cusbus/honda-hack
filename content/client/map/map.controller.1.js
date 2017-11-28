(function () {
    'use strict';

    angular
        .module('client.map')
        .controller('mapController', MapController);

    MapController.$inject = [];

    function MapController() {
        var $ctrl = this;
        $ctrl.layers = [];
        var map;

        $ctrl.$onInit = () => {
            $ctrl.initalizeMap();
        }

        $ctrl.initalizeMap = () => {
            var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
            var myLatLng2 = { lat: 34.0739, lng: -118.2400 };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 34.041025, lng: -118.269642 }
            });

            //Train routes
            var transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(map);
            //

            //setting specific markers on map
            var marker1 = new google.maps.Marker({
                position: myLatLng1,
                map: map,
                title: 'Hub1'
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: map,
                title: 'Hub2'
            });


            //draggable routes
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: map,
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


        $ctrl.mapLayers = () => {
            var transitLayer = new google.maps.TransitLayer();
            $ctrl.layers.push(transitLayer);
            $ctrl.layerObjects = [];
            for (var i = 0; i < $ctrl.layers.length; i++) {
                $ctrl.layers = new google.maps.Data();
                $ctrl.layer.loadGeoJson($ctrl.layers[i]);

                $ctrl.layer.addListener('click', function (event) {
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
                    infowindow.open(map);
                });

                $ctrl.layer.name = $ctrl.layers[i].name;
                $ctrl.layerObjects.push($ctrl.layer);
            }

            $ctrl.toggleLayer[0] = false;
            $ctrl.toggleLayer(0)
        }
        $ctrl.toggleLayer = index => {
            if ($ctrl.toggleLayer[index]) {
                $ctrl.layerObjects[index].setMap(null);
            } else {
                $ctrl.layerObjects[index].setMap(map);
            }
        }

        $ctrl.transit = () => {
            //Train routes
            console.log('train button');
            var transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(map);
            //
        }



    }

})();