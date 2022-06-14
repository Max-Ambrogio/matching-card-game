class MatchingCardGame extends Game {

    static GAME_BOARD_SIZE = 12

    constructor(selector){
        super(selector)
        this.setup()
        // this.createCard()
    }

    setup = () => {
        const btn = this.gameEl.querySelector('.start')
        btn.addEventListener('click',this.startGame)

        this.resultsEl = this.gameEl.querySelector("#round-result")

        this.cardsChosen = []
        this.cardsChosenId = []
        this.cardArray = []

        this.deck = new Deck()
        this.grid = document.querySelector('.game-area')
        this.deckPosition = document.querySelector('.deck')

        this.gameArea.addEventListener('click' , this.flipCard)

        this.createCardGrid()
        
        const scoreUpdate = this.scoreBoardEl.querySelector('#scoreboard')
        new Score(scoreUpdate)

        document.addEventListener('game-over', this.gameCompleted)

        this.resetBtn = document.querySelector('.reset')

    }
   
    //run create deck function 12 times but from the same array.
    //wrapper on cards = data-slot="1"
    //set data attribute 
    //create div to assign the data slot to 
    //array = gameboard size draw card appends to the grid
    //update display cards loops through grid to append to dom


    //seperate methods 
   
    startGame = () => {
        console.log(this.deck.cards)
        console.log(this.cardArray)
   
        //applicable to start game
        this.grid.classList.add('show')
        
        // gsap.from('.card', {
        //     opacity:0,
        //     y: -100,
        //     duration:1,
        // })
    }

    createCardGrid(){
        this.grid.classList.add('hide')
       
        //seperate creating the slots from the card creation
        for(let i = 0; i < MatchingCardGame.GAME_BOARD_SIZE; i++){
            const cardData = document.createElement('div')
            // const cardBack = document.createElement('div')
            // cardBack.classList.add('back')
            this.card = this.deck.getNextCard()
            cardData.append(this.card.getCardElement())
            // cardData.append(cardBack)
            cardData.setAttribute("data-slot", i)
            this.cardArray.push(this.card)
            this.grid.append(cardData)
       
        }
        console.log(this.cardArray)
    }
    

    //add custom event that checks if card has been flipped over
    // position in the grid [0-11] if [1 === 3] draw and replace cards
    flipCard = (evt) => {
        //switch this elemnts that areent used elsewhere
        const tgt = evt.target
        const slotId = parseInt(tgt.parentElement.dataset.slot)
        console.log('slot id', slotId)
        const cardId = tgt.dataset.value
        console.log(cardId)

        

        const card = this.cardArray[slotId]
        console.log(card)

        const cardEvent = new CustomEvent('flip')
        
        //toggle class on the dom to show flipped
        this.cardDiv = this.grid.querySelector(`[data-slot="${slotId}"]`)
        const selectdCard = this.cardDiv.querySelector('.card')
        console.log(this.cardDiv)
        this.cardDiv.addEventListener('flip', function(){
            selectdCard.classList.toggle('toggleCard')
        })
        this.cardDiv.dispatchEvent(cardEvent)
        this.cardsChosen.push(slotId)

        if (this.cardsChosen.length === 2){
            setTimeout(() => {
                this.checkMatch()
            }, 500)
        }

        //if match = empty div slots add new 
        //if not then flip back over
    }

    




    //add function that checks if face card / # matches
    //slot ids
    checkMatch(){

        

        this.slotOne = this.cardsChosen[0]
        this.slotTwo = this.cardsChosen[1]

        this.cardOne = this.cardArray[this.slotOne]
        this.cardTwo = this.cardArray[this.slotTwo]

        console.log(this.cardOne)
        console.log(this.cardTwo)
    
        if(this.cardOne.value === this.cardTwo.value){
            alert('you got a match')
            this.removeCards()
            this.updateScore()
        } else {
            alert('no match')   
            const unFlip = this.grid.querySelectorAll('.toggleCard')

            unFlip.forEach(function(unFlip){
                unFlip.classList.remove('toggleCard')
            })
    
            // unFlip.forEach(function(item){
            //     item.addEventListener('click',function(){
            //         unFlip.forEach(function(unFlip){
            //             unFlip.classList.remove('toggleCard')
            //         })
            //     })
            // })
            
            console.log(unFlip)
            this.refresh()
        }

    }

    refresh(){
        this.cardsChosen = []
        this.cardsChosenId = []

        console.log(this.cardsChosen)
        console.log(this.cardsChosenId)
    }

    // this.firstCard.classList.remove('show')
    //set interval to remove from dom
    //get slot for each 
    //get new card
    //animate removeal \
    //grab two new cards and append 
    //first slotid = this.cardsChosen[0]
    //array

    removeCards(){
        console.log(this.cardsChosen)

        const newCardOne = this.deck.getNextCard()
        const newCardOneEl = newCardOne.getCardElement()
        
        const newCardTwo = this.deck.getNextCard()
        const newCardTwoEl = newCardTwo.getCardElement()

        const firstCard = this.grid.querySelector(`[data-slot="${this.cardsChosen[0]}"]`)
        const secondCard = this.grid.querySelector(`[data-slot="${this.cardsChosen[1]}"]`)
        
        // firstCard.classList.add('remove')
        // secondCard.classList.add('remove')

        const removeFirstCard = firstCard.firstChild.remove()
        const removeFirstSlot = this.cardArray.splice(this.slotOne , 1 , newCardOne)
        const removeSecondCard = secondCard.firstChild.remove()
        const removeSecondSlot = this.cardArray.splice(this.slotTwo , 1 , newCardTwo)

        setTimeout(() => {
            // firstCard.classList.remove('remove')
            firstCard.append(newCardOneEl)
            console.log(firstCard)
        },1000)
        

        setTimeout(() => {
            // secondCard.classList.remove('remove')
            secondCard.append(newCardTwoEl)
            console.log(secondCard)
            console.log(this.cardArray)
        },1000)

        this.refresh()
        this.updateScore()
    }


    //add function that updates the score and cards remaing in the scoreboard
    updateScore(){
        console.log('hi')
        const scoreEvt = new CustomEvent('score-update')
        document.dispatchEvent(scoreEvt)
        
    }


    restart(){
        window.location.reload()
    }

    //if all cards have been matched create a congratulations message and a reset button
    gameCompleted = (evt) => {
        const winnner = evt.detail.winner
        this.resultsEl.textContent = "You've Matched all the cards!"
        this.resetBtn.classList.add('display')
        this.resetBtn.addEventListener('click', this.restart)
        

    }


}