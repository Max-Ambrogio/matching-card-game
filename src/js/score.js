class Score {
    constructor(element){
        this.statusEl = element
        this.setup()
    }



    setup(){

        this.matches = 0
        this.remainingCards = 40

        this.remainingScore = document.querySelector('.remaining')
        this.latestMatchScore = document.querySelector('.matches')

        document.addEventListener('score-update', this.updateScore)
    }
    
    updateScore = () => {
       
        this.matches++
        this.remainingCards--
        this.updateScoreBoard()
        this.checkForWinner()
    }

    checkForWinner(){
        let winner = null

        if(this.remainingCards == 34){
            winner = 'you won'
        }

        if(winner){
            const winEvt = new CustomEvent('game-over', {detail: {winner:winner}})
            document.dispatchEvent(winEvt)
        }
    }

    updateScoreBoard(){
        this.remainingScore.textContent = this.remainingCards + " cards remaining"
        this.latestMatchScore.textContent = this.matches + " Matches"

    }
}