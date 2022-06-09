class MatchingCardGame extends Game {

    constructor(selector){
        super(selector)
        this.setup()
    }

    setup(){
        const btn = this.gameEl.querySelector('.start')
        btn.addEventListener('click',this.startGame)
        let cardsChosen = []
        let cardsChosenId = []
    }
   
    //run create deck function 12 times but from the same array.
    startGame(){
        for(let i = 0; i <= 11; i++){
            const deck = new Deck()
            const card = new Card()
            console.log(deck.cards)
            const createDeck = deck.cards[0].getCard()
            const grid = document.querySelector('.game-area')
            grid.append(createDeck)
        }
    }

    //add custom event that checks if card has been flipped over
    flipCard(){
        const cardId = this.getAttribute('data-value')
        cardsChosen.push(deck.cards[cardId].value)
        cardsChosenId.push(cardId)
        if (cardsChosen.length === 2){
            this.checkMatch()
        }
        
    }



    //add function that checks if face card / # matches
    checkMatch(){
        const cardOne = cardsChosenId[0]
        const cardTwo = cardsChosenId[1]
        if(cardOne[0] === cardTwo[1]){
            alert('you got a match')
        }
    }




    //add function that updates the score and cards remaing in the scoreboard
    updateScore(){

    }




    //if all cards have been matched create a congratulations message and a reset button
    gameCompleted(){

    }


}