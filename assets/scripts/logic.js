// global variables
let counter = 15.00;
let $questionsBegin = $('.questionsBegin');
let $newButton = $('<button>');
let $showQuestions = $('#showQuestions');
let $showAnswers = $('#showAnswers');
let $displayOutcome = $('#displayOutcome');

// mapped variables (questions)
const title = questions.title;
const choose = JSON.stringify(questions.choices);
const answer = questions.answer;
console.log(choose);
const $question = $('<h4>').text(title);
const $choose = $('<button>').text(choose);




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
            alert("Time's Up!");
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
});

// reset button that refreshes the page to start all over
$('.reset').on('click', function () {
    location.reload();
});


