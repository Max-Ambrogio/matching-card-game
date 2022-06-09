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

var MatchingCardGame = /*#__PURE__*/function (_Game) {
  _inherits(MatchingCardGame, _Game);

  var _super = _createSuper(MatchingCardGame);

  function MatchingCardGame(selector) {
    var _this;

    _classCallCheck(this, MatchingCardGame);

    _this = _super.call(this, selector);

    _this.setup();

    return _this;
  }

  _createClass(MatchingCardGame, [{
    key: "setup",
    value: function setup() {
      var btn = this.gameEl.querySelector('.start');
      btn.addEventListener('click', this.startGame);
      var cardsChosen = [];
      var cardsChosenId = [];
    } //run create deck function 12 times but from the same array.

  }, {
    key: "startGame",
    value: function startGame() {
      for (var i = 0; i <= 11; i++) {
        var _deck = new Deck();

        var card = new Card();
        console.log(_deck.cards);

        var createDeck = _deck.cards[0].getCard();

        var grid = document.querySelector('.game-area');
        grid.append(createDeck);
      }
    } //add custom event that checks if card has been flipped over

  }, {
    key: "flipCard",
    value: function flipCard() {
      var cardId = this.getAttribute('data-value');
      cardsChosen.push(deck.cards[cardId].value);
      cardsChosenId.push(cardId);

      if (cardsChosen.length === 2) {
        this.checkMatch();
      }
    } //add function that checks if face card / # matches

  }, {
    key: "checkMatch",
    value: function checkMatch() {
      var cardOne = cardsChosenId[0];
      var cardTwo = cardsChosenId[1];

      if (cardOne[0] === cardTwo[1]) {
        alert('you got a match');
      }
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
//# sourceMappingURL=matchCard.js.map
