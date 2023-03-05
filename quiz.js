
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
    
    const myQuestions = [
        {
          question: "How long do Penguins live?",
          answers: {
            a: "15-20 years",
            b: "35-40 years",
            c: "5-10 years"
          },
          correctAnswer: "a"
        },
        {
          question: "True or False. Penguins have teeth.",
          answers: {
            a: "True",
            b: "False"
          },
          correctAnswer: "b"
        },
        {
          question: "What do Penguins eat?",
          answers: {
            a: "Fish",
            b: "Shrimp",
            c: "Krill",
            d: "All of the above"
          },
          correctAnswer: "d"
        },
        {
            question: "About how long can penguins stay underwater?",
            answers: {
              a: "5-10 minutes",
              b: "10-15 minutes",
              c: "20-25 minutes",
              d: "25-30 minutes"
            },
            correctAnswer: "b"
        },
        {
            question: "What is a penguins body temperature in Farenheit?",
            answers: {
              a: "50 degrees",
              b: "70 degrees",
              c: "100 degrees",
              d: "120 degrees"
            },
            correctAnswer: "c"
          }
      ];
  
function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'green';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
