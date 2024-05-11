let score = JSON.parse(localStorage.getItem('score'));
  if (!score) {
    score = {
    Wins : 0,
    Losses : 0,
    Ties : 0
    };
  }

updateScore();

function playGame(playerMove){
  const computerMove = pickMove();

  result = ''; 

  if (playerMove === 'Kertas') {
      if (computerMove === 'Batu') {
      result = 'You Win';
    } else if (computerMove === 'Gunting') {
      result = 'You Lose'
    } else if (computerMove === 'Kertas') {
      result = 'Tie'
    }
  }

  if(playerMove === 'Gunting') {
      if (computerMove === 'Batu') {
      result = 'You Lose';
    } else if (computerMove === 'Gunting') {
      result = 'Tie'
    } else if (computerMove === 'Kertas') {
      result = 'You Win'
    }
  }

  if (playerMove === 'Batu') {
    if (computerMove === 'Batu') {
      result = 'Tie';
    } else if (computerMove === 'Gunting') {
      result = 'You Win'
    } else if (computerMove === 'Kertas') {
      result = 'You Lose'
    }
  }

  if (result === 'You Win') { 
    score.Menang = score.Menang + 1;
  } else if (result === 'You Lose') {
    score.Kalah = score.Kalah + 1;
  } else if (result === 'Tie') {
    score.Seri = score.Seri + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.hasil')
  .innerHTML = result ;

  document.querySelector('.komputer')
  .innerHTML = `<img src="img/${playerMove}.png" alt="Batu" class = "icon">
  <img src="img/${computerMove}2.png" alt="Batu" class = "icon">`; 


  updateScore();

}

function resetScore() {
  document.querySelector('.score')
  .innerHTML = 'Wins: 0 <br> Losses: 0 <br> Ties: 0';

  document.querySelector('.hasil')
  .innerHTML = '';

  document.querySelector('.komputer')
  .innerHTML = '';
}

function updateScore() {
  document.querySelector('.score')
  .innerHTML = `Wins: ${score.Menang} <br> Losses: ${score.Kalah} <br> Ties: ${score.Seri}`;
}

function pickMove(){
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Batu';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Gunting';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Kertas';
  }
  return computerMove;
}