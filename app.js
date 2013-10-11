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
		"question": "How Awesome Is This",
		"answers": [{
			"response": "Way Awesome",
			"score": 50
		},{
			"response": "Super Awesome",
			"score": 30
		},{
			"response": "Meh",
			"score":30
		}]
	},{
		"question": "How Awesome Are You",
		"answers": [{
			"response": "Way Awesome",
			"score": 50
		},{
			"response": "Super Awesome",
			"score": 30
		},{
			"response": "Meh",
			"score":30
		},{
			"response": "Meh",
			"score":30
		},{
			"response": "Meh",
			"score":30
		},{
			"response": "Meh",
			"score":30
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
