const questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Which of the following is NOT a javascript data type?",
        choices: ["Array", "Object", "Table", "String"],
        answer: "Table"
      },
      {
        title: "Which parenthesis type is used to invoke functions?",
        choices: ["{}", "[]", "||", "()"],
        answer: "()"
      },
      {
        title: "What will this statement return: console.log('7' == 7)",
        choices: ["true", "false", "maybe", "depends"],
        answer: "true"
      },
      {
        title: "Inside which HTML element does JavaScript go in?",
        choices: ["<java>", "<js>", "<script>", "<css>"],
        answer: "<script>"
      },
  ];

  let array = $.map(questions, function(value, index) {
    return [value];
});


console.log(array);




