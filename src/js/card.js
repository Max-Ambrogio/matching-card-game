class Card{   
    static SUITS = ["♦" , "♥" , "♣" , "♠"]
    static VALUES = [
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
        this.drawn = false
       
    }

    toggleFlip(){
        //adding or removing of css class
        //only flip if not flipped or make the game do it
        this.flip = true
    }

    // if club or spade color = black, anything else color = red
    get color(){
        return this.suit ===  "♣" || this.suit === "♠" ? 'black' : 'red'
    }

    //creates card div and uses dataset to find the card value and suit
    getCardElement = () => {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.suit
        cardDiv.classList.add('card' , this.color)
        cardDiv.classList.add('front')
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        this.drawn = true
        cardDiv.addEventListener('flip' , this.toggleFlip)
        return cardDiv
    }
}