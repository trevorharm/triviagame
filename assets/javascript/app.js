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
	question : 'What type of bridge is the Golden Gate Bridge?',
	possibleAnswers : ['A. Cable-stayed', 'B. Cantilever', 'C. Suspension', 'D. Arch'],
	flags : [false, false, true, false],
	answer : 'C. Suspension'
};

var q2 = {
	question: 'Bruce Banner turns into what fictional superhero when he becomes angry?',
	possibleAnswers: ['A. Superman', 'B. The Hulk', 'C. Abomination', 'D. Batman'],
	flags : [false, true, false, false],
	answer : 'B. The Hulk'
};

var q3 = {
	question : 'What do the letters in the acronym CD-ROM stand for?',
	possibleAnswers : ['A. Compact Disk Random Only Memory', 'B. Compact Disk Read Only Memory', 'C. Closed Disk Read Only Memory', 'D. Central Disk Read On Memory'],
	flags : [false, true, false, false],
	answer : 'B. Compact Disk Read Only Memory'
};

var q4 = {
	question : 'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',
	possibleAnswers : ['A. Sinclair ZX80', 'B. IBM PC', 'C. Commodore 64', 'D. Atari 2600'],
	flags : [true, false, false, false],
	answer : 'A. Sinclair ZX80'
};

var q5 = {
	question : 'Which planet in our solar system spins the fastest?',
	possibleAnswers : ['A. Pluto', 'B. Jupiter', 'C. Mars', 'D. Saturn'],
	flags : [false, true, false, false],
	answer : 'B. Jupiter'
};

var q6 = {
	question : 'Created in 2009, what was the first decentralized cryptocurrency?',
	possibleAnswers : ['A. Bitcoin', 'B. Litecoin', 'C. Bitbucket', 'D. AES256'],
	flags : [true, false, false, false],
	answer : 'A. Bitcoin'
};

var q7 = {
	question : 'Nintendo is a consumer electronics and video game company founded in what country?',
	possibleAnswers : ['A. United States', 'B. Canada', 'C. Japan', 'D. China'],
	flags : [false, false, true, false],
	answer : 'C. Japan'
};

var q8 = {
	question : 'What does the acronym USB stand for when referring to a computer port?',
	possibleAnswers : ['A. Universal Serial Bridge', 'B. Universal Serial Bus', 'C. United States Born', 'D. Universal State Bus'],
	flags : [false, true, false, false],
	answer : 'B. Universal Serial Bus'
};

var q9 = {
	question : 'When referring to a computer monitor, what does the acronym LCD stand for?',
	possibleAnswers : ['A. Laser Crystal Display', 'B. Liquid Crystal Diode', 'C. Laser Crystal Diode', 'D. Liquid Crystal Display'],
	flags : [false, false, false, true],
	answer : 'D. Liquid Crystal Display'
};

var q10 = {
	question : 'In 1975 an engineer created the first electronic camera while working for what company?',
	possibleAnswers : ['A. General Electric', 'B. Kodak', 'C. IBM', 'D. Sun Microsystems'],
	flags : [false, true, false, false],
	answer : 'B. Kodak'
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




function answerCorrect() {
    correct++;
	$("#right").html("<h3>" + correct + "</h3>");
	$("#question").empty();
	$("#question").append("<h3>You Are Correct!</h3>");
    // alert("Correct!");
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
	$("#startGame").show();
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