const {AnimalDeck} = require('./animal-deck.js');
// const {CardsDeck} = require('./cards.js');  //this produces console.log of 'ace of hearts' or other card
const readline = require('readline');

// to execute the runnable code in this file, use the command
// 'node cards/snap.js' from the command line positioned at the
// root directory of this project.

class Snap {
  constructor(deck) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.deck = deck;
    deck.shuffle();


  }
}

Snap.prototype.play = async function () {
  let currentCard = null;
  let previousCard = null;

  while (this.deck.getCards().length > 0) {
    console.log(this.deck.getCards().length) //this should return 52 
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'play snap> '
    });
    rl.prompt();
    currentCard = this.deck.deal(); //shows that currentCard is actually equal to the the card extracted from the deck, which is actually a card from animal-card
    console.log(currentCard.animal); //changed animal deck deal to return card.animal


    for await (let line of rl) {
      if (line.length > 0 && line.charAt(0).toLowerCase() === 'a') {
        if (currentCard.snap(previousCard)) { //this is the problem because it's trying to do
        //currentCard.animal.snap - which doesn't exisit 
          console.log('SNAP! score Player 1');
          this.player1Score++;
        } else {
          console.log('WRONG! deducting score from Player 1');
          this.player1Score--;
        }
      } else if (line.length > 0 && line.charAt(0).toLowerCase() === 'l') {
        if (currentCard.snap(previousCard)) {
          console.log('SNAP! scorePlayer 2');
          this.player2Score++;
        } else {
          console.log('WRONG! deducting score from Player 2');
          this.player2Score--;
        }
      }``
      previousCard = currentCard;
      rl.close();
    }
  }

  if (this.player1Score === this.player2Score) {
    console.log('Draw');
  } else if (this.player1Score > this.player2Score) {
    console.log('Player 1 wins!');
  } else {
    console.log('Player 2 wins!');
  }

  console.log('Scores: ' + this.player1Score + ' vs ' + this.player2Score);
  process.exit(0);
};

// let cardsDeck = new CardsDeck();
// let snap = new Snap(cardsDeck);


let animalDeck = new AnimalDeck();
let snap = new Snap(animalDeck);

snap.play();