let $hsButton = $('.hsButton');
let $gameStart = $('.gameStart');
let $questionsBegin = $('.questionsBegin');
let $highScores = $('.highScores');
let $gameOver = $(".gameOver");
let $reset = $('.reset');

let $startQuiz = $('#startQuiz');
let span = $("#timer");
let $qNumber = $('#qNumber');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $answered = $('#answerCheck');
let $yourFinalScore = $("#yourFinalScore");
let $initials = $("#initials");
let $submit = $("#submit");



let counter = 60;
let thisQuestion = 0;
let finalScore;

$gameOver.hide();
$questionsBegin.hide();

function timer () {
  counter--;
  if (counter >=0) {
    span.text(counter);
  }
  if (counter <= 0) {
    counter = 0;
    alert ("Game Over!");
    finishGame(counter);
  }
}

function showQuestion() {
  //set local variable
  let question = questions[thisQuestion];
  //change display question content
  let $getQuestion = $('#displayQuestions');
  $qNumber.text(thisQuestion + 1);
  $getQuestion.text(question.title);
  //refresh displayChoices div content
  $getChoices.text('');
  //append new choices using a for each function
  question.choices.forEach(function (choice, index) {
    let $newButton = document.createElement("button");
    $newButton.setAttribute("class", "btn btn-info btn-block choiceBtn" );
    $newButton.setAttribute("value", choice);
    $newButton.textContent = index + 1 + "] " + choice;
    $newButton.onclick = answerQuestion;
    console.log(choice);
    $getChoices.append($newButton);
  });
};

function answerQuestion() {
  let qAnswer = questions[thisQuestion].answer;
  if (this.value != qAnswer) {
    console.log(qAnswer);
    counter -= 15;
    //add soundtrack for wrong answer
    $answered.text("WRONG!");
  } else {
    //add soundtrack for right answer
    counter += 3;
    $answered.text("CORRECT!");
  }
  thisQuestion++;
  if (thisQuestion === questions.length) {
    clearInterval(t);
    finishGame();
    //how to end the quiz?
  } else {
    showQuestion(); //moves to next question
  } 

};

//ending game
function finishGame() {
  // counterScore = parseInt();
  finalScore = counter * 10;
  $yourFinalScore.text(finalScore);
  
  //change the html page
  alert(`You Win! Your final score is: ${finalScore}`);
  $gameOver.show();
  $questionsBegin.hide();
};

//onClick functions
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
})

//handling the highScore button
function handleScore () {
  initials = $initials.val().trim();
  console.log('initials', initials);
  //if statement to catch input
  if (initials !== '') {
    let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    let newScore = {
      score: finalScore,
      userInitials: initials
    };
    scores.push(newScore);
    window.localStorage.setItem('scores', JSON.stringify(scores));
    window.location.href = './scores.html';
  }
}

//handling scores
// function showScores() {

//   $gameOver.show();

//   // window.location.href = "./scores.html";
// };
