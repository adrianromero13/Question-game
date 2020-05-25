let $reset = $('.reset');
let $hsButton = $('.hsButton');
let $startQuiz = $('#startQuiz');
let $submit = $("#submit");


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
    window.location.href = './scores.html';
  });
  
  $submit.on('click', function() {
    handleScore();
  });
  