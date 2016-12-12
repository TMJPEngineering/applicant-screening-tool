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
                birthday: vm.birthday,
                skills: vm.skills,
                preferred_salary: vm.preferredSalary,
                comment: vm.comment,
                position: vm.position
            });
        }
    }
})();
