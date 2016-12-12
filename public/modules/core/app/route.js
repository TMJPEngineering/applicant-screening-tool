(function() {

    angular.module('tmj')
        .config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('applicant', {
                url: '/',
                views: {
                    'header': { templateUrl: 'views/layouts/header.html' },
                    'content': {
                        templateUrl: 'views/web/applicant.html',
                        controller: 'ApplicantController',
                        controllerAs: 'ac',
                    }
                }
            });
            .state('talent', {
                url: '/talent',
                views: {
                    'header': { templateUrl: 'views/layouts/header.html' },
                    'content': {
                        templateUrl: 'views/web/talent.html',
                        controller: 'TalentController',
                        controllerAs: 'tc'
                    }
                }
            })
        $locationProvider.html5Mode(true);
    }
})();
