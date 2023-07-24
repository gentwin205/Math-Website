const totalProblems = 10;
let currentProblem = 1;
let currentScore = 0;
let problemArray = [];

//need a function for getting users answers. 
//need a function for increasing user score.
//need a function for progressing to the next question.
//need an event listener to allow user to select answers.

function checkAnswer(index, correctAnswer) {
  const selectedAnswer = problemArray[currentProblem - 1].answer[index];

  if (selectedAnswer === correctAnswer) {
    currentScore++; 
  }

  currentProblem++; 
  if (currentProblem <= totalProblems) {
    display(problemArray[currentProblem - 1]); 
    screenProblem(); 
    screenScore(); 
  } else {
    const question = document.querySelector('#problem .expression');
    question.textContent = "Practice Completed!";
    const answersList = document.querySelector('#answers ul');
    answersList.innerHTML = '';
  }
}

function display(number) {
  const question = document.querySelector('#problem .expression');
  question.textContent = number.leftOperand + " * " + number.rightOperand;

  const answersList = document.querySelector('#answers ul');
  answersList.innerHTML = '';

  number.answer.forEach((answer, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = answer;
    listItem.addEventListener('click', () => checkAnswer(index, number.correctAnswer));
    answersList.appendChild(listItem);
    

  });
}




/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
 function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
 }

 /**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
 function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
  }
   
 function createProblem(){
    const rightOperand = getRandomNumber(10);
    const leftOperand = getRandomNumber(10);
    const correctAnswer = rightOperand * leftOperand;

    const wrongArray = [];
    while (wrongArray.length < 3){
        const wrongAnswer = getRandomNumber(10) * getRandomNumber(10);
        if (!wrongArray.includes(wrongAnswer) && wrongAnswer !== correctAnswer){
            wrongArray.push(wrongAnswer)
        }
    }

    const answer = shuffleArray([correctAnswer, ...wrongArray]);

    return{
        leftOperand,
        rightOperand,
        correctAnswer,
        answer,
    };
    
   
}

function screenProblem(){
    const currentScreenProblem = document.querySelector('.currentProblem');
    currentScreenProblem.textContent = currentProblem;
}

function screenScore(){
    const currentScreenScore = document.querySelector('.currentScore');
    currentScreenScore.textContent = currentScore;
}

function reset(){
    currentProblem = 1;
    currentScore = 0;
    problemArray = [];

    for (let i = 0; i < totalProblems; i++){
        problemArray.push(createProblem());
    }
    const newProblems = document.querySelector('#problem');
    const newAnswer = document.querySelector('#answers');
    newProblems.classList.remove('show-hide');
    newAnswer.classList.remove('show-hide');

    display(problemArray[0]);
    screenProblem();
    screenScore();
}




const startOver = document.getElementById("btnStartOver");
startOver.addEventListener("click", reset);

document.addEventListener('DOMContentLoaded', () => {
reset();
});