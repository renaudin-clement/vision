(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('quizzReconnaitreController', quizzReconnaitreController);

    quizzReconnaitreController.$inject = ["$scope", "$http", "$window", "$q", "asyncService", "$cookies", "$cookieStore", "$stateParams"];

    function quizzReconnaitreController($scope, $http, $window, $q, asyncService, $cookies, $cookieStore, $stateParams) {
        var vm = this;
		vm.currentPhoto = 0;
        vm.currentTimer = "";
        vm.currentScore = 0;
        vm.quizScore = 0;
        vm.Heading = "quizzReconnaitre";
        vm.Text = "Page d'accueil du jeu";
		vm.buttons = [
		    {"image":"","name":"animal1","eyePosition":{"x":0,"y":0}},
		    {"image":"","name":"animal2","eyePosition":{"x":0,"y":0}},
            {"image":"","name":"animal3","eyePosition":{"x":0,"y":0}},
            {"image":"","name":"animal4","eyePosition":{"x":0,"y":0}}
        ];
        zoodefis_data.quizz.shuffle();
		vm.photos = zoodefis_data.quizz;
		vm.photosNumber = vm.photos.length;
		var scope=$scope;

		var timer = new CountDownTimer();
		timer.duration=3*60;

		vm.Choix = function(){
        	$window.location.replace('http://192.168.1.100/#/choisir/quiz');
    	}


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

   	 
    	vm.AfficheFonds("QuizZoom.png");
    	//vm.AfficheFonds("QuizV1.png");
    	

 


        // Aide mémoire lecture/écriture cookie
        // GET : var favoriteCookie = $cookies.get('screen');
        // PUT : $cookies.put('screen', 'batsurvey');


        //console.log(vm.photos);
		var updatePhotoInfoBox = function (index) {
			if(index === -1) {
				jQuery("#animalId").text("");
			} else {
				jQuery("#animalId").text("Photo n°"+(index+1)+'/50');
			}
		};
		
		vm.sendPhotoForProjector = function(univers, filename) {
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
            //console.log("activatePhoto");
			vm.currentPhoto = index;
            //console.log("currentPhoto "+vm.currentPhoto);

			jQuery("#cf7 img").removeClass("opaque");
			console.log("#cf7 img#photo"+index);
			jQuery("#cf7 img#photo"+index).addClass("opaque");
			//jQuery("#cf7_controls span").removeClass("selected");
			//jQuery("#cf7_controls span").eq(vm.currentPhoto).addClass("selected");

			updatePhotoInfoBox(index);
			vm.photo = vm.photos[index];
            localStorage.photofile=vm.photo.image;
			vm.sendPhotoForProjector("quizz",vm.photo.image);
            refreshBuzzers(index);
			console.timeEnd("activatePhoto");
		};

        //localstorage.on("currentPhoto",console.log("Current Photo has changed ! "+vm.currentPhoto));

		var deActivatePhoto = function() {
			var index = vm.currentPhoto = index;
			jQuery("#cf7 img").removeClass("opaque");
			updatePhotoInfoBox(-1);
		};

		var random = Math.random();

        var refreshBuzzers = function(answer) {
            var rightAnswerBuzzerNum = (Math.random()*3).toFixed(0);
			var buzzers = vm.photos.slice();
			//console.log(buzzers);
			//console.log(vm.currentPhoto);
			buzzers.splice(vm.currentPhoto, 1);
			jQuery(".card > a").removeClass("selected");
            for(var buttonId = 0; buttonId<=3; buttonId++){
                if(buttonId == rightAnswerBuzzerNum) {
                    //console.log("bonne réponse : buzzer "+buttonId+" "+vm.photo.name);
                    jQuery("#buzzer"+buttonId+"-nom").html(vm.photo.name);
                    jQuery("#buzzer"+buttonId).removeClass("ko");
                    jQuery("#buzzer"+buttonId).addClass("ok");
                    vm.buttons[buttonId] = vm.photo;
                } else {
					var photoToAffect = (4*Math.random()+1).toFixed(0);
					// Avoid twice good answers
					if(buzzers[photoToAffect].name == vm.photo.name) {
					    photoToAffect = (4*Math.random()+1).toFixed(0);
					}
                    jQuery("#buzzer"+buttonId+"-nom").html(buzzers[photoToAffect].name);
                    jQuery("#buzzer"+buttonId).removeClass("ok");
                    jQuery("#buzzer"+buttonId).addClass("ko");
					buzzers.splice(photoToAffect, 1);
					vm.buttons[buttonId] = vm.photos[photoToAffect];
                }
                //
            }
            //console.log(vm.buttons);
        };

        var actionAnswer = function(isRightAnswer) {
            //console.log(isRightAnswer);
            if(isRightAnswer === true) {
                //console.log("Bravo, c'est gagné.");
                jQuery("#gagne")[0].play();
                activatePhoto(vm.currentPhoto + 1);
				vm.currentScore++;
				jQuery("#score").text(vm.currentScore);
                //jQuery("#score").html = vm.currentScore;
            } else {
                //console.log("Tsoin tsoin tsoin tsoiiiinn.");
                jQuery("#perdu")[0].play();
            }
        };

        jQuery("#cf7_controls").on('click', 'span', function() {
			activatePhoto($(this).index());
        });

		jQuery(".next-button").on('click', function() {
			// We reached the end of the photos array
			if((vm.currentPhoto+1) === vm.photosNumber) {
				activatePhoto(0);
			} else {
				activatePhoto(vm.currentPhoto + 1);
			}
		});

		var startGame = function(){
			vm.currentScore = 0;
			$cookies.put('quizScore', '');
			jQuery(".regle-du-jeu").fadeOut(
                "slow",
                function() {
                    timer.start();
                    activatePhoto(0);
                    jQuery('#quizGame').fadeIn();
                }
            );
		}

		vm.endGame = function() {
			vm.AfficheFonds("Quizhybride.png");
			timer.duration=0;
			jQuery('#quizGame').hide();
			jQuery('.next-button-reconnaitre').fadeIn();
			//jQuery("#launchGameDiv").fadeToggle();
			//alert("c'est fini !\nBravo, vous avez marqué "+vm.currentScore+" points.");
			//console.log("c'est fini !\nBravo, vous avez trouvé "+vm.currentScore+" animaux.");
			vm.reconnaitreScore = (3*vm.currentScore).toFixed(0);
			if(vm.reconnaitreScore > 50) {
			    vm.reconnaitreScore = 50;
			}
			//console.log("Vous avez marqué "+vm.reconnaitreScore+" points.");
			$cookies.put('quizScore', vm.reconnaitreScore);
			vm.launchQuizHybrides();
		};

		jQuery("#startGame").on('click', function(){
			startGame();
		});

		jQuery("#photonames").on('click', '.col-md-2', function() {
			activatePhoto($(this).index());
		});

        jQuery(".buzzers").on('click', 'a', function() {
            // vérifier si la bonne réponse a été sélectionné (classe ok sur le lien sinon classe ko)
            jQuery(this).toggleClass("selected");
            if(jQuery(this).hasClass("ok")) {
                setTimeout(function() {
                    actionAnswer(true);
                }, 600);
            }

        });

		timer.tickFtns=[
			//function(minutes, seconds){console.log(minutes+":"+seconds);},
			function(minutes, seconds){
			    //console.log(minutes+":"+seconds);
				jQuery("#timer").text(minutes+":"+seconds);
			}
		];
		timer.completionFtns=[
			function(){
				vm.endGame();
			}
		];

		vm.launchQuizHybrides= function() {
            $window.location.href = '/#/quiz/hybrides/'+$stateParams.teamid;
		}

        return vm;
    }
})();
