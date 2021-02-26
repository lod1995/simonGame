// not finished 
var colorArray = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;
var userClickedPattern = [];



function nextSequence() {

var randomNumbers = Math.floor(Math.random()* 3 + 1);
console.log(randomNumbers);

};

$(document).keypress(function () {
if(!started){
$("#level - title2").text("level" - level);
started = true;
nextSequence();
}

});


$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
  
});
