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
            vm.field = 'name';
            vm.reverseSort = false;
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
                });
            }
        }

        function sort(field, sort) {
            vm.field = field;
            vm.reverseSort = sort;
        }
    }
})();
