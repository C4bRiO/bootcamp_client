(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosController', eventosController)

    eventosController.$inject = ['$scope','dataService','$state'];

    function eventosController($scope,dataService,$state) {
        
        activate();

        function activate() {
            $scope.eventos = dataService.getData()
            .then(function(data){
                $scope.eventos = data;
            });

            
         }


         $scope.delete = function(id){
            swal({
                title:"Estas Seguro?",
                text:"Una vez eliminado, no puede ser recuperado",
                icon:"warning",
                buttons:"true",
                dangerMode:"true",
            }) 
            
            .then((isConfirm) => { 
                if(isConfirm){
                    dataService.deleteEvento(id)
                    .then(function(result){
                        console.log(result);
                        $state.go($state.current,{},{reload:true}); 
                    })
                }
            })
         }
    }
})();