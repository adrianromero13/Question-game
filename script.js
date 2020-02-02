// pseudocode

/*
  on page load: 
    show game start screen
    include how to play instructions
    add start quiz button
    
  on start button click:
    hide game-start div 
    show questions div
    show question
    start timer

  on answer selection:
    check to see if answer is correct
    if correct:
      display success message
      add to score
      show next question
    if incorrect:
      display fail message
      deduct time from timer
      show next question

  for game end:
    if all the questions have been answered:
      display score
      prompt to save initials and results
      on save:
        record results in local storage
    if time runs out:
      display score
      prompt to try again
*/


/*
  functions:
    startGame()
    resetGame()
    endGame()
    restartGame()

    startTimer()
    decrementTimer()

    renderQuestion()
    checkAnswer()

    saveScore()
    clearScores()
    toggleScores()
*/
// const $button = $('button')
$('#startQuiz').on('click', function(){
  let counter = 15.00;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      let span = $('#timer');
      span.text(counter);
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
       alert("Time's Up!");
        clearInterval(counter);
    }
    console.log(counter);

  }, 1000);
  $('.gameStart').hide();

});
$('.reset').on('click', function() {
  location.reload();
});
