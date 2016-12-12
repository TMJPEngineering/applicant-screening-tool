(function() {
    'use strict';
    angular
        .module('applicant')
        .factory('applicantFactory', factory);
    factory.$inject = ['$http'];

    function factory($http) {
        var factory = {
            save: save
        };

        return factory;

        function save(params) {
            $http.post('/api/applicants', params).then(function(res) {
                console.log(res);
            });
        }
    }
})();