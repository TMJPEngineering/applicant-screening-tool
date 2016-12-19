(function() {
    'use strict';
    angular
        .module('applicant')
        .factory('applicantFactory', factory);
    factory.$inject = ['$http', 'toast'];

    function factory($http, toast) {
        var factory = {
            save: save,
            getTags: getTags
        };

        return factory;

        function save(params) {
            $http.post('/api/applicants', params).then(function(res) {});
            toast.info('Your applicant has been saved!');
        }

        function getTags(modelName) {
            return $http.get('/api/' + modelName).then(function(res) {
                return res.data;
            });
        }
    }
})();