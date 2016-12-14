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
            vm.order = {};
        }

        function search() {
            var next = false,
                data = {
                    position: vm.position,
                    skills: vm.skills,
                    from: vm.fromAge,
                    to: vm.toAge,
                    sort: vm.sortBy
                };

            for (var index in data) {
                if (data[index] !== undefined)
                    next = true;
            }

            if (next) {
                talentFactory.getTalents(data).then(function(talents) {
                    vm.results = talents;
                    vm.order = {};
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
    }
})();
