(function(){
    angular.module('client.home')
        .factory('sdkService', SdkService)

    SdkService.$inject = ['$http']

    function SdkService($http){

        let sdkKey = '8da14a60-256c-4aad-9467-791d7795686d'
        
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