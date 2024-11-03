'use strict';

//---------------------------------Guess My Number---------------------------------//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('No Number ⛔');
    // when player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    score--;
    if (score >= 1) {
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});



// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // when there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number ⛔';
//     // when player win
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number 🎉';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     // when guess is Too High
//   } else if (guess > secretNumber) {
//       score--;
//       if (score >= 1) {
//         document.querySelector('.message').textContent = 'Too High 📈';
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = 'You Lost The Game 💥';
//         document.querySelector('.score').textContent = 0;
//       }
//       // when guess is too Low
//     } else if (guess < secretNumber) {
//       score--;
//       if (score >= 1) {
//         document.querySelector('.message').textContent = 'Too Low 📉';
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent = 'You Lost The Game 💥';
//         document.querySelector('.score').textContent = 0;
//       }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.guess').value = '';
// });
