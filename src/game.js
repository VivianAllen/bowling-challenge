'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor;
  this._frames = [new this._frameConstructor];
  this._nFrames = 1;
  this._frames[0].nSet(1);
};

//getters
Game.prototype.frames = function(){ return this._frames };
Game.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.score()
  }, 0);
}

//setters
Game.prototype.roll = function(number) {
  if (typeof this._frames.slice(-1)[0].roll(number) === "string") {
    this.nextFrame()
  };
};
Game.prototype.nextFrame = function() {
  this._frames.push(new this._frameConstructor);
  this._nFrames++;
  this._frames.slice(-1)[0].nSet(this._nFrames);
};

// checkers
Game.prototype.isOver = function() { return this.frames().length >= 10 }
