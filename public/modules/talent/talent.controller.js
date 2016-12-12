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
        }
    }
})();
