(function () {
    'use strict';

    angular
        .module('client.map')
        .controller('mapController', MapController);
    MapController.$inject = ["mapServices"];
    function MapController(mapServices) {
        var $ctrl = this;
        var map;
        $ctrl.total;

        $ctrl.$onInit = () => {
            initalizeMap();
            mapLayers();
            mapEventListeners();
            draggableRoutes();
        }

        const initalizeMap=()=> {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 34.041025, lng: -118.269642 }
            });
        }

        let draggableRoutes = () =>{
               var directionsService = new google.maps.DirectionsService;
               var directionsDisplay = new google.maps.DirectionsRenderer({
                   draggable: true,
                   map: map,
                   suppressBicyclingLayer: true
                   // panel: document.getElementById('right-panel')
   
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
                travelMode: 'BICYCLING' //DRIVING,BICYCLING,TRANSIT,WALKING
                // optimizeWaypoints: true,
                // provideRouteAlternatives: true,
                // avoidFerries: false,
                // avoidHighways: true,
                // avoidTolls: true,
            }, function (response, status) {
                if (status === 'OK') {
                    display.setDirections(response);
                } else {
                    alert('Could not display directions due to: ' + status);
                }
            });
        }

        function computeTotalDistance(result) {
            let total = 0;
            var myroute = result.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                total += myroute.legs[i].distance.value;
            }
            // $ctrl.total = (total / 1000 / 0.621371).toFixed(2);
            
            total = (total / 1000 / 0.621371).toFixed(2);
            document.getElementById('total').innerHTML = total + ' mi';
        }

        //Map Layers
        let trafficLayer;
        let transitLayer;
        let bikeWaysLayer;
        let bikeShareLayer;
        let monumentLayer;
        let parkLayer;

        const mapLayers = () => {
            getParks();
            getBikeShare();
            getBikeWays();
            getTraffic();
            getTransit();
            getMonuments();
        }

        let getTraffic = () => {
            trafficLayer = new google.maps.TrafficLayer();
            // trafficLayer.setMap(map);
        }

        let getTransit = () => {
            transitLayer = new google.maps.TransitLayer();
            // transitLayer.setMap(map);
        }

        let getMetroLinkStops = () => {
            mapServices.getMetroLinkStops()
                .then(function (data) {
                    $ctrl.metroStopsLayer = new google.maps.Data();
                    $ctrl.metroStopsLayer.addGeoJson(data);
                    // $ctrl.metroStopsLayer.setMap(map);
                })
                .catch(onGetError)
        }

        let getBikeWays = () => {
            mapServices.getBikeWays()
                .then(function (data) {
                    bikeWaysLayer = new google.maps.Data();
                    bikeWaysLayer.addGeoJson(data);
                    let bikeWaysStyle = {
                        strokeColor: "#ff3df2",
                        strokeWeight: 3
                    }
                    layerStyling(bikeWaysLayer, bikeWaysStyle);
                })
            bikeWaysLayer = new google.maps.Data();
            // bikeLanesLayer.setMap(map)
        }

        let getBikeShare = () => {
            let bikeMarker = '../css/images/bikeshare2.png';
            let bikeShareJSON = 'client/map/geojson/bike.geojson';
            bikeShareLayer = new google.maps.Data();
            bikeShareLayer.setStyle({ icon: bikeMarker });
            bikeShareLayer.loadGeoJson(bikeShareJSON);
            // bikeShareLayer.setMap(map);
        }

        let getParks = () => {
            mapServices.getParks()
                .then(function (data) {
                    parkLayer = new google.maps.Data();
                    parkLayer.addGeoJson(data);
                    let parkMarker = '../css/images/nature2.png';
                    let parkStyle = {
                        fillColor: "rgb(12, 252, 184)",
                        fillOpacity: .9,
                        strokeColor: "orange",
                        strokeWeight: 1
                    }
                    layerStyling(parkLayer, parkStyle);
                    // parkLayer.setMap(map);
                })
                .catch(onGetError)
        }

        let getMonuments = () => {
            mapServices.getMonuments()
                .then(function (data) {
                    monumentLayer = new google.maps.Data();
                    monumentLayer.addGeoJson(data);
                    let monumentStyle = {
                        fillColor: 'purple',
                        strokeColor: 'purple',
                        strokeWeight: 1
                    }
                    layerStyling(monumentLayer, monumentStyle);
                    mapInfoWindow(monumentLayer);
                    // monumentLayer.setMap(map);
                })
        }


        //STYLE LAYERS
        let layerStyling = (layer, style) => {
            layer.setStyle({
                fillColor: style.fillColor,
                fillOpacity: style.fillOpacity,
                strokeColor: style.strokeColor,
                strokeOpacity: style.strokeOpacity,
                strokeWeight: style.strokeWeight
            });
        }

        //ADD EVENT LISTENERS
        let infowindow = new google.maps.InfoWindow();
        function mapInfoWindow(layer, content) {
            layer.addListener('click', function (event) {
                let data = event.feature.f
                let content = '<div id="iw-container">' +
                    `<div class="iw-title">${data.NAME}</div>` +
                    '<div class="iw-content">' +
                    '<div class="iw-subTitle">History</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>The written history of Los Angeles city and county began with a Colonial Mexican town that was founded by 11 Mexican families which were known as " Los Pobladores" that established a settlement in Southern California that changed little in the three decades after 1848, when California became part of the United States.</p>' +
                    '<div class="iw-subTitle">Contacts</div>' +
                    '<p>Los Angeles, CA<br><br>' +
                    '<br>Phone. +2135554568<br>e-mail: losangeles@email.com<br>www: www.website.com</p>' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>';

                infowindow.setContent(content);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
                infowindow.open(map);
            });
        }

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

        //TOGGLE LAYERS
        $ctrl.toggleTraffic = () => {
            trafficLayer.setMap(trafficLayer.getMap() ? null : map);
        }
        $ctrl.toggleTransit = () => {
            transitLayer.setMap(transitLayer.getMap() ? null : map);
        }
        $ctrl.toggleParks = () => {
            parkLayer.setMap(parkLayer.getMap() ? null : map);
        }
        $ctrl.toggleMonuments = () => {
            monumentLayer.setMap(monumentLayer.getMap() ? null : map);
        }
        $ctrl.toggleBikeshare = () => {
            bikeShareLayer.setMap(bikeShareLayer.getMap() ? null : map);
            bikeWaysLayer.setMap(bikeWaysLayer.getMap() ? null : map);
        }

        function onGetError(error) {
            console.log(error);
        }
    }
})();
