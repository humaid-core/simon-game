var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// Function to generate the next sequence in the game
var randomChosenColor;
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  return randomChosenColor;
}

//function to generate a flash effect
var activeButton;
function flashEffect(randomChosenColor) {
  activeButton = $("#" + randomChosenColor);
  activeButton.addClass("pressed");
  playSound(randomChosenColor);

  setTimeout(function () {
    activeButton.removeClass("pressed");
  }, 300);
}

//function to play one of the four sounds based on the color passed as an argument
function playSound(randomChosenColor) {
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

var level = 1;

function gameStart() {
  $(document).keypress(function () {
    if (gamePattern.length === 0) {
      nextSequence();
      $("#level-title").text("Level " + level);
      level++;
      flashEffect(randomChosenColor);
    }
  });
}

gameStart();
trackUserClick();

function trackUserClick() {
  $(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    flashEffect(userChosenColor);
    userClickedPattern.push(userChosenColor);

    if (checkAnswer() === false) {
      $("body").addClass("game-over");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    } else if (userClickedPattern.length === gamePattern.length) {
      $("#level-title").text("Level " + level);
      level++;
      userClickedPattern = [];
      nextSequence();
      setTimeout(function () {
        flashEffect(randomChosenColor);
      }, 1000);
    }
  });
}

function checkAnswer() {
  var currentIndex = userClickedPattern.length - 1;

  if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
    return true;
  } else {
    return false;
  }
}

function failedAudio() {
  var wrongAudio = new Audio("sounds/wrong.mp3");
  wrongAudio.play();
}

function startOver() {
  $("#level-title").text("Failed! Press Any Key To Restart");
  failedAudio();
  setHighestScore();
  gamePattern = [];
  userClickedPattern = [];
  level = 1;
  gameStart();
}

var highestScore = 0;

function setHighestScore() {
  if (level > highestScore) {
    highestScore = level - 1;
  }

  $("#score").text(highestScore);
}
