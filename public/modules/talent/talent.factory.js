(function() {
    'use strict';
    angular
        .module('talent')
        .factory('talentFactory', factory);
    factory.$inject = ['$http'];

    function factory($http) {
        var factory = {
            getTalents: getTalents,
            getTalent: getTalent,
            getTags: getTags
        };

        return factory;

        function getTalents(params) {
            return $http.get('/api/users', { params: params }).then(function(res) {
                return res.data.filter(function(user) {
                    return user._applicant !== null && user._position !== null;
                });
            });
        }

        function getTalent(id) {
            return $http.get('/api/users/' + id).then(function(res) {
                return res.data;
            });
        }

        function getTags(modelName) {
            return $http.get('/api/' + modelName).then(function(res) {
                return res.data;
            });
        }
    }
})();