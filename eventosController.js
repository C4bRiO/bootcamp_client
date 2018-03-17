(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController)

    eventosController.$inject = ['$scope','dataService'];

    function eventosController($scope,dataService) {
        
        activate();

        function activate() {
            $scope.eventos = dataService.getData()
            .then(function(data){
                $scope.eventos = data;
            });

            
         }
    }
})();