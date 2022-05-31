let randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);
let score = 20;
let highscore = 0;

function displayMessage(x) {
  document.querySelector('.message').textContent = x;
}

document.querySelector('.check').addEventListener('click', Check);

function Check() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    console.log(highscore);
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 21);
  console.log(randomNumber);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
