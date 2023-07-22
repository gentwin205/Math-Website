const totalProblems = 10;
let currentProblem = 1;
let currentScore = 0;

function answer(event)


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

  /**
   * @returns {Object}
   */
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
    // not sure what the return statement should be.
}

// need function to reset and add new problem
 
//need a handler for getting suers anwers. 
const startOver = document.getElementById("btnStartOver");
startOver.addEventListener("click", );

//Need the code to load DOM
document.addEventListener('DOMContentLoaded', () => {

});