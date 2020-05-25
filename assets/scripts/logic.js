//select by classname
let $gameStart = $('.gameStart');
let $questionsBegin = $('.questionsBegin');
let $highScores = $('.high-scores');
let $gameOver = $(".gameOver");
let $highScorePage = $('.highScorePage');
let $page = $('.page');

//select by id names
let span = $("#timer");
let $qNumber = $('#qNumber');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $answered = $('#answerCheck');
let $yourFinalScore = $("#yourFinalScore");
let $initials = $("#initials");

//initial variables
let counter = 60;
let thisQuestion = 0;
let finalScore;

$gameOver.hide();
$questionsBegin.hide();
$highScorePage.hide();

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
};

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
    $getChoices.append($newButton);
  });
};

function answerQuestion() {
  let qAnswer = questions[thisQuestion].answer;
  if (this.value != qAnswer) {
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
  alert(`You Win! Your final score is: ${finalScore}`);
  $gameOver.show();
  $questionsBegin.hide();
};

//handling the highScore button
function handleScore () {
  initials = $initials.val().trim();
  if (initials !== '') {
    let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
    let newScore = {
      score: finalScore,
      userInitials: initials
    };
    scores.push(newScore);
    window.localStorage.setItem('scores', JSON.stringify(scores));
    hiScores();
  } else {
    alert('Please provide initials');
  }
};

//Scores page logic
function hiScores () {
  $gameOver.hide();
  $page.hide();
  $highScorePage.show();
  //get local storage array
  let scores = JSON.parse(window.localStorage.getItem('scores')) || [];
  //sort them from highest to lowest
  scores.sort(function(a, b) {
    return b.score - a.score;
  });
  //create a list item for each score
  scores.forEach(function (score) {
    let $li = document.createElement('li');
    $li.setAttribute('class', 'list-group-flush list-group-item-info');
    $li.textContent = score.userInitials + ':    ' + score.score;
    $highScores.append($li);
  });
};
