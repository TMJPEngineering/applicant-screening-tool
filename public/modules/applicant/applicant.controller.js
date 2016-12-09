/**
 * @author TMJP Web Development Team
 * @copyright 2016
 */

(function() {
    'use strict';

    angular
        .module('applicant')
        .controller('ApplicantController', ApplicantController);
    ApplicantController.$inject = ['applicantFactory'];

    function ApplicantController(applicantFactory) {
        var vm = this;

        activate();

        function activate() {
           vm.save = save;
        }

        function save() {
            applicantFactory.save({
                name: vm.name,
                skills: vm.skills,
                prefer_salary: vm.preferSalary,
                comment: vm.comment
            });
        }
    }
})();
