class Game {
    constructor(selector){
        this.gameEl = document.querySelector(selector)
        this.gameBoardEl = this.gameEl.querySelector("#gameboard")
        this.scoreBoardEl = this.gameEl.querySelector("#scoreboard")
        this.gameArea = this.gameEl.querySelector('.game-area')
    }
}