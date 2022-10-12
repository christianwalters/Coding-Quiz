//array for questions
var question = ["Q1", "Q2", "Q3", "Q4", "Q5"];
//arrays for answer choices
var q1a = ["A1", "A2", "A3", "A4", "A5"];
var q2a = ["A1", "A2", "A3", "A4", "A5"];
var q3a = ["A1", "A2", "A3", "A4", "A5"];
var q4a = ["A1", "A2", "A3", "A4", "A5"];
var q5a = ["A1", "A2", "A3", "A4", "A5"];
//array for correct answers
var correct = [q1a[0], q2a[0], q3a[0], q4a[0], q5a[0]];
//variable for score
var score = 0;
//variable for timer
var timer = 60;
//when button is clicked, start quiz
var startButton = document.getElementById('start');
startButton.addEventListener("click", function() { 
 //document.getElementById("question")
});





//when quiz starts timer counts down
//if a question is wrong subtract from timer additional 10 seconds
//if question is correct add 20 points to score
//if timer equals 0 OR quiz is over, show score to player and let them type in their initials, save this and put it on score board on top left of screen