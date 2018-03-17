(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('eventosFormController', eventosFormController)

    eventosFormController.$inject = [];

    function eventosFormController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();