console.log('Welcome to \'heads or tails\'!');

let wantsToPlay = prompt('Would you like to play? (y/n)');
  if (wantsToPlay == 'y') {
    let myWallet = prompt('How much do you have?')
    gameSession(myWallet);
  }

function gameSession(wallet, isRecursed = false) {
  if (isRecursed == false) {
  console.log(`You have $${wallet}`)    
  }

  let myBet = prompt('How much do you want to bet?')

  if (myBet > wallet) {
    console.log('You don\'t have enough money!')
    gameSession(wallet, isRecursed = true)
  }

  if (myBet < 0) {
    console.log("You can't bet a negative amount!")
    gameSession(wallet, isRecursed = true)
  }
  else {
    wallet -= myBet;
    
    if (isRecursed = false) {
    console.log('let\'s start!');      
    }

    let cointoss = Math.floor(Math.random() * 2);
    let guess = prompt('heads or tails? (h/t)');
    let isHeads = false;
    let htGuess = true;

    if (cointoss == 1) {
      isHeads = true;
    }

    if (guess == 't') {
      htGuess = false;
    }

    let tryAgain = null;

    if (htGuess === isHeads) {
      console.log('You won!');
      myBet *= 2;
      wallet += myBet
      console.log(`Your bet has doubled. You now have $${wallet}. Try again? (y/n)`);
      if (tryAgain == 'y') {
        gameSession(wallet, isRecursed = true)
      }
      else {
        console.log(`Enjoy your $${wallet}!`);
        return wallet;
      }
    }

    else {
      tryAgain = prompt(`You lost and now have $${wallet}! Try again? (y/n)`);
      if (tryAgain == 'y') {
        gameSession(wallet, isRecursed = true)
      }
      else {
        console.log("Have a great day!")
        return wallet;
      }

    }

  }

}