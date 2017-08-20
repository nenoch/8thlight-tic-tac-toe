function Game(player1, player2) {
  this.players = [player1, player2];
  this.currentBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  // this.currentBoard = ['♛','♛',2,'♛','O','O','O',7,8,9,10,11,12,13,14,15];
  this.currentPlayer = this.players[0];
  this.winner;
}

Game.prototype.firstMover = function(player) {
  if (this.players[0] !== player) {
    var first = this.players.pop();
    this.players.splice(0,0, first);
  };
  this.currentPlayer = this.players[0];
};

Game.prototype.switchTurn = function() {
  var index = this.players.indexOf(this.currentPlayer) === 0 ? 1 : 0;
  this.currentPlayer = this.players[index];
};

Game.prototype.makeAmove = function(num) {
  var mark = this.currentPlayer.symbol;
  if (this.currentBoard[num] == num) {
    this.currentBoard[num] = mark;
    if (!(this.hasWinner() || this.isDraw())) {
      this.switchTurn();
    }
  } else {
    alert('You can\'t pick this field. Try with an empty one.');
  }
};

Game.prototype.isDraw = function() {
  if (!this.hasWinner()) {
    for(var i = 0; i < this.currentBoard.length; i++) {
      if (this.currentBoard[i] == i) {
        return false;
      }
    }
    return true;
  }
  return false;
};

Game.prototype.hasWinner = function() {
  var winningCombos = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];

  for(var i = 0; i < winningCombos.length; i++) {

    var a = winningCombos[i][0];
    var b = winningCombos[i][1];
    var c = winningCombos[i][2];
    var d = winningCombos[i][3];

    if (this.currentBoard[a] &&
      this.currentBoard[a] === this.currentBoard[b] &&
      this.currentBoard[b] === this.currentBoard[c] &&
      this.currentBoard[b] === this.currentBoard[d]) {
      this.winner = this.setWinner(this.currentBoard[a]);
      return true;
    }
  }
  return false;
};

Game.prototype.setWinner = function(symbol) {
  if (this.players[0].symbol === symbol) {
    return this.players[0];
  }
  else {
    return this.players[1];
  }
};

Game.prototype.declareWinner = function () {
  if (this.hasWinner()) {
    return this.winner.name;
  }
  return undefined;
};
