(function() {
    'use strict';
    angular.module('client.home')
        .controller('seatController', SeatController)
    
        SeatController.$inject = []

    function SeatController() {
        var vm = this;
        vm.seatCheck = _seatCheck
        vm.loadSeats = _loadSeats
        vm.isFirst = 0;
        function _seatCheck(){
            if (vm.isFirst == 0){
                return "/content/css/images/seats.jpg"
            }
            else if(vm.isFirst == 1){
                return "/content/css/images/seats1.jpg"
            }
            else if(vm.isFirst == 2){
                return "/content/css/images/seats2.jpg"
            }
            else if(vm.isFirst == 3){
                return "/content/css/images/seats3.jpg"
            }
            else if(vm.isFirst == 4){
                return "/content/css/images/seats4.jpg"
            }
            else return "/content/css/images/seats1.jpg"
        }

        function _loadSeats(){
            var min = Math.ceil(1);
            var max = Math.floor(4);
            var s = Math.random() * (max - min) + min;
            s = s.toString();
            var n = s.indexOf('.');
            s = s.substring(0, n != -1 ? n : s.length);
            console.log(s)
            vm.isFirst = s;
            _seatCheck();
            return s;
        }
    }

})();
