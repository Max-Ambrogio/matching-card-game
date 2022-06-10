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
      _this.cardsChosen = [];
      _this.cardsChosenId = []; // this.gameArea.addEventListener('click' , function(evt){
      //     // console.log('game-area clicked')
      //     // console.log('target', evt.target)
      //     //console.log('current target', evt.currentTarget)  
      //     const tgt = evt.target
      //     const slotId = tgt.parentElement.dataset.slot
      //     console.log('slot id', slotId)
      // })

      _this.gameArea.addEventListener('click', _this.flipCard);
    });

    _defineProperty(_assertThisInitialized(_this), "startGame", function () {
      var deck = new Deck();
      _this.grid = document.querySelector('.game-area');
      console.log(deck.cards);
      _this.cardArray = [];

      for (var i = 0; i < MatchingCardGame.GAME_BOARD_SIZE; i++) {
        var card = deck.getNextCard();
        var cardData = document.createElement('div');
        cardData.setAttribute("data-slot", i);
        cardData.append(card.getCardElement());

        _this.cardArray.push(card);

        _this.grid.append(cardData);
      }

      console.log(_this.cardArray);
    });

    _defineProperty(_assertThisInitialized(_this), "flipCard", function (evt) {
      var tgt = evt.target;
      var slotId = parseInt(tgt.parentElement.dataset.slot);
      console.log('slot id', slotId);
      var cardId = tgt.dataset.value; // const cardLoc = tgt.getAttribute('data-slot')

      console.log(cardId);
      var card = _this.cardArray[slotId]; // console.log(cardLoc)

      var cardEvent = new CustomEvent('flip'); //toggle class on the dom to show flipped

      var cardDiv = _this.grid.querySelector("[data-slot=\"".concat(slotId, "\"]"));

      cardDiv.dispatchEvent(cardEvent); // this.cardArray

      _this.cardsChosen.push(slotId); // cardsChosenId.push(cardId)


      if (_this.cardsChosen.length === 2) {
        _this.checkMatch();
      } //if match = empty div slots add new 
      //if not then flip back over

    });

    _this.setup();

    return _this;
  }

  _createClass(MatchingCardGame, [{
    key: "checkMatch",
    value: //add function that checks if face card / # matches
    //slot ids
    function checkMatch() {
      var slotOne = this.cardsChosen[0];
      var slotTwo = this.cardsChosen[1];
      var cardOne = this.cardArray[slotOne];
      var cardTwo = this.cardArray[slotTwo];
      console.log(cardOne);
      console.log(cardTwo);

      if (cardOne.value === cardTwo.value) {
        alert('you got a match');
      } else {
        alert('no match');
      } //reset cards chosen
      //refresh()

    } //add function that updates the score and cards remaing in the scoreboard

  }, {
    key: "updateScore",
    value: function updateScore() {} //if all cards have been matched create a congratulations message and a reset button

  }, {
    key: "gameCompleted",
    value: function gameCompleted() {}
  }]);

  return MatchingCardGame;
}(Game);

_defineProperty(MatchingCardGame, "GAME_BOARD_SIZE", 12);
//# sourceMappingURL=matchCard.js.map
