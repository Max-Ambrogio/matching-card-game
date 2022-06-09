class Card{   
    SUITS = ["♦" , "♥" , "♣" , "♠"]
    VALUES = [
        "A", 
        "2", 
        "3", 
        "4",
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10", 
        "J", 
        "K", 
        "Q",
    ]   
    constructor(suit, value){
        this.suit = suit
        this.value = value
        this.getCard()
    }

    // if club or spade color = black, anything else color = red
    get color(){
        return this.suit ===  "♣" || this.suit === "♠" ? 'black' : 'red'
    }

    //creates card div and uses dataset to find the card value and suit
    getCard = () => {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add('card' , this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}