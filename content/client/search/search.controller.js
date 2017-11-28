(function () {
    'use strict'
    angular.module('client.search')
        .controller('searchController', SearchController);

    SearchController.$inject = [];

    function SearchController() {
        'use strict'
        var vm = this;
        vm.header = "Search Feature"

        vm.$onInit = () => {
            console.log("search init")
        };

    }
})();