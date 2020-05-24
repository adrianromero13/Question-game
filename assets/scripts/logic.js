// global variables

let $questionsBegin = $('.questionsBegin');
let $highScores = $('.highScores');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $qNumber = $('#qNumber');
let $answered = $('#answerCheck');
let $gameStart = $('.gameStart');
let $yourFinalScore = $("#yourFinalScore");
let $gameOver = $(".gameOver");
let span = $("#timer");
let $hsButton = $('.hsButton');


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

// on click function for timer
$('#startQuiz').on('click', function () {
  t = setInterval(timer, 1000);
 $gameStart.hide();
 $questionsBegin.show();
 showQuestion();
});

// reset button that refreshes the page to start all over
$('.reset').on('click', function () {
  location.reload();
});

$hsButton.on('click', function () {
  window.location.href = './scores.html';
});

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
  yourFinalScore = counter * 10;
  $yourFinalScore.text(yourFinalScore);
  
  //change the html page
  alert(`You Win! Your final score is: ${yourFinalScore}`);
  $gameOver.show();
  $questionsBegin.hide();
};

//handling the highScore button


//handling scores
// function showScores() {

//   $gameOver.show();

//   // window.location.href = "./scores.html";
// };
