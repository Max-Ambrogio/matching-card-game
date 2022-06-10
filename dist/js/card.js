"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(suit, value) {
    var _this = this;

    _classCallCheck(this, Card);

    _defineProperty(this, "getCardElement", function () {
      var cardDiv = document.createElement('div');
      cardDiv.innerText = _this.suit;
      cardDiv.classList.add('card', _this.color);
      cardDiv.dataset.value = "".concat(_this.value, " ").concat(_this.suit);
      _this.drawn = true;
      cardDiv.addEventListener('flip', _this.toggleFlip);
      return cardDiv;
    });

    this.suit = suit;
    this.value = value;
    this.drawn = false; // this.getCardElement()
  } //this.element = getCardElement pre generate all cards 
  // setup(){
  //     this.addEventListener('flip' , this.toggleFlip)
  // }


  _createClass(Card, [{
    key: "toggleFlip",
    value: function toggleFlip() {
      //adding or removing of css class
      //only flip if not flipped or make the game do it
      this.flip = true;
    } // if club or spade color = black, anything else color = red

  }, {
    key: "color",
    get: function get() {
      return this.suit === "♣" || this.suit === "♠" ? 'black' : 'red';
    } //creates card div and uses dataset to find the card value and suit

  }]);

  return Card;
}();

_defineProperty(Card, "SUITS", ["♦", "♥", "♣", "♠"]);

_defineProperty(Card, "VALUES", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"]);
//# sourceMappingURL=card.js.map
