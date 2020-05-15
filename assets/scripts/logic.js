// global variables

let $questionsBegin = $('.questionsBegin');
let $showQuestions = $('#showQuestions');
let $getChoices = $('#displayChoices');
let $qNumber = $('#qNumber');


let counter = 45.00;
let questionAtm = 0;
let question = questions[questionAtm];
let answer = question.answer;
let newQuestion =$qNumber.text(questionAtm + 1);


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

function showQuestion () {
    //set local variable
    //change display question content
    // $getQuestion.innerHTML = '';
    let $getQuestion = $('#displayQuestions');

    // $getQuestion.innerHTML = question.title;
  
    $getQuestion.text(question.title);
    //refresh displayChoices div content
    $getChoices.innerHTML = '';
    //append new choices using a for each function
    question.choices.forEach(function(choice, index) {
        let $newButton = document.createElement("button");
        $newButton.setAttribute("class", "choiceBtn");
        $newButton.setAttribute("value", choice);
        $newButton.textContent = index + 1 + "] " + choice;
        $getChoices.append($newButton);
    
    console.log(question.title);
    
});
//call out function with an onclick for next
};

function answerQuestion () {
    //is answer right?
    if (this.value != question.answer) {
        console.log(question);
        counter -= 10;
    }
    //add soundtrack for wrong answer


}


