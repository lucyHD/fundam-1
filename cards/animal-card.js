class AnimalCard {
  constructor(value) {
    this.value = value;
  }

  //checks if cards are a match and returns true or false 
  snap(otherCard) {
    return (otherCard) && this.value === otherCard.value;
  }

  //same as getFormattedCard()
  formatCard() {
    return this.value.toString();
  }
};


module.exports = {
  AnimalCard: AnimalCard
};



//this class used to create a card