(function() {
    'use strict';
    angular.module('client.home')
        .controller('seatController', SeatController, )

    SeatController.$inject = ['sdkService', '$log', 'toastr']

    function SeatController(sdkService, $log, toastr) {
        var vm = this;
        vm.seatCheck = _seatCheck
        vm.loadSeats = _loadSeats

        vm.isFirst = 0;

        function _seatCheck() {
                if (vm.isFirst == 0) {
                    return "/content/css/images/seats.jpg"
                } else if (vm.isFirst == 1) {
                    return "/content/css/images/seats1.jpg"
                } else if (vm.isFirst == 2) {
                    return "/content/css/images/seats2.jpg"
                } else if (vm.isFirst == 3) {
                    return "/content/css/images/seats3.jpg"
                } else if (vm.isFirst == 4) {
                    return "/content/css/images/seats4.jpg"
                } else return "/content/css/images/seats1.jpg"
        }

        function _loadSeats() {
            _readAll();
        }

        function _readAll() {
            sdkService.readAll()
                .then(data => {
                    vm.isFirst = 0;
                    for (var i = 0; i < data.seats.length; i++) {
                        if (data.seats[i].isOccupied == true) {
                            vm.isFirst += 1;
                        }
                    }
                    if (vm.isFirst >= 3){
                        toastr.success('Ignition set to "Start".')
                    }
                    else toastr.warning('Ignition set to "Off". Must have 75% of passenger capacity.')
                })
                .catch(err => {
                    toastr.warning('Too many requests made.')
                })
        }
    }

})();
