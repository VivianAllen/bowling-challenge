'use strict';

function Frame () {
  this._rolls = [];
  this._isSpare = false;
  this._isStrike = false;
  this._n
};

Frame.prototype.roll = function(number) {
  this._rolls.push(number);
}

Frame.prototype.score = function() {
  return this._rolls.reduce(function (sum, x) { return sum + x }, 0);
}
