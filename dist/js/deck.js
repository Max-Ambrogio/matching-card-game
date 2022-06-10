"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Deck = /*#__PURE__*/function () {
  function Deck() {
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.newDeck();

    _classCallCheck(this, Deck);

    this.cards = cards;
    this.shuffle();
    this.drawnCount = 0;
  } //flattens suit and value array into 52 card deck


  _createClass(Deck, [{
    key: "newDeck",
    value: function newDeck() {
      // const card = new Card()
      // console.log(card.SUITS)
      // console.log(card.VALUES)
      return Card.SUITS.flatMap(function (suit) {
        return Card.VALUES.map(function (value) {
          return new Card(suit, value);
        });
      });
    }
  }, {
    key: "getNextCard",
    value: function getNextCard() {
      var card = this.cards[this.drawnCount];
      card.drawn = true;
      this.drawnCount++;
      return card;
    }
  }, {
    key: "getCard",
    value: function getCard() {//
    } //specify static elements
    //locates starting position in array, randomizes arrays position

  }, {
    key: "shuffle",
    value: function shuffle() {
      var numberOfCards = this.cards.length;

      for (var i = 0; i < numberOfCards; i++) {
        var random = Math.floor(Math.random() * numberOfCards);
        var shuffledDeck = this.cards[i];
        this.cards[i] = this.cards[random];
        this.cards[random] = shuffledDeck;
      }
    }
  }]);

  return Deck;
}();
//# sourceMappingURL=deck.js.map
