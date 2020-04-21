// global variables
let counter = 15.00;

// on click function for timer
$('#startQuiz').on('click', function(){
    setInterval(function() {
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
  
  // reset button that refreshes the page to start all over
  $('.reset').on('click', function() {
    location.reload();
  });
  