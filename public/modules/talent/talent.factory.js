(function() {
    'use strict';
    angular
        .module('talent')
        .factory('talentFactory', factory);
    factory.$inject = ['$http'];

    function factory($http) {
        var factory = {
            getTalents: getTalents
        };

        return factory;

        function getTalents(params) {
            return $http.get('/api/users', { params: params }).then(function(res) {
                return res.data.filter(function(user) {
                    return user._applicant !== null && user._position !== null;
                });
            });
        }
    }
})();