// variables
$(document).ready(function() {
  var count = 0;
  var time = 31;
  var isSelected = false;
  var ticker;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  // Questions and Answer Arrays
  var question = [
    "What year did Kanye's debut album release?",
    "How much money did Jay-Z make in 2016?",
    "What is Travis Scott's real name?",
    "How old is the Weeknd?",
    "How many monthly listeners does Kendrick Lamar have on Spotify?",
    "Where did J. Cole grow up?",
    "How many kids does Future have?",
    "Who is Kid Cudi's best friend?"
  ];
  var answer = [
    "2004",
    "$53.5 Million",
    "Jacques Berman Webster II",
    "29 Years Old",
    "25,553,896",
    "Fayetteville, North Carolina",
    "3",
    "Kanye West"
  ];
  var firstChoice = [
    "2000",
    "$102 million",
    "Shawn Travis",
    "29 Years Old",
    "2,109,057,534",
    "Chicago, Illinois",
    "6",
    "Kanye West"
  ];
  var secondChoice = [
    "2004",
    "$27 Million",
    "Travis Webster",
    "24 Years Old",
    "2,056,897",
    "Brooklyn, New York",
    "3",
    "Jay-Z"
  ];
  var thirdChoice = [
    "2008",
    "$53.5 Million",
    "Jacques Berman Webster II",
    "32 Years Old",
    "774,291,353",
    "Fayetteville, North Carolina",
    "1",
    "Travis Scott"
  ];
  var fourthChoice = [
    "2010",
    "$8 Million",
    "Scott Mescudi",
    "35 Years Old",
    "25,553,896",
    "Atlanta, Georgia",
    "4",
    "Post Malone"
  ];

  // Functions
  function showHolders() {
    $("#question-holder").show();
    $("#option-holder-1").show();
    $("#option-holder-2").show();
    $("#option-holder-3").show();
    $("#option-holder-4").show();
  }
  function hideHolders() {
    $("#question-holder").hide();
    $("#option-holder-1").hide();
    $("#option-holder-2").hide();
    $("#option-holder-3").hide();
    $("#option-holder-4").hide();
  }
  function hideResults() {
    $("#correct-holder").hide();
    $("#incorrect-holder").hide();
    $("#unanswered-holder").hide();
    $("#restart-holder").hide();
  }
  function displayQuestion() {
    hideResults();
    $("#answer-holder").hide();
    $("#image-holder").hide();
    $("#time-holder").show();
    showHolders();
    $("#question-holder").html(question[count]);
    $("#option-holder-1").html(firstChoice[count]);
    $("#option-holder-2").html(secondChoice[count]);
    $("#option-holder-3").html(thirdChoice[count]);
    $("#option-holder-4").html(fourthChoice[count]);

    // Hover trick
    $("#option-holder-1").hover(
      function() {
        $(this).css("color", "yellow");
      },
      function() {
        $(this).css("color" , "white");
      }
    );
    $("#option-holder-2").hover(
      function() {
        $(this).css("color", "yellow");
      },
      function() {
        $(this).css("color", "white");
      }
    );
    $("#option-holder-3").hover(
      function() {
        $(this).css("color", "yellow");
      },
      function() {
        $(this).css("color", "white");
      }
    );
    $("#option-holder-4").hover(
      function() {
        $(this).css("color", "yellow");
      },
      function() {
        $(this).css("color", "white");
      }
    );
  }
  $("#option-holder-1").on("click", checkAnswer);
  $("#option-holder-2").on("click", checkAnswer);
  $("#option-holder-3").on("click", checkAnswer);
  $("#option-holder-4").on("click", checkAnswer);

  // Check Answer Function
  function checkAnswer() {
    hideHolders();

    if ($(this).text() === answer[count]) {
      stopTime();
      isSelected = true;
      $("#answer-holder").show();
      $("#answer-holder").html("Right! The answer is: " + answer[count]);
      displayImage();
      correct++;
      count++;
    } else {
      stopTime();
      isSelected = true;
      $("#answer-holder").show();
      $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
      displayImage();
      incorrect++;
      count++;
    }

    checkGameEnd();
  }

  // End Game Function
  function checkGameEnd() {
    if (count === question.length) {
      $("#time-holder").hide();
      showResults();
      count = 0;
      $(".start").show();
      $(".start").on("click", function() {
        resetResults();
        startGame();
      });
    }
  }

  function resetTime() {
    time = 31;
  }

  function displayTime() {
    time--;
    $("#time-holder").html("Time remaining: " + time);

    if (time <= 0) {
      hideHolders();
      stopTime();
      $("#answer-holder").show();
      $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
      displayImage();
      unanswered++;
      count++;
      checkGameEnd();
    }
  }

  function displayScoreRight () {
    hideHolders();
    stopTime();
    $("#counter-good").show();
    $("#counter-good").html("Correct: " + answer[count]);
    displayImage();
    unanswered++;
    count++;
    checkGameEnd();
  }

    function displayScoreWrong() {
      hideHolders();
      stopTime();
      $("#counter-bad").show();
      $("#counter-bad").html("Incorrect: " + answer[count]);
      displayImage();
      unanswered++;
      count++;
      checkGameEnd();
    }

  function startTime() {
    clearInterval(ticker);
    ticker = setInterval(displayTime, 1000);
  }
  function stopTime() {
    clearInterval(ticker);
    resetTime();
    if (count < question.length - 1) {
      setTimeout(startTime, 2000);
      setTimeout(displayQuestion, 3000);
    }
  }

  resetTime();

  // Show Images & Answer
  function displayImage() {
    if (count === 0) {
      $("#image-holder").show();
      $("#image-holder").html('<img src="assets/images/kanyewest.jpg">');
    } else if (count === 1) {
      $("#image-holder").show();
      $("#image-holder").html('<img src="assets/images/jayz.jpg">');
    } else if (count === 2) {
      $("#image-holder").show();
      $("#image-holder").html(
        '<img src="assets/images/travisscott.jpg">'
      );
    } else if (count === 3) {
      $("#image-holder").show();
      $("#image-holder").html('<img src="assets/images/theweeknd.jpg">');
    } else if (count === 4) {
      $("#image-holder").show();
      $("#image-holder").html(
        '<img src="assets/images/kendricklamar.jpg">'
      );
    } else if (count === 5) {
      $("#image-holder").show();
      $("#image-holder").html('<img src="assets/images/jcole.jpg">');
    } else if (count === 6) {
      $("#image-holder").show();
      $("#image-holder").html('<img src="assets/images/future.jpg">');
    } else if (count === 7) {
      $("#image-holder").show();
      $("#image-holder").html(
        '<img src="assets/images/kidcudi.jpg">'
      );
    }
  }
  
  // Results 
  function showResults() {
    $("#correct-holder").show();
    $("#correct-holder").html("Nice Job, you got " + correct + " questions correct!");
    $("#incorrect-holder").show();
    $("#incorrect-holder").html("Darn! You missed " + incorrect + " questions");
    $("#unanswered-holder").show();
    $("#unanswered-holder").html("There were " + unanswered + " unanswered questions!");
    $("#restart-holder").show();
    $("#restart-holder").html("Tap Start at the top to play again!");
  }

  // Reset Results Function
  function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
  }

  // Start Game Function
  function startGame() {
    $(".start").hide();
    startTime();
    displayQuestion();
  }

  // Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});


// Music Button
$(".theme-button").on("click", function() {
  audioElement.play();
});
$(".pause-button").on("click", function() {
  audioElement.pause();
});
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/music/ASTROTHUNDER.mp3");