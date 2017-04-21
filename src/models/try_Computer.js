function Computer() {
  this._names = ["Dr.Know", "JARVIS", "Samantha", "Hal"];
  this._symbols = ["♜", "♟", "♞", "♛"];
  this.name = this._names[Math.floor (Math.random() * this._names.length)];
  this.symbol = this._symbols[Math.floor (Math.random() * this._symbols.length)];
}

Computer.prototype.possibleMoves = function(game) {
  return game._currentBoard.filter(function(el) {
    return Number.isInteger(el)
  });
};

Computer.prototype.score = function(game) {

  if (game._hasWinner() && game.winner.name != this.name) {
    return -1;
  }
  else if (game._hasWinner() && game.winner.name == this.name){
    return 1;
  }
  else if (game._isGameOver()){
    return 0;
  }
  // if (game._hasWinner() && game.winner.name == this.name){
  //   console.log(this.name);
  //   console.log(game.winner.name == this.name);
  //   console.log("PC wins",game._hasWinner());
  //   console.log("PC wins",game.winner.name);
  //   return 1;
  // }
  // else if (game._hasWinner() && game.winner.name != this.name){
  //   console.log("player wins",game._hasWinner());
  //   console.log("player wins",game.winner.name);
  //   return -1;
  // }
  // else if (!game._hasWinner()) {
  //   console.log("No winner", !game._hasWinner());
  //   return 0;
  // }
};

// Computer.prototype.score = function(game) {
//   if (game.winner == undefined) {
//     console.log("No winner", game._hasWinner());
//     return 0;
//   }
//   else if (game.winner.name == this.name){
//     console.log("PC wins",game._hasWinner());
//     return 1;
//   }
//   else if (game.winner.name != this.name){
//     console.log("human wins",game._hasWinner());
//     return -1;
//   }
// };

Computer.prototype.minimaxMove = function(game) {
  var possibleMoves = this.possibleMoves(game);

  if (game._hasWinner() && game.winner.name != this.name) {
    return {score:-10};
  }
  else if (game._hasWinner() && game.winner.name == this.name){
    return {score:10};
	}
  else if (game._isGameOver()){
  	return {score:0};
  }

  var moves = [];

  for(var i = 0; i < possibleMoves.length; i++) {
    var move = {};
    move.index = game._currentBoard[possibleMoves[i]];
    game.pickAfield(possibleMoves[i]);
    console.log(move);
    console.log(game._currentBoard);
    var result = this.minimaxMove(game);
    move.score = result.score;
    game._currentBoard[possibleMoves[i]] = move.index;
    moves.push(move);
  }

  console.log(moves);


};

Computer.prototype.resetBoard = function(game, move) {
  game._currentBoard[move] = move;
  game.switchTurn();
};
