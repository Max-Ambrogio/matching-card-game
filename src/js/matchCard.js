class MatchingCardGame extends Game {

    static GAME_BOARD_SIZE = 12

    constructor(selector){
        super(selector)
        this.setup()
    }

    setup = () => {
        const btn = this.gameEl.querySelector('.start')
        btn.addEventListener('click',this.startGame)
        this.cardsChosen = []
        this.cardsChosenId = []

        // this.gameArea.addEventListener('click' , function(evt){
        //     // console.log('game-area clicked')
        //     // console.log('target', evt.target)
        //     //console.log('current target', evt.currentTarget)  
        //     const tgt = evt.target
        //     const slotId = tgt.parentElement.dataset.slot
        //     console.log('slot id', slotId)
        // })
        this.gameArea.addEventListener('click' , this.flipCard)

    }
   
    //run create deck function 12 times but from the same array.
    //wrapper on cards = data-slot="1"
    //set data attribute 
    //create div to assign the data slot to 
    //array = gameboard size draw card appends to the grid
    //update display cards loops through grid to append to dom
    startGame = () => {
        const deck = new Deck()
        this.grid = document.querySelector('.game-area')
        console.log(deck.cards)
        this.cardArray = []
        
        for(let i = 0; i < MatchingCardGame.GAME_BOARD_SIZE; i++){
            const card = deck.getNextCard()
            const cardData = document.createElement('div')
            cardData.setAttribute("data-slot", i)
            cardData.append(card.getCardElement())
            this.cardArray.push(card)
            this.grid.append(cardData)
            
        }
        console.log(this.cardArray)
    }

    //add custom event that checks if card has been flipped over
    // position in the grid [0-11] if [1 === 3] draw and replace cards
    flipCard = (evt) => {
        
        const tgt = evt.target
        const slotId = parseInt(tgt.parentElement.dataset.slot)
        console.log('slot id', slotId)
        
        const cardId = tgt.dataset.value
        // const cardLoc = tgt.getAttribute('data-slot')
        console.log(cardId)

        const card = this.cardArray[slotId]

        // console.log(cardLoc)
        const cardEvent = new CustomEvent('flip')
        //toggle class on the dom to show flipped
        const cardDiv = this.grid.querySelector(`[data-slot="${slotId}"]`)
        cardDiv.dispatchEvent(cardEvent)

        // this.cardArray
        this.cardsChosen.push(slotId)
        // cardsChosenId.push(cardId)
        if (this.cardsChosen.length === 2){
            this.checkMatch()
        }

        //if match = empty div slots add new 
        //if not then flip back over
    }

    //add function that checks if face card / # matches
    //slot ids
    checkMatch(){

        const slotOne = this.cardsChosen[0]
        const slotTwo = this.cardsChosen[1]

        const cardOne = this.cardArray[slotOne]
        const cardTwo = this.cardArray[slotTwo]

        console.log(cardOne)
        console.log(cardTwo)
    

        if(cardOne.value === cardTwo.value){
            alert('you got a match')
        } else {
            alert('no match')
        }

        //reset cards chosen
        //refresh()
    }




    //add function that updates the score and cards remaing in the scoreboard
    updateScore(){

    }




    //if all cards have been matched create a congratulations message and a reset button
    gameCompleted(){

    }


}