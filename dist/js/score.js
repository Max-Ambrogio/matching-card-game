"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Score = /*#__PURE__*/function () {
  function Score(element) {
    var _this = this;

    _classCallCheck(this, Score);

    _defineProperty(this, "updateScore", function () {
      _this.matches++;
      _this.remainingCards--;

      _this.updateScoreBoard();

      _this.checkForWinner();
    });

    this.statusEl = element;
    this.setup();
  }

  _createClass(Score, [{
    key: "setup",
    value: function setup() {
      this.matches = 0;
      this.remainingCards = 40;
      this.remainingScore = document.querySelector('.remaining');
      this.latestMatchScore = document.querySelector('.matches');
      document.addEventListener('score-update', this.updateScore);
    }
  }, {
    key: "checkForWinner",
    value: function checkForWinner() {
      var winner = null;

      if (this.remainingCards == 34) {
        winner = 'you won';
      }

      if (winner) {
        var winEvt = new CustomEvent('game-over', {
          detail: {
            winner: winner
          }
        });
        document.dispatchEvent(winEvt);
      }
    }
  }, {
    key: "updateScoreBoard",
    value: function updateScoreBoard() {
      this.remainingScore.textContent = this.remainingCards + " cards remaining";
      this.latestMatchScore.textContent = this.matches + " Matches";
    }
  }]);

  return Score;
}();
//# sourceMappingURL=score.js.map
