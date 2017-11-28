(function (){
    'use strict';

    angular
        .module('client.map')
        .controller('mapController', MapController);

    MapController.$inject=['$scope'];

    function MapController($scope){
        var vm = this;
        vm.$scope = $scope;
        vm.$onInit = _onInit;

        function _onInit(){
            console.log('onInit: mapController');
            
        }
    }
        
})();