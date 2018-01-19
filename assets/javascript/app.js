$(document).ready(function(){

  

// define variables


var index = 0;
var countdownTimer = {
    time: 30,
    reset: function() {
        this.time = 30;
        $("#timer").html('<h3>' + this.time + ' seconds left!!</h3>');
    },
    start: function(){
        counter = setInterval(countdownTimer.count, 1000);
    },
    stop: function(){
        clearInterval(counter);
    },
    count: function(){
        countdownTimer.time--;
        if(countdownTimer.time >= 0) {
            $("#timer").html('<h3>' + countdownTimer.time + ' seconds left!!</h3>');
        }
        else {
            index++;
            answerWrong();
            countdownTimer.reset();
            if (index < questionArray.length){
                loadQuestion(index);
                }
            else{
                $(".answerChoice").hide();
                showScore();
                }
            }
        }
    };
// Question Objects
var correct =0;
var incorrect =0;
var q1 = {
	question : 'Who was the host for Kitchen Kabaret?',
	possibleAnswers : ['A. Fud Wrapper', 'B. Cookie Ann Milk', 'C. Bonnie Appetit', 'D. Cherry Ontop'],
	flags : [false, false, true, false],
	answer : 'C. Bonnie Appetit'
};

var q2 = {
	question: 'Who starred in the title role of Condorman?',
	possibleAnswers: ['A. Zac Efron', 'B. Michael Crawford', 'C. Billy Crystal', 'D. Michael Keaton'],
	flags : [false, true, false, false],
	answer : 'B. Michael Crawford'
};

var q3 = {
	question : 'In Captain EO, what is the name of the elephant like alien?',
	possibleAnswers : ['A. Trunks', 'B. Hooter', 'C. Elle', 'D. Odie'],
	flags : [false, true, false, false],
	answer : 'B. Hooter'
};

var q4 = {
	question : 'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',
	possibleAnswers : ['A. Sinclair ZX80', 'B. IBM PC', 'C. Commodore 64', 'D. Atari 2600'],
	flags : [true, false, false, false],
	answer : 'A. Sinclair ZX80'
};

var q5 = {
	question : 'What country was welcomed into the World Showcase at EPCOT Center in 1984?',
	possibleAnswers : ['A. Norway', 'B. Morocco', 'C. France', 'D. Japan'],
	flags : [false, true, false, false],
	answer : 'B. Morocco'
};

var q6 = {
	question : 'In 1981 a Disney constructed WED-Way People Mover opened at which airport?',
	possibleAnswers : ['A. Houston Intercontinental Airport', 'B. Orlando International Airport', 'C. Atlanta International Airport', 'D. Dallas/Ft. Worth International Airport'],
	flags : [true, false, false, false],
	answer : 'A. Houston Intercontinental Airport'
};

var q7 = {
	question : 'What school is attended in the Disney Channel Series, Girl Meets World?',
	possibleAnswers : ['A. Vintage High School', 'B. Peyton Middle School', 'C. John Quincy Adams Middle School', 'D. Washington High School'],
	flags : [false, false, true, false],
	answer : 'C. John Quincy Adams Middle School'
};

var q8 = {
	question : 'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
	possibleAnswers : ['A. Typhoon Lagoon', 'B. Pleasure Island', 'C. Both A & B', 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Pleasure Island'
};

var q9 = {
	question : 'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
	possibleAnswers : ['A. The Night Before Christmas', 'B. Three Little Pigs', 'C. The Old Mill', 'D. The Gallopin\' Gaucho'],
	flags : [false, false, false, true],
	answer : 'D. The Gallopin\' Gaucho'
};

var q10 = {
	question : 'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?',
	possibleAnswers : ['A. Recycling used film footage', 'B. Designing US Army & US Navy insignia', 'C. Hosted a Studio Victory Garden where employees grew food for their families', 'D. Forced employees to carpool by closing parking lots to non-carpool cars'],
	flags : [false, true, false, false],
	answer : 'B. Designing US Army & US Navy insignia'
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// load question, write to html
function loadQuestion() {
    countdownTimer.reset();
  $("#question").html("<h2>" + questionArray[index].question + "</h2>");
  $("#buttonA").text(questionArray[index].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[index].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[index].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[index].possibleAnswers[3]).show();
};


// function to start game
$("#startGame").on("click",function(){
    index = 0;
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
});


// function getAnswer() {
//     $(".answerChoice").on("click", function() {
//       index++;
//       $(".question").text('');
//       $("#buttonA").text('');
//       $("#buttonB").text('');
//       $("#buttonC").text('');
//       $("#buttonD").text('');
//       loadQuestion();
//     })
// };

function answerCorrect() {
    correct++;
    $("#right").html("<h3>" + correct + "</h3>");
    alert("Correct!");
    };

function answerWrong() {
    incorrect++;
    $("#wrong").html("<h3>" + incorrect + "</h3>");
    alert("Incorrect!");
    };

function showScore() {
    $("#question").empty();
    $("#question").append("<h2><p>" + correct + " correct!</p></h2>");
    $("#question").append("<h2><p>" + incorrect + " incorrect!</p></h2>");
    countdownTimer.stop();
    $("#timer").empty();
};

// init();
// logic for right/wrong answer when selected
$(".answerChoice").on("click", function() {
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 };

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerChoice").hide();
 	showScore();
 }

});





});