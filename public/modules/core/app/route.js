(function() {

    angular.module('tmj')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('applicant', {
                url: '/',
                data: { requireLogin: false },
                views: {
                    'header': { templateUrl: 'views/layouts/header.html' },
                    'content': {
                        templateUrl: 'views/web/applicant.html',
                        controller: 'ApplicantController',
                        controllerAs: 'ac',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
