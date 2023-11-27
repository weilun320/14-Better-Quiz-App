const questions = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra"
  },
  {
    question: "What is the largest mammal?",
    answer: "Blue whale"
  },
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const button = document.getElementById("submit-button");
const score = document.getElementById("score");
let quizScore = 0;
let questionCounter = 0;

question.innerHTML = questions[questionCounter].question;

function submit() {
  if (answer.value === questions[questionCounter].answer) {
    quizScore++;
  }

  if (questionCounter < questions.length - 1) {
    questionCounter++;
    question.innerHTML = questions[questionCounter].question;
    answer.value = "";
  }
  else {
    button.style.display = "none";
    score.innerHTML = `Your score is ${quizScore}/${questions.length}`;
  }
}