"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MatchingCardGame = /*#__PURE__*/function (_Game) {
  _inherits(MatchingCardGame, _Game);

  var _super = _createSuper(MatchingCardGame);

  function MatchingCardGame(selector) {
    var _this;

    _classCallCheck(this, MatchingCardGame);

    _this = _super.call(this, selector);

    _defineProperty(_assertThisInitialized(_this), "setup", function () {
      var btn = _this.gameEl.querySelector('.start');

      btn.addEventListener('click', _this.startGame);
      _this.resultsEl = _this.gameEl.querySelector("#round-result");
      _this.cardsChosen = [];
      _this.cardsChosenId = [];
      _this.cardArray = [];
      _this.deck = new Deck();
      _this.grid = document.querySelector('.game-area');
      _this.deckPosition = document.querySelector('.deck');

      _this.gameArea.addEventListener('click', _this.flipCard);

      _this.createCardGrid();

      var scoreUpdate = _this.scoreBoardEl.querySelector('#scoreboard');

      new Score(scoreUpdate);
      document.addEventListener('game-over', _this.gameCompleted);
      _this.resetBtn = document.querySelector('.reset');
    });

    _defineProperty(_assertThisInitialized(_this), "startGame", function () {
      console.log(_this.deck.cards);
      console.log(_this.cardArray); //applicable to start game

      _this.grid.classList.add('show'); // gsap.from('.card', {
      //     opacity:0,
      //     y: -100,
      //     duration:1,
      // })

    });

    _defineProperty(_assertThisInitialized(_this), "flipCard", function (evt) {
      //switch this elemnts that areent used elsewhere
      var tgt = evt.target;
      var slotId = parseInt(tgt.parentElement.dataset.slot);
      console.log('slot id', slotId);
      var cardId = tgt.dataset.value;
      console.log(cardId);
      var card = _this.cardArray[slotId];
      console.log(card);
      var cardEvent = new CustomEvent('flip'); //toggle class on the dom to show flipped

      _this.cardDiv = _this.grid.querySelector("[data-slot=\"".concat(slotId, "\"]"));

      var selectdCard = _this.cardDiv.querySelector('.card');

      console.log(_this.cardDiv);

      _this.cardDiv.addEventListener('flip', function () {
        selectdCard.classList.toggle('toggleCard');
      });

      _this.cardDiv.dispatchEvent(cardEvent);

      _this.cardsChosen.push(slotId);

      if (_this.cardsChosen.length === 2) {
        setTimeout(function () {
          _this.checkMatch();
        }, 500);
      } //if match = empty div slots add new 
      //if not then flip back over

    });

    _defineProperty(_assertThisInitialized(_this), "gameCompleted", function (evt) {
      var winnner = evt.detail.winner;
      _this.resultsEl.textContent = "You've Matched all the cards!";

      _this.resetBtn.classList.add('display');

      _this.resetBtn.addEventListener('click', _this.restart);
    });

    _this.setup(); // this.createCard()


    return _this;
  }

  _createClass(MatchingCardGame, [{
    key: "createCardGrid",
    value: function createCardGrid() {
      this.grid.classList.add('hide'); //seperate creating the slots from the card creation

      for (var i = 0; i < MatchingCardGame.GAME_BOARD_SIZE; i++) {
        var cardData = document.createElement('div'); // const cardBack = document.createElement('div')
        // cardBack.classList.add('back')

        this.card = this.deck.getNextCard();
        cardData.append(this.card.getCardElement()); // cardData.append(cardBack)

        cardData.setAttribute("data-slot", i);
        this.cardArray.push(this.card);
        this.grid.append(cardData);
      }

      console.log(this.cardArray);
    } //add custom event that checks if card has been flipped over
    // position in the grid [0-11] if [1 === 3] draw and replace cards

  }, {
    key: "checkMatch",
    value: //add function that checks if face card / # matches
    //slot ids
    function checkMatch() {
      this.slotOne = this.cardsChosen[0];
      this.slotTwo = this.cardsChosen[1];
      this.cardOne = this.cardArray[this.slotOne];
      this.cardTwo = this.cardArray[this.slotTwo];
      console.log(this.cardOne);
      console.log(this.cardTwo);

      if (this.cardOne.value === this.cardTwo.value) {
        alert('you got a match');
        this.removeCards();
        this.updateScore();
      } else {
        alert('no match');
        var unFlip = this.grid.querySelectorAll('.toggleCard');
        unFlip.forEach(function (unFlip) {
          unFlip.classList.remove('toggleCard');
        }); // unFlip.forEach(function(item){
        //     item.addEventListener('click',function(){
        //         unFlip.forEach(function(unFlip){
        //             unFlip.classList.remove('toggleCard')
        //         })
        //     })
        // })

        console.log(unFlip);
        this.refresh();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.cardsChosen = [];
      this.cardsChosenId = [];
      console.log(this.cardsChosen);
      console.log(this.cardsChosenId);
    } // this.firstCard.classList.remove('show')
    //set interval to remove from dom
    //get slot for each 
    //get new card
    //animate removeal \
    //grab two new cards and append 
    //first slotid = this.cardsChosen[0]
    //array

  }, {
    key: "removeCards",
    value: function removeCards() {
      var _this2 = this;

      console.log(this.cardsChosen);
      var newCardOne = this.deck.getNextCard();
      var newCardOneEl = newCardOne.getCardElement();
      var newCardTwo = this.deck.getNextCard();
      var newCardTwoEl = newCardTwo.getCardElement();
      var firstCard = this.grid.querySelector("[data-slot=\"".concat(this.cardsChosen[0], "\"]"));
      var secondCard = this.grid.querySelector("[data-slot=\"".concat(this.cardsChosen[1], "\"]")); // firstCard.classList.add('remove')
      // secondCard.classList.add('remove')

      var removeFirstCard = firstCard.firstChild.remove();
      var removeFirstSlot = this.cardArray.splice(this.slotOne, 1, newCardOne);
      var removeSecondCard = secondCard.firstChild.remove();
      var removeSecondSlot = this.cardArray.splice(this.slotTwo, 1, newCardTwo);
      setTimeout(function () {
        // firstCard.classList.remove('remove')
        firstCard.append(newCardOneEl);
        console.log(firstCard);
      }, 1000);
      setTimeout(function () {
        // secondCard.classList.remove('remove')
        secondCard.append(newCardTwoEl);
        console.log(secondCard);
        console.log(_this2.cardArray);
      }, 1000);
      this.refresh();
      this.updateScore();
    } //add function that updates the score and cards remaing in the scoreboard

  }, {
    key: "updateScore",
    value: function updateScore() {
      console.log('hi');
      var scoreEvt = new CustomEvent('score-update');
      document.dispatchEvent(scoreEvt);
    }
  }, {
    key: "restart",
    value: function restart() {
      window.location.reload();
    } //if all cards have been matched create a congratulations message and a reset button

  }]);

  return MatchingCardGame;
}(Game);

_defineProperty(MatchingCardGame, "GAME_BOARD_SIZE", 12);
//# sourceMappingURL=matchCard.js.map
