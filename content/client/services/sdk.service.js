(function(){
    angular.module('client.home')
        .factory('sdkService', SdkService)

    SdkService.$inject = ['$http']

    function SdkService($http){

        let sdkKey = 'feb53440-1740-44fa-b629-dc41f2290ce0'
        
        return { 
            readAll: _readAll
        }

        function _readAll(){
            var config = {
                url: 'https://api.smartcar.com/v1.0/vehicles/fea30381-7935-4de0-a93e-552d204eefe0/seats',
                method: 'GET',
                headers: {
                  'AUTHORIZATION': `Bearer ${sdkKey}`,
                }
            }
            return $http(config)
                .then(xhrSuccess)
                .catch(onError)
        }
    }

    function xhrSuccess(response) {
        return response.data
    }

    function onError(err) {
        return err
    }

})()