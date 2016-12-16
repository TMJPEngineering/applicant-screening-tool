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
           vm.position = [];
           vm.loadTags = loadTags;
        }

        function save() {
            applicantFactory.save({
                name: vm.name,
                birthday: vm.birthday,
                skills: vm.skills,
                preferred_salary: vm.preferredSalary,
                comment: vm.comment,
                position: (vm.position.length) ? vm.position[0].text : ''
            });
        }

        function loadTags(modelName) {
            var skillsSet = [];

            return applicantFactory.getTags(modelName).then(function(skills) {
                skills.forEach(function(skill) {
                    skillsSet.push(skill.name);
                });
                return skillsSet;
            });
        }
    }
})();
