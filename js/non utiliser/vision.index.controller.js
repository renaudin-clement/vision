(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('quizzController', quizzController);

    quizzController.$inject = ["$scope", "$http", "$window", "$q", "$location", "asyncService", "$stateParams"];

    function quizzController($scope, $http, $window, $q, $location, asyncService, $stateParams) {
        var vm = this;

        $scope.go = function (path) {
            $location.path(path+"/"+$stateParams.teamid);
        };

        vm.Choix = function(){
        	$window.location.replace('http://192.168.1.100/#/choisir/quiz');
    	}

        // Récup infos groupe et joueurs
        if($stateParams.teamid == 0){
            vm.demoMode = 1;
            vm.team=zoodefis_data.demo_team.team[0];
            vm.players=zoodefis_data.demo_team.players;
        } else {
            vm.demoMode = 0;
            // Récupération infos du groupe
            var successEquipeCallback = function(result) {
                //console.log("Recup ok");console.log(result);
                vm.team = result.data[0];
            }
            var errorEquipeCallback = function(result) {
                //console.log("Recup ko");console.log(result);
            }
            $http.get('http://192.168.1.100/api/index.php/equipes/equipe_id/'+$stateParams.teamid).then(successEquipeCallback, errorEquipeCallback);
            // Récupération infos des joueurs
            var successCallback = function(result) {
                //console.log("Recup ok"); console.log(result);
                vm.players = result.data;
            }
            var errorCallback = function(result) {
                //console.log("Recup ko"); console.log(result);
            }
            $http.get('http://192.168.1.100/api/index.php/joueurs/groupeId/'+$stateParams.teamid).then(successCallback, errorCallback);
        }


        return vm;

    }
})();
