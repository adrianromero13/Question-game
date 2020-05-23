// global variables

let $questionsBegin = $('.questionsBegin');
let $highScores = $('.highScores');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $qNumber = $('#qNumber');
let $answered = $('#answerCheck');
let $yourFinalScore = $(".yourFinalScore");


let counter = 60;
let questionAtm = 0;


// on click function for timer
$('#startQuiz').on('click', function () {
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      let span = $('#timer');
      span.text(counter);
    }
    // Display 'counter'
    if (counter === 0) {
      alert("Game Over!");
      finishGame();
    }

  }, 1000);
  // hides gameSart div to clear screen for quiz
  $('.gameStart').hide();

});

// hides the questions section until the start button is pressed
$questionsBegin.hide();
// $highScores.hide();
$('button').on('click', function () {
  $questionsBegin.show();
  showQuestion();

});

// reset button that refreshes the page to start all over
$('.reset').on('click', function () {
  location.reload();
});

function showQuestion() {
  //set local variable
  let question = questions[questionAtm];
  //change display question content
  let $getQuestion = $('#displayQuestions');
  $qNumber.text(questionAtm + 1);

  $getQuestion.text(question.title);
  //refresh displayChoices div content
  $getChoices.text('');
  //append new choices using a for each function
  question.choices.forEach(function (choice, index) {
    let $newButton = document.createElement("button");
    $newButton.setAttribute("class", "btn btn-info btn-block choiceBtn" );
    $newButton.setAttribute("value", choice);
    $newButton.textContent = index + 1 + "] " + choice;
    // set an onclick to each button to trigger answering functionality
    $newButton.onclick = answerQuestion;
    console.log(choice);
    $getChoices.append($newButton);

    console.log(question.title);

  });
  //call out function with an onclick for next
};

function answerQuestion() {
  //is answer right?
  let qAnswer = questions[questionAtm].answer;


  if (this.value != qAnswer) {
    console.log(qAnswer);
    counter -= 15;
    if (counter < 0) {
      counter = 0;
    }
    //add soundtrack for wrong answer
    $answered.text("WRONG!");
  } else {
    //add soundtrack for right answer
    counter += 3;
    $answered.text("CORRECT!");
  }
  //change the question to the next index
  questionAtm++;

  //what if out of questions?
  if (questionAtm === questions.length) {
    finishGame();
    //how to end the quiz?
  } else {
    showQuestion(); //moves to next question
  }

};

function finishGame() {
  window.location.href = "./scores.html";

  let finalScore= counter * 10;
  $yourFinalScore.text(finalScore);
  alert(`You Win! Your final score is:${finalScore}`);
  clearInterval(counter);
  $quesntionsBegin.hide();
  // $highScores.show();
  //change the html page
  console.log(finalScore);
}



