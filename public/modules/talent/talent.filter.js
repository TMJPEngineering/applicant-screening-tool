(function() {
    'use strict';
    angular
        .module('talent')
        .filter('implode', implode);

    function implode() {
        return filter;

        function filter(params) {
            if (params !== undefined)
                return params.join(', ');

            return null;
        }
    }
})();