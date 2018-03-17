(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('dataService', dataService)

    dataService.$inject = ['$http'];

    function dataService($http) {
        this.getData = getData;

        function getData() { 
            return $http.get('http://localhost:3000/eventos')
                .then(function(result){
                    return result.data;
                })
                .catch(function (err){
                    console.log(err);
                });
        }
    }
})();