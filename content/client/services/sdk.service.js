(function(){
    angular.module('client.home')
        .factory('sdkService', SdkService)

    SdkService.$inject = []

    function SdkService(){
        return { 
            readAll: _readAll
        }

        let SDKKEY = ""

        function _readAll(){
            var config = {
                url: 'https://api.smartcar.com/v1.0/vehicles/fea30381-7935-4de0-a93e-552d204eefe0/seats',
                method: 'GET',
                headers: {
                  'AUTHORIZATION': `Bearer ${SDKKEY}`,
                }
            }
            
            return $http.get(config)
                .then(xhrSuccess)
                .catch(onError)
        }
    }

    function xhrSuccess(response) {
        return response.data
    }

})()