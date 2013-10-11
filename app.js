angular.module('app', [])

function FamilyFeudCtrl($scope) {
	$scope.blank_board = {
		"question" : "",
		"answers": [{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		},{
			"index": "",
			"response": "",
			"score":0,
			"hidden": false,
		}]
	};
	$scope.questions = [{
		"question": "Name an Animal whose legs you eat",
		"answers": [{
			"response": "Chicken",
			"score": 47
		},{
			"response": "Frog",
			"score": 23
		},{
			"response": "Lamb",
			"score":9
		},{
			"response": "Pig",
			"score":7
		},{
			"response" : "Turkey",
			"score": 5 
		},{
			"response": "Rabbit",
			"score": 3
		},{
			"response": "Crab",
			"score": 3 
		}]
	},{
		"question": "In a survey of 100 men, What is something women"
			+ " are always changing",
		"answers": [{
			"response": "Hair",
			"score": 45
		},{
			"response": "Clothes/Shoes",
			"score": 31
		},{
			"response": "Mind/Opinion",
			"score":18
		},{
			"response": "Mood",
			"score":3
		},{
			"response": "Nail Polish",
			"score": 2
		}]
	},{
		"question": "Name of a person from Genesis (NASB)",
		"answers": [{
			"response": "Abraham",
			"score": 191
		},{
			"response": "Jacob",
			"score": 188
		},{
			"response": "Joseph",
			"score":161
		},{
			"response": "Pharaoh",
			"score":89
		},{
			"response": "Isaac",
			"score":83
		},{
			"response": "Esau",
			"score":77
		}]
	},{
		"question": "Name a type of weapon from Genesis",
		"answers": [{
			"response": "Sword",
			"score": 6
		},{
			"response": "Bow",
			"score": 4
		},{
			"response": "Knife",
			"score": 2
		},{
			"response": "Quiver",
			"score": 1
		}]
	},{
		"question": "Past or present, name a TV show set on an island",
		"answers": [{
			"response": "Gilligan's Island",
			"score": 77
		},{
			"response": "Lost",
			"score": 9
		},{
			"response": "Survivor",
			"score":7
		},{
			"response": "Fantasy Island",
			"score":3
		},{
			"response": "Hawaii Five-O",
			"score": 2
		}]
	},{
		"question": "Name a type of animal from Genesis",
		"answers": [{
			"response": "Sheep (lamb,ewe,ram)",
			"score": 34
		},{
			"response": "Birds (dove,pigeon,raven)",
			"score": 33
		},{
			"response": "Camel",
			"score":24
		},{
			"response": "Donkey",
			"score":22
		},{
			"response": "Cattle (bull,oxen,heifer,cow)",
			"score":22
		},{
			"response": "Goat",
			"score":30
		}]
	},{
		"question": "Tell me a place where you would see a group of cardinals.",
		"answers": [{
			"response": "Vatican / Church",
			"score": 54
		},{
			"response": "Tree / Forest",
			"score": 23
		},{
			"response": "Baseball / St. Louis",
			"score":15
		},{
			"response": "Zoo",
			"score":4
		}]
	},{
		"question": "Name a city from Acts",
		"answers": [{
			"response": "Jerusalem",
			"score": 60
		},{
			"response": "Caesarea",
			"score": 17
		},{
			"response": "Antioch (Syrian)",
			"score":13
		},{
			"response": "Damascus",
			"score":13
		},{
			"response": "Ephesus",
			"score":10
		},{
			"response": "Joppa",
			"score":10
		}]
	},{
		"question": "Name a color from the Bible",
		"answers": [{
			"response": "Red(scarlet,chrimson",
			"score": 111
		},{
			"response": "White",
			"score": 76
		},{
			"response": "Purple (violet)",
			"score":60
		},{
			"response": "Blue",
			"score":43
		},{
			"response": "Green",
			"score":34
		},{
			"response": "Black",
			"score":21
		},{
			"response": "Gray",
			"score":15
		}]
	},{
		"question": "Besides chicken, tell me a type of bird that's"
			+ " good to eat",
		"answers": [{
			"response": "Turkey",
			"score": 64
		},{
			"response": "Duck",
			"score": 22
		},{
			"response": "Phesant",
			"score":8
		},{
			"response": "Cornish Game Hen",
			"score":4
		}]
	},{
		"question": "Name a river from the Bible",
		"answers": [{
			"response": "Jordan",
			"score": 197
		},{
			"response": "Nile",
			"score": 47
		},{
			"response": "Euphrates",
			"score":30
		},{
			"response": "Arnon",
			"score":25
		}]
	},{
		"question": "Besides the Lord, name a king from the Bible",
		"answers": [{
			"response": "David",
			"score": 1062
		},{
			"response": "Saul",
			"score": 394
		},{
			"response": "Solomon",
			"score":299
		},{
			"response": "Hezekiah",
			"score":129
		},{
			"response": "Ahab",
			"score": 94
		},{
			"response": "Nebuchadnezzar",
			"score": 91
		}]
	},{
		"question": "Name Something that has a captain",
		"answers": [{
			"response": "Ship/Boat",
			"score": 79
		},{
			"response": "Sports Team",
			"score": 9
		},{
			"response": "Military",
			"score":4
		},{
			"response": "Captain Crunch Cereal",
			"score":3
		},{
			"response": "Airplane",
			"score": 2
		}]
	},{
		"question": "Name a movie that takes place in space",
		"answers": [{
			"response": "Star Wars",
			"score": 31
		},{
			"response": "Apollo 13",
			"score": 13
		},{
			"response": "Lost in Space",
			"score":11
		},{
			"response": "Star Trek",
			"score":10
		},{
			"response" : "2001: A Space Odys.",
			"score": 9
		},{
			"response": "Alien Series",
			"score": 6
		},{
			"response": "Armageddon",
			"score": 6 
		}]
	}];

	$scope.range = function(n) {
        return new Array(n);
    };

	$scope.makeRows = function() { 
		var rvalue = [];
		for( var x = 0 ; x < $scope.active_question.answers.length/2 ; x+=1 ) {
			rvalue.push([$scope.active_question.answers[x],$scope.active_question.answers[x+($scope.active_question.answers.length/2)]]);
		 }
		return rvalue;
	};

	$scope.setActiveQuestion = function( index ) {
		$scope.active_question = angular.copy($scope.blank_board);
		angular.forEach($scope.questions[index].answers, function(value, key){
			$scope.active_question.answers[key].index = key+1;
			$scope.active_question.answers[key].response = value.response;
			$scope.active_question.answers[key].score = value.score;
		});
		$scope.active_question.question = $scope.questions[index].question;
		$scope.rows = $scope.makeRows();
		$scope.total = 0;
		$scope.strikes ='';
	};

	$scope.hideAnswer = function(index) { 
		$scope.active_question.answers[index].hidden=true;
		$scope.total = $scope.total + $scope.active_question.answers[index].score;
		$scope.correct_sound.play();
	};

	$scope.wrongGuess = function() { 
		$scope.strikes = $scope.strikes + "X";
		$scope.incorrect_sound.play();
	};

	$scope.correct_sound = new Audio("FamilyFeudBell.mp3");
	$scope.incorrect_sound = new Audio("FamilyFeudBuzzer.mp3");

    $scope.rows = [];
	$scope.active_question = $scope.setActiveQuestion(0);

	$scope.total =0;
	$scope.team1_score=0;
	$scope.team2_score=0;
}
