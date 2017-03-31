function Game(playerO, playerX) {
  this._O = playerO;
  this._X = playerX;
  this._currentBoard = [null,null,null,null,null,null,null,null,null];
  this._isXturn = true;
}

Game.prototype.switchTurn = function () {
  this._isXturn = !this._isXturn;
};

Game.prototype.pickAfield = function(num) {
  var mark = this._isXturn ? 'X' : 'O';
  if (this._currentBoard[num] === null) {
    this._currentBoard[num] = mark;
    this.switchTurn();
  } else {
    return 'You can\'t pick this field. Try with an empty one.';
  }
};
