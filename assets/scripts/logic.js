// global variables

let $questionsBegin = $('.questionsBegin');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $qNumber = $('#qNumber');
let $answered = $('#answerCheck');


let counter = 45.00;
let questionAtm = 0;
let newQuestion = $qNumber.text(questionAtm + 1);


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
      clearInterval(counter);
    }

  }, 1000);
  // hides gameSart div to clear screen for quiz
  $('.gameStart').hide();

});

// hides the questions section until the start button is pressed
$questionsBegin.hide();
$('button').on('click', function () {
  $questionsBegin.show();
  showQuestion();
  newQuestion;

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

  $getQuestion.text(question.title);
  //refresh displayChoices div content
  $getChoices.text('');
  //append new choices using a for each function
  question.choices.forEach(function (choice, index) {
    let $newButton = document.createElement("button");
    $newButton.setAttribute("class", "choiceBtn");
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
    counter -= 10;
    if (counter < 0) {
      counter = 0;
    }
    //add soundtrack for wrong answer
    $answered.text("WRONG!");
  } else {
    //add soundtrack for right answer
    $answered.text("CORRECT!");
  }
  //change the question to the next index
  questionAtm++;

  //what if out of questions?
  if (questionAtm === questions.length) {
    //how to end the quiz?
    $questionsBegin.hide(); //hides the questions div
  } else {
    newQuestion;
    showQuestion(); //moves to next question
  }

}


