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
    }
})();
