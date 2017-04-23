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
  if (game.hasWinner() && game.winner != this) {
    console.log(game.winner);
    return -1;
  }
  else if (game.hasWinner() && game.winner == this){
    console.log(game.winner);
    return 1;
  }
  else if (game.isDraw()){
    console.log("Draw doesn't have winner", game.hasWinner());
    return 0;
  }
};

Computer.prototype.minimaxMove = function(game, depth = 0, movesScore = {}) {
var possibleMoves = this.possibleMoves(game);

  if (game.isDraw() || game.hasWinner()) {
    return this.score(game);
  }

  for(var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    game.pickAfield(move);
    movesScore[move] = this.minimaxMove(game, depth += 1, {});
    this.resetBoard(game, move);
  }

  console.log(movesScore);

  if (depth == possibleMoves.length) {
    return this.bestMove(movesScore);
  }

  if (game._currentPlayer == this) {
    return this.highestScore(movesScore);
  }
  else {
    return this.lowestScore(movesScore);
  }

};

Computer.prototype.highestScore = function(hashmap) {
  var scores = [];
  for (var k in hashmap){
    scores.push(hashmap[k]);
  }
  return Math.max(...scores);
};

Computer.prototype.lowestScore = function(hashmap) {
  var scores = [];
  for (var k in hashmap){
    scores.push(hashmap[k]);
  }
  return Math.min(...scores);
};

Computer.prototype.bestMove = function(hashmap) {
  var bestMove = Object.keys(hashmap).find(key => hashmap[key] === this.highestScore(hashmap));
  return parseInt(bestMove);
};

Computer.prototype.resetBoard = function(game, move) {
  game._currentBoard[move] = move;
  game.switchTurn();
};
