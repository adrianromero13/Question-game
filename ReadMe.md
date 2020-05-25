# Quiz-Game - javaScript

## Description

A simple quiz game that takes 7 questions having to do with javaScript vanilla. Answer each question to move on to the next one. With every answer, the quiz will let you know with a DOM Element manipulation of text values with ***Wrong***, or ***Correct***. There will be a sound effect to represent whether the choice was right or wrong. As you progress in the quiz, the timer will count down from **60** seconds. 
Once you finish every question, the quiz will end and open a section in the app to place your initials and see your final score. 

Entering your initials and hitting submit will save your scores and take you to the ***High Scores*** page of the application.

In the new page you will be able to return to the initial screen or clear the high scores.


## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Technologies:

The technologies used to create this terminal application are as follows:
- javaScript
- jQuery
- BootStrap
- GitHub
- GitBash terminal
- Google (...a ton of google)

## Usage 
As we embarck on this educationally intensive journey to become full-stack developers, we take this time to show off the magic that comes with manipulating DOM elements using javascript alone. This quiz-game platform will show how javaScript, in this case jQuery, is used in the background to run functions that will make a webpage more dynamically appealing to the user, and give it functionality.

Take the time to see the functionality found in buttons, links, and features such as displayed timers, functional input forms, on click event listeners, and the use of device's local storage.

Pagination was accomplished using the .show() and .hide() built in functions of javaScript by manipulating certain divs in the HTML page.
*list-items* in the **Questions** page and the **High Scores** page were made using the create() and append() functinos to create DOM elements and appending them to the desired section of the page. 

This application utilized the onClick eventListener all around and were placed on all the buttons seen in the application. 

---
**The Timer Function**
```
function timer () {
  counter--;
  if (counter > 0) {
    span.text(counter);
  }
  if (counter <= 0) {
    counter = 0;
    finishGame();
  }
};
```
The timer found on the top right of the application begins at the click of the ***Start Quiz*** button. The start quiz button callsback another function that begins the Questions and appends this funciton with a setInterval() that triggers this function at a specific interval. The interval (1,000 milliseconds), continues until it is stopped using the clearInterval(), javaScript function. This code block shows you the timer's javaScript logic and if the timer reaches **0**, it triggers a finishGame() function. That function includes the clearInterval() that stops the timer() from being triggered again. 

This funciton was used in the logic to have a value to be used for the scores at the end of the quiz.



[Adrian'sGithub](https://github.com/adrianromero13)




## Credits

* UC Berkeley, Extensions Full Stack Development BootCamp Instructors & Assistants
    - Manny Jucaban
    - Musa Akbari
    - Amanda Crawford

* Google inc.           **[Google](https://www.google.com)**
* GitHub                **[GitHub](https://github.com/)**
    
    



## License

[GNU General Public License v3.0](./LICENSE.txt)




## Contributing


[Contributor Covenant](https://www.contributor-covenant.org/)


---
Adrian Romero 2020 JavaScript Quiz-Game
