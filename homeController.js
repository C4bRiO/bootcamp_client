(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('homeController', homeController)

    homeController.$inject = [];

    function homeController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();