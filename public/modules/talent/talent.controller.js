/**
 * @author TMJP Web Development Team
 * @copyright 2016
 */

(function() {
    'use strict';

    angular
        .module('talent')
        .controller('TalentController', TalentController);
    TalentController.$inject = ['talentFactory'];

    function TalentController(talentFactory) {
        var vm = this;

        activate();

        function activate() {
            vm.search = search;
            vm.sort = sort;
            vm.view = view;
            vm.loadTags = loadTags;
            vm.order = {};
            vm.showResults = false;
            vm.showResume = false;
        }

        function search() {
            var next = false,
                data = {
                    position: vm.position,
                    skills: vm.skills,
                    from: vm.fromAge,
                    to: vm.toAge
                };

            for (var index in data) {
                if (data[index] !== undefined)
                    next = true;
            }

            if (next) {
                talentFactory.getTalents(data).then(function(talents) {
                    vm.results = talents;
                    if (vm.sortBy) {
                        vm.order.field = vm.sortBy;
                        vm.order.reverseSort = false;
                        if (vm.sortBy == '_applicant.count_skills')
                            vm.order.reverseSort = !vm.order.reverseSort;
                    }
                    vm.showResults = true;
                });
            }
        }

        function sort(field, reverseSort) {
            if (vm.order.field !== field) {
                vm.order.field = field;
                vm.order.reverseSort = false;
            } else {
                vm.order.field = field;
                vm.order.reverseSort = reverseSort;
            }
        }

        function view(id) {
            talentFactory.getTalent(id).then(function(talent) {
                vm.result = talent;
                vm.showResume = true;
            });
        }

        function loadTags(modelName) {
            var skillsSet = [];

            return talentFactory.getTags(modelName).then(function(skills) {
                skills.forEach(function(skill) {
                    skillsSet.push(skill.name);
                });

                return skillsSet;
            });
        }
    }
})();
