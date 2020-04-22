let questionAtm = 0;

// global variables
let counter = 15.00;
let $questionsBegin = $('.questionsBegin');
let $showQuestions = $('#showQuestions');
let $getQuestion = $('#displayQuestions');
let $getChoices = $('#displayChoices');

// mapped variables (questions)
// const title = questions.title;
// const choose = JSON.stringify(questions.choices);
// const answer = questions.answer;
// console.log(answer);
// const $question = $('<h4>').text(title);
// const $choose = $('<button>').text(choose);

// console.log("from logic.js", array);



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
});

// reset button that refreshes the page to start all over
$('.reset').on('click', function () {
    location.reload();
});

function showQuestion () {
    //set local variable
    let question = questions[questionAtm];
    //change display question content
    $getQuestion.textContent = question.title;
    //refresh displayChoices div content
    $getChoices.innerHTML = '';
    //append new choices using a for each function
    question.choices.forEach(function(choice, i) {
        let $newButton = document.createElement("button");
        $newButton.setAttribute("class", "choice");
        $newButton.setAttribute("value", choice);
        $newButton.textContent = i + 1 + "] " + choice;
        $getChoices.append($newButton);
    //     let $newButton = $getQuestion.add("button")
    //             .addClass("choice")
    //             .text(choice);
    //     $newButton.textContent = i + 1 + "]" + choice;
    // //display new button
    // console.log($newButton);
    // $getQuestion.appendChild($newButton);
});
//call out function with an onclick for next
};

// function answerQuestion () {
//     //penalize if wrong answer

//     //
// }


