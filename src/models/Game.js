function Game(playerX, playerO) {
  this.players = [playerX, playerO];
  this._currentBoard = [null,null,null,null,null,null,null,null,null];
  this._isXturn = true;
  this._currentPlayer = this.players[0];
  this.mark;
}

Game.prototype.switchTurn = function () {
  this._isXturn = !this._isXturn;
  var index = this.players.indexOf(this._currentPlayer) == 0 ? 1 : 0;
  this._currentPlayer = this.players[index];
};

Game.prototype.pickAfield = function(num) {
  var mark = this._isXturn ? 'X' : 'O';
  if (this._currentBoard[num] === null) {
    this._currentBoard[num] = mark;
    this.switchTurn();
  } else {
    alert('You can\'t pick this field. Try with an empty one.');
  }
};

Game.prototype.gameOver = function () {
  if (this._isGameOver()) {
    return 'GAME OVER. Thanks for playing!';
  }
};

Game.prototype._isGameOver = function () {
  for(var i = 0; i < this._currentBoard.length; i++) {
    if (this._currentBoard[i] == null) {
      return false;
    }
  }
  return true;
};

Game.prototype.declareWinner = function () {
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(var i = 0; i < winningCombos.length; i++) {

    var a = winningCombos[i][0];
    var b = winningCombos[i][1];
    var c = winningCombos[i][2];

    if (this._currentBoard[a] && this._currentBoard[a] == this._currentBoard[b] && this._currentBoard[b] == this._currentBoard[c]) {
      this.switchTurn()
      return 'The Winner is ' + this._currentPlayer.name;
    }
  }

};
