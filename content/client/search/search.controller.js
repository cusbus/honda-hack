(function () {
    'use strict'
    angular.module('client.search')
        .controller('searchController', SearchController);

    SearchController.$inject = [];

    function SearchController() {
        'use strict'
        var vm = this;
        vm.userLocation = null;
        vm.searchComplete = false;
        vm.initalizeMap = initalizeMap;
      //  vm.mapLayers = mapLayers;
        //vm.mapStyling = mapStyling;
       // vm.mapInfoWindow = mapInfoWindow;
        vm.mapEventListeners = mapEventListeners;
        vm.findLocation = findLocation;
        vm.layersArray = [];
        var infowindow = new google.maps.InfoWindow();
        var map;

        var myLatLng1 = { lat: 34.0562, lng: -118.2365 };
        var myLatLng2 = { lat: 34.0403, lng: -118.2696 };
        var myLatLng3 = { lat: 34.0447, lng: -118.2646 };
        var myLatLng5 = { lat: 34.0430, lng: -118.2673 };
        var myLatLng6 = { lat: 34.0458, lng: -118.2681 };

        vm.$onInit = () => {

        };

        function findLocation(){
            console.log(vm.userLocation);
            vm.searchComplete = true;
            vm.initalizeMap();
         //   vm.mapLayers();
         //   vm.mapInfoWindow();
            vm.mapEventListeners();
        }

        function initalizeMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: 34.0403, lng: -118.2696 }
            });

            var marker2 = new google.maps.Marker({
                position: myLatLng2,
                map: map,
                title: 'Current Location'
            });

            var marker3 = new google.maps.Marker({
                position: myLatLng3,
                map: map,
                title: ' Attraction 2 - Grammy Museum'
            });

            var marker5 = new google.maps.Marker({
                position: myLatLng5,
                map: map,
                title: 'Attraction 1 - Staples Center'
            });

            var marker6 = new google.maps.Marker({
                position: myLatLng6,
                map: map,
                title: 'Attraction 3 - Regal Cinemas'
            });

            var marker = new google.maps.Marker({
                position: myLatLng2,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 5
                },
                map: map,
                title: 'Hubbub Service - LA Convention Center Shuttle'
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

            // displayRoute('LA Convention Center, CA', 'Regal Cinemas L.A. LIVE 14, 1000 W Olympic Blvd, Los Angeles, CA 90015', directionsService,
            //     directionsDisplay);
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

        // vm.layer1 = new google.maps.TransitLayer();
        // vm.layer2 = new google.maps.Marker({
        //     position: myLatLng1,
        //     map: map,
        //     title: 'Hub1'
        // });
        // vm.layer3 = new google.maps.Data();
        // vm.layer4 = new google.maps.Data();
        // vm.layer5 = new google.maps.Data();
        // vm.layer6 = new google.maps.Data();

        // function mapLayers() {
        //     vm.geo1 = 'client/map/geojson/rec-parks.geojson';
        //     vm.geo2 = 'client/map/geojson/hist-mon.geojson';
        //     vm.geo3 = 'client/map/geojson/ped-dist.geojson';
        //     vm.geo4 = 'client/map/geojson/bike.geojson';


        //     vm.layer3.loadGeoJson(vm.geo1);
        //     vm.layer4.loadGeoJson(vm.geo2);
        //     vm.layer5.loadGeoJson(vm.geo3);
        //     vm.layer6.loadGeoJson(vm.geo4);

        //     var bikeMarker = '../css/images/bikeshare2.png';
        //     var parkMarker = '../css/images/nature2.png';
        //     vm.layer1.setMap(map);
        //     vm.layer2.setMap(map);
        //     vm.layer3.setMap(map);
        //     vm.layer4.setMap(map);
        //     vm.layer5.setMap(map);
        //     vm.layer6.setMap(map);
        //    vm.layer6.setStyle({icon: bikeMarker}) 
        //    vm.layer3.setStyle({icon: parkMarker}) 
        // }

        // function mapStyling(layer,color) {
        //     layer.setStyle({
        //         fillColor: color,
        //         strokeWeight: 1
        //     });
        // }
        // mapStyling(vm.layer4,'purple');

        // function mapInfoWindow() {
        //     vm.layer4.addListener('click', function (event) {
        //         var data = event.feature.f
        //         vm.table = '<div id="iw-container">' +
        //         `<div class="iw-title">${data.NAME}</div>` +
        //         '<div class="iw-content">' +
        //           '<div class="iw-subTitle">History</div>' +
        //           '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
        //           '<p>The written history of Los Angeles city and county began with a Colonial Mexican town that was founded by 11 Mexican families which were known as " Los Pobladores" that established a settlement in Southern California that changed little in the three decades after 1848, when California became part of the United States.</p>' +
        //           '<div class="iw-subTitle">Contacts</div>' +
        //           '<p>Los Angeles, CA<br><br>'+
        //           '<br>Phone. +2135554568<br>e-mail: losangeles@email.com<br>www: www.website.com</p>'+
        //         '</div>' +
        //         '<div class="iw-bottom-gradient"></div>' +
        //         '</div>';


        //         // vm.table = document.createElement("table");
        //         // for (var name in data) {
        //             // var value = data[name];
        //             // console.log(data);
        //             // var value = data.NAME;
                    
        //             // var tr = document.createElement('tr');
        //             // var leftRow = document.createElement('td');
        //             // leftRow.innerHTML = name;
        //             // tr.appendChild(leftRow);
        //             // var rightRow = document.createElement('td');
        //             // rightRow.innerHTML = value;
        //             // tr.appendChild(rightRow);
        //             // vm.table.appendChild(tr);
        //         // }
        //         infowindow.setContent(vm.table);
        //         infowindow.setPosition(event.latLng);
        //         infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
        //         infowindow.open(map);
        //     });
        // }

        function mapEventListeners() {
            google.maps.event.addListener(map, 'click', function () {
                infowindow.close();
            });

            google.maps.event.addDomListener(window, "resize", function () {
                var center = map.getCenter();
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            });
        }

        // vm.toggleLayer1 = () => {
        //     vm.layer1.setMap(vm.layer1.getMap() ? null : map);
        // }
        // vm.toggleLayer2 = () => {
        //     vm.layer2.setMap(vm.layer2.getMap() ? null : map);
        // }
        // vm.toggleLayer3 = () => {
        //     vm.layer3.setMap(vm.layer3.getMap() ? null : map);
        // }
        // vm.toggleLayer4 = () => {
        //     vm.layer4.setMap(vm.layer4.getMap() ? null : map);
        // }
        // vm.toggleLayer5 = () => {
        //     vm.layer5.setMap(vm.layer5.getMap() ? null : map);
        // }
        // vm.toggleLayer6 = () => {
        //     vm.layer6.setMap(vm.layer6.getMap() ? null : map);
        // }

    }
})();