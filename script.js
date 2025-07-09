const questions = [
  {
    question: "In Bleach, what is Ichigo Kurosaki’s iconic weapon?",
    options: [
      "Kunai",
      "Bankai",
      "Zanpakuto",
      "Hollows"
    ],
    answer: "Zanpakuto"
  },
   {
    question: "What is Mob's real name in Mob Psycho 100?",
    options: [
      "Kageyama Shigeo",
      "Reigen Arataka",
      "Hanazawa Teruki",
      "Ritsu Kageyama"
    ],
    answer: "Kageyama Shigeo"
  },
  {
    question: "In Attack on Titan, who is known as the 'Beast Titan'?",
    options: [
      "Eren Yeager",
      "Zeke Yeager",
      "Levi Ackerman",
      "Erwin Smith"
    ],
    answer: "Zeke Yeager"
  },
  {
    question: "What snack does L famously love in Death Note?",
    options: [
      "Potato chips",
      "Cake",
      "Strawberries",
      "Chocolate"
    ],
    answer: "Cake"
  },
  {
    question: "Which supernatural being shows up in Dandadan?",
    options: [
      "Aliens",
      "Ghosts",
      "Curses",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "In Black Clover, what is Asta's biggest dream?",
    options: [
      "Be Hokage",
      "Be the Wizard King",
      "Master Bankai",
      "Be a Titan"
    ],
    answer: "Be the Wizard King"
  },
  {
    question: "Which of these does Tanjiro always carry in Demon Slayer?",
    options: [
      "A boombox",
      "A water jug",
      "His sister Nezuko in a box",
      "A volleyball"
    ],
    answer: "His sister Nezuko in a box"
  },
  {
    question: "In Haikyuu!!, what position does Hinata mainly play?",
    options: [
      "Setter",
      "Libero",
      "Spiker",
      "Coach"
    ],
    answer: "Spiker"
  },
  {
    question: "What does Mob want most in Mob Psycho 100?",
    options: [
      "To be strong",
      "To get a girlfriend",
      "To become a spirit medium",
      "To eat all the ramen"
    ],
    answer: "To get a girlfriend"
  },
  {
    question: "In Bleach, what does 'Bankai' mean?",
    options: [
      "Spirit world",
      "Full release of a Zanpakuto",
      "Hollow mask",
      "Soul king"
    ],
    answer: "Full release of a Zanpakuto"
  }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex =0 ;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.classList.add("btn");
    answerButton.appendChild(button);
  
     button.addEventListener("click", (e) => selectAnswer(e,currentQuestion.answer));
  })
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e,correctAnswer){
  const selectedBtn = e.target;
  const selecedText = selectedBtn.innerHTML;
  
  if(selecedText === correctAnswer){
    selectedBtn.classList.add("correct");
    score++;  
  }else{
    selectedBtn.classList.add("incorrect");
  }
    Array.from(answerButton.children).forEach(button => {
      if (button.innerHTML === correctAnswer) {
        button.classList.add("correct");
      }
      button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=> {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();