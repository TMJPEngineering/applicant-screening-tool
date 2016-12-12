(function() {
    'use strict';
    angular
        .module('talent')
        .factory('talentFactory', factory);
    factory.$inject = ['$http'];

    function factory($http) {
        var factory = {
        };

        return factory;
    }
})();