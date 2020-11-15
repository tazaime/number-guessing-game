'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value = 23);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScrore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(typeof guess);

  // NOTE: WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // NOTE: WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highScrore) {
        highScrore = score;
        document.querySelector('.highscore').textContent = highScrore;
    }

    // NOTE: WHEN GUESS IS WRONG
  } else if (guess !== secretNumber){
    if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? '📈Too High!' : '📉Too Low!';
        displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
  } 
//   // NOTE: WHEN GUESS IS TOO HIGH
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//     // NOTE: WHEN GUESS IS TOO LOW
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

/*

Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

*/

document.querySelector('.again').addEventListener('click', function () {
  //NOTE: RESET SCORE VALUE
  score = 20;

  //NOTE: RESET SECRETNUMBER VALUE
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //NOTE: RESET MESSAGE CONDITION
  //   document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

  //NOTE: RESET NUMBER CONDITION
  document.querySelector('.number').textContent = '?';

  //NOTE: RESET SCORE CONDITION
  document.querySelector('.score').textContent = 20;

  // NOTE: RESET GUESS INPUT CONDITION
  document.querySelector('.guess').value = '';

  // NOTE: RESET WIN STYLES
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '';
});
