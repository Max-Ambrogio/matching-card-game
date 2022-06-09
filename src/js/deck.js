class Deck{
    constructor(cards = this.newDeck()){
        this.cards = cards
        this.shuffle()
    }
    
    //flattens suit and value array into 52 card deck
    newDeck(){
        const card = new Card()
        // console.log(card.SUITS)
        // console.log(card.VALUES)
        return card.SUITS.flatMap(suit => {
            return card.VALUES.map(value => {
                return new Card(suit, value)
            })
        })
    }

    //locates starting position in array, randomizes arrays position
    shuffle(){
        const numberOfCards = this.cards.length
        for (var i = 0; i < numberOfCards; i++){
            let random = Math.floor(Math.random() * numberOfCards);
            let shuffledDeck = this.cards[i]
            this.cards[i] = this.cards[random]
            this.cards[random] = shuffledDeck
        }
    }
    
}


