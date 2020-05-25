let $reset = $('.reset');
let $hsButton = $('.hsButton');
let $startQuiz = $('#startQuiz');
let $submit = $("#submit");
let $clearScores = $("#clear");

$startQuiz.on('click', function () {
    t = setInterval(timer, 1000);
   $gameStart.hide();
   $questionsBegin.show();
   showQuestion();
  });
  
  $reset.on('click', function () {
    location.reload();
  });
  
  $hsButton.on('click', function () {
    hiScores();
  });
  
  $submit.on('click', function() {
    handleScore();
  });

  $clearScores.on('click', function() {
      window.localStorage.removeItem("scores");
      window.location.reload();
  });
