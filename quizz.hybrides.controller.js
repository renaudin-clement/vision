(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('quizzHybridesController', quizzHybridesController);

    quizzHybridesController.$inject = ["$scope", "$http", "$window", "$q", "asyncService","$cookies", "$cookieStore", "$stateParams"];

    function quizzHybridesController($scope, $http, $window, $q, asyncService, $cookies, $cookieStore, $stateParams) {
        var vm = this;
		vm.currentPhoto = 0;
        vm.currentTimer = "";
        vm.currentScore = 0;
        vm.Heading = "quizzHybrides";
        vm.Text = "Page d'accueil du jeu";
		vm.buttons = [];

		vm.photos = zoodefis_data.hybrides.clone();
		vm.photos.shuffle();
		vm.photosNumber = vm.photos.length;

        vm.quizScore = $cookies.get('quizScore');
        $cookies.put('quizScore','');

        //console.log(vm.photos);

		if($stateParams.teamid == 0){
            vm.demoMode = 1;
            vm.teamid=1;
            vm.team=zoodefis_data.demo_team.team[0];
            //vm.launchWithPlayers(zoodefis_data.demo_team.players);
        } else {
	        vm.teamid = $stateParams.teamid;
        }

		var updatePhotoInfoBox = function (index) {
			if(index === -1) {
				jQuery("#animalId").text("");
			} else {
				jQuery("#animalId").text("Photo n°"+(index+1)+'/X');
			}
		};


		vm.AfficheFonds = function (chemin) {
        	//alert("alerts");
			//console.log("changement fonds");
        	$http.defaults.headers.common['Authorization'] = 'YWRtaW46Y2hhbmdlaXQ=';
        	localStorage.photofile="imageQuiz/"+chemin;

        	var successCallback = function(data) {
            	//alert("Score remonté");
            	//console.log("Selection remontées");
            	//console.log(data);
        	}
        	var errorCallback = function(data) {
            	alert("Problème lors de l'enregistrement. Oups. Arg.");
            	//console.log(data);
        	}
        	var values = {
            	"id":2,
            	"valeur":"imageQuiz"+"|"+chemin
        	}
        	$http.post('http://192.168.1.100/api/index.php/selection/2', values).then(successCallback, errorCallback);
    	};

   	 
    	

		vm.sendPhotoForProjector = function(univers, filename) {
            jQuery("A").removeClass("selected");
            $http.defaults.headers.common['Authorization'] = 'YWRtaW46Y2hhbmdlaXQ=';
			//console.log(univers+"|"+filename);
            
            var successCallback = function(data) {
                //alert("Score remonté");
                //console.log("Selection remontées");
                //console.log(data);
            }
            var errorCallback = function(data) {
                alert("Problème lors de l'enregistrement. Oups. Arg.");
                //console.log(data);
            }
            var values = {
                "id":2,
                "valeur":univers+"|"+filename
            }
            $http.post('http://192.168.1.100/api/index.php/selection/2', values).then(successCallback, errorCallback);
        }
		var activatePhoto = function(index) {
			//console.log("zorg");
			//console.log(jQuery("A#buzzer0").attr('class'));
			//console.log(jQuery("A#buzzer1").attr('class'));
			//console.log(jQuery("A#buzzer2").attr('class'));
			//console.log(jQuery("A#buzzer3").attr('class'));
            console.time("activatePhoto");
			vm.currentPhoto = index;
            //console.log("localStorage.currentPhoto "+localStorage.currentPhoto);
			
			jQuery("#cf8 img").removeClass("opaque");
			jQuery("#cf8 img#photo"+index).addClass("opaque");

			updatePhotoInfoBox(index);
			vm.photo = vm.photos[index];
            localStorage.photofile=vm.photo.image;
            vm.sendPhotoForProjector("hybrides",vm.photo.image);
			refreshBuzzers(index);
			console.timeEnd("activatePhoto");
		};

        var refreshBuzzers = function(answer) {
            jQuery("A").removeClass("selected");

			// Position de la bonne réponse 1
            var rightAnswer1BuzzerNum = (Math.random()*3).toFixed(0);

			// Position de la bonne réponse 2
			var rightAnswer2BuzzerNum = rightAnswer1BuzzerNum;
			while (rightAnswer2BuzzerNum == rightAnswer1BuzzerNum) {
				// Tirage au hasard tant que la réponse 1 est au même endroit que la réponse 2
				rightAnswer2BuzzerNum = (Math.random()*3).toFixed(0);
			}

			// Recopie des infos de la photo dans buzzers
			var buzzers = vm.photos.slice();
			// Retrait des infos de la bonne photo de buzzers
			buzzers.splice(vm.currentPhoto, 1);
            for(var buttonId = 0; buttonId<=3; buttonId++){
                if(buttonId == rightAnswer1BuzzerNum) {
					// Si c'est la bonne photo
					//console.log("bonne réponse : buzzer " + buttonId + " " + vm.photo.animal1);
					// ...recopie du nom sur le bouton
					jQuery("#buzzer" + buttonId).html(vm.photo.animal1);
				} else if (buttonId == rightAnswer2BuzzerNum) {
					// Si c'est la bonne photo
					//console.log("bonne réponse : buzzer "+buttonId+" "+vm.photo.animal2);
					// ...recopie du nom sur le bouton
					jQuery("#buzzer"+buttonId).html(vm.photo.animal2);
                } else {
					// Sinon
					var photoToAffect = (4*Math.random()+1).toFixed(0);
					// ...affectation d'un libellé au hasard
					while(buzzers[photoToAffect].animal2 == vm.photo.animal1 || buzzers[photoToAffect].animal2 == vm.photo.animal2){
						photoToAffect = (4*Math.random()+1).toFixed(0);
					}
                    jQuery("#buzzer"+buttonId).html(buzzers[photoToAffect].animal2);
					buzzers.splice(photoToAffect, 1);
                }
            }
            //console.log("ici");
        };


		vm.answer1 = "";
		vm.answer2 = "";
		//console.log(vm.answer1);//die();

        var checkAnswer = function(answer) {
			if(vm.answer1 == "") {
				vm.answer1 = answer;
				//console.log("answer 1 : " + vm.answer1);
			} else {
				vm.answer2 = answer;
				//console.log("answer 2 : " + vm.answer2);
	            if ((vm.answer1.toUpperCase() === vm.photo.animal1.toUpperCase())&&(vm.answer2.toUpperCase() === vm.photo.animal2.toUpperCase()) || (vm.answer2.toUpperCase() === vm.photo.animal1.toUpperCase())&&(vm.answer1.toUpperCase() === vm.photo.animal2.toUpperCase())) {
					vm.answer1 = "";
					vm.answer2 = "";
    	            //console.log("Bravo, c'est gagné.");
                    jQuery("A").removeClass("selected");
	                jQuery("#gagne")[0].play();
	                activatePhoto(vm.currentPhoto + 1);
					vm.currentScore++;
					jQuery("#score").text(vm.currentScore);
	            } else {
					vm.answer1 = "";
					vm.answer2 = "";
					//console.log("Tsoin tsoin tsoin tsoiiiinn.");
                    jQuery("A").removeClass("selected");
					jQuery("#perdu")[0].play();
				}
            }
        };

        jQuery("#cf8_controls").on('click', 'span', function() {
			activatePhoto($(this).index());
        });

		jQuery("#nextPhoto").on('click', function() {
			// We reached the end of the photos array
			if((vm.currentPhoto+1) === vm.photosNumber) {
				activatePhoto(0);
			} else {
				activatePhoto(vm.currentPhoto + 1);
			}
		});

		var startGame = function(){
			vm.currentScore = 0;
			jQuery(".regle-du-jeu").hide();
			jQuery('#theGame').fadeToggle();
			timer.start();
			activatePhoto(0);
		};

		var endGame = function() {
			vm.AfficheFonds("QuizV1.png");
			jQuery('#theGame').hide();
			jQuery("#launchGameDiv").fadeToggle();
			//console.log("c'est fini !\nBravo, vous avez trouvé "+vm.currentScore+" animaux.");
            vm.chimeresScore = (3*vm.currentScore).toFixed(0);
            if(vm.chimeresScore > 50) {
                vm.chimeresScore = 50;
            }
            //console.log("Vous avez marqué "+vm.chimeresScore+" points.");
            vm.quizScore = parseInt(vm.quizScore) + parseInt(vm.chimeresScore);
            vm.showScore();

		};


        vm.sendScore = function(score) {
            $http.defaults.headers.common['Authorization'] = 'YWRtaW46Y2hhbmdlaXQ=';
            var successCallback = function(data) {
                //alert("Score remonté");
                //console.log("Score remonté");
                //console.log(data);
            }
            var errorCallback = function(data) {
                alert("Problème lors de l'enregistrement. Oups. Arg.");
                //console.log(data);
            }
            var values = {
                "num_partie":getCurrentPartie(getCurrentEquipe()),
                "num_equipe":$stateParams.teamid,
                "code_jeu":"quiz",
                "score":score
            }
            $http.post('http://192.168.1.100/api/index.php/scores', values).then(successCallback, errorCallback);
        }

        vm.showScore = function() {
			vm.AfficheFonds("QuizV1.png");
            jQuery("#score-knob-input").val(0);
            jQuery(".score-round").slideDown();
            jQuery(".knob").knob({
            	'draw': function() {
            	    $(this.i).css('font-size', '52pt').css('margin-top','46px').css('color', '#626565').css('height', '84px');;
                },
                'dynamicDraw': true,
            });
            jQuery({value: 0}).animate({ value: vm.quizScore }, {
                duration: 1000,
                easing: 'swing',
                progress: function () {
                    jQuery(".knob").val(Math.ceil(this.value)).trigger('change')
                },
                complete : function() {
                    //jQuery(".validate-button-paragraph").fadeIn('slow');
                }
            });
            vm.sendScore(vm.quizScore);
            //vm.gotoGlobalScore();
        }

        vm.gotoGlobalScore = function() {
            $window.location.href = '/#/score/'+vm.teamid+'/quiz';
        }

		jQuery("#startGame").on('click', function(){
			startGame();
		});

		jQuery("#photonames").on('click', '.col-md-2', function() {
			activatePhoto($(this).index());
		});

        jQuery("#buzzers").on('click', 'a', function() {
        	
            jQuery(this).toggleClass("selected");
            jQuery(this).data("selected","selected");
            if(jQuery(this).hasClass("selected")) {
            	//console.log($(this)[0].text);
            	checkAnswer($(this)[0].text);
            } else {
            	vm.answer1 = "";
            }
        });

		var timer = new CountDownTimer();
		timer.duration=60;
		timer.tickFtns=[
			//function(minutes, seconds){console.log(minutes+":"+seconds);},
			function(minutes, seconds){
				jQuery("#timer").text(minutes+":"+seconds);
			}
		];
		timer.completionFtns=[
			function(){
				endGame();
			}
		];

        return vm;
    }
})();
