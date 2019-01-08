const taskCoreJS = {
  title: "Вопросы на знание CoreJS",
  questions: [
    {
      question:
        "Что даст сравнение a == b, если \n const a = [1,2,3]; \n const b = [1,2,3] ",
      correctAnswer: ["false"],
      listOfAnswers: ["false", "true", "NaN", "null"]
    },
    {
      question: 'Чему равно значение выражения 4 - "5" + 0xf - "1e1"?',
      correctAnswer: ["4"],
      listOfAnswers: ["string", 4, "NaN", "-10"]
    },
    {
      question: 'Чему равно 0 || "" || 2 || undefined || true || falsе ?',
      correctAnswer: ["2"],
      listOfAnswers: [0, 2, "true", "false"]
    },
    {
      question:
        "Что выведет этот код? \n\n let y = 1; \n let x = y = 2; \n alert(x); ",
      correctAnswer: ["2"],
      listOfAnswers: [1, 2, "NaN", "underfined"]
    },
    {
      question: "Что вызовет выражение: ++2 ?",
      correctAnswer: ["3"],
      listOfAnswers: [1, 4, 3, 2]
    },
    {
      question: "Чему равен typeof null в режиме use strict?",
      correctAnswer: ["object"],
      listOfAnswers: ["object", "null", "string", "underfined"]
    },
    {
      question:
        "Что выведет alert в режиме 'use strict'? \n alert(str); \n let str = \"Hello\";",
      correctAnswer: ["is not defined"],
      listOfAnswers: ["Hello", "NaN", "underfined", "is not defined"]
    },
    {
      question:
        "Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?",
      correctAnswer: ["parent"],
      listOfAnswers: ["this", "parent", "constructor", "instanceof"]
    },
    {
      question: 'Что выведет этот код? \n \n alert( +"Infinity" )',
      correctAnswer: ["Infinity"],
      listOfAnswers: ["Infinity", 0, "NaN", "null"]
    },
    {
      question: "Что даcт cравнение 7 == '7' ?",
      correctAnswer: ["false"],
      listOfAnswers: ["true", "false", "NaN", "null"]
    },
    {
      question: "Чему равна сумма [] + 1 + 2 ?",
      correctAnswer: ["12"],
      listOfAnswers: [1, "NaN", 12, 21]
    },
    {
      question: "Чему равно 2 && 1 && null && 0 && undefined ?",
      correctAnswer: ["null"],
      listOfAnswers: [2, "null", 0, "false"]
    },
    {
      question: "Сколько типов переменных в JS?",
      correctAnswer: ["7"],
      listOfAnswers: [6, 7, 8, 4]
    }
  ]
};

export default taskCoreJS;
