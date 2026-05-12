// quiz.js

let currentScore = 0;

function generateQuiz(){

  let quiz =
  document.getElementById("quizOutput");

  currentScore = 0;

  quiz.innerHTML = `

  <h3>Generated Quiz</h3>

  <div class="question">

    <p>1. HTML stands for?</p>

    <button onclick="checkAnswer(this,true)">
      Hyper Text Markup Language
    </button>

    <button onclick="checkAnswer(this,false)">
      High Text Machine Language
    </button>

  </div>

  <div class="question">

    <p>2. CSS is used for?</p>

    <button onclick="checkAnswer(this,true)">
      Styling
    </button>

    <button onclick="checkAnswer(this,false)">
      Database
    </button>

  </div>

  <h2 id="score">
    Score: 0
  </h2>

  `;

}

// CHECK ANSWER

function checkAnswer(button, correct){

  if(correct){

    button.style.background = "green";

    currentScore++;

  }else{

    button.style.background = "red";

  }

  document.getElementById("score").innerHTML =
  `Score: ${currentScore}`;

}