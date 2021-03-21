// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.
// return deck of cards in order formatted correctly ace - king

//command D +-

class Card {
  constructor(value, suit) {
    this.value = value; //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
    this.suit = suit; //0 (clubs), 1 (diamonds), 2 (hearts), 3 (spades)
  }

  formatCard() {
    let cardNumber = 0;

    let faceValueName;
    switch (this.value) {
      case 0:
        faceValueName = "ace";
        break;
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        faceValueName = (this.value + 1).toString();
        break;
      case 10:
        faceValueName = "jack";
        break;
      case 11:
        faceValueName = "queen";
        break;
      case 12:
        faceValueName = "king";
        break;
      default:
        throw new Error(
          "Something went wrong " +
            this.value +
            " is not a valid faceValue!"
        );
    }

    let suitName;
    switch (this.suit) {
      case 0:
        suitName = "clubs";
        break;
      case 1:
        suitName = "diamonds";
        break;
      case 2:
        suitName = "hearts";
        break;
      case 3:
        suitName = "spades";
        break;
      default:
        throw new Error(
          "Something went wrong " + this.suit + " is not a valid suitName!"
        );
    }

    return faceValueName + " of " + suitName;
  }

  
  snap(previousCard) {
    
    return (  previousCard.value === this.value)   

  }
  
}

class Deck {
  constructor() {
    this.cards = [];
    
    for (let suit = 0; suit < 4; suit++) {
      for (let value = 0; value < 13; value++) {
        const newCard = new Card(value, suit);
        //  this.cards[suit * 13 + faceValue] = newCard;
      
        this.cards.push(newCard);
        
      }
    }
  }

  getCards() {
    return this.cards;
  }
 




  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let indexA = Math.floor(Math.random() * i);
      let indexB = i;

      let valueA = this.cards[indexA];
      let valueB = this.cards[indexB];

      this.cards[indexA] = valueB;
      this.cards[indexB] = valueA;
    }
    return this.cards;
  }


  deal() {
    let card = this.cards.splice(0, 1)[0];
    console.log(card) // returns object  Card { value: 4, suit: 3 }
    return card;

  };
}

// const exampleDeck = new Deck();
// console.log(exampleDeck.createCardDeck());

// const exampleShuffledDeck = new Deck();
// // console.log(exampleShuffledDeck.shuffle());
// exampleShuffledDeck.shuffle();
// console.log(exampleShuffledDeck.deal());

// const exampleCard = new Card("hearts", 6);

// console.log(exampleCard); //print out an object //Card { suit: 'hearts', value: 6 }

//export the objects Deck and Card
// key: deck value: Deck (this is your actual deck here), cards deck is the name you are giving it when you export 
//key: card value: Card

module.exports = {
  CardsDeck: Deck,
  Card: Card,
};
