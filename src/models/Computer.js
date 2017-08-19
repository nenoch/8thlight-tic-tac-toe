function Computer(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

Computer.prototype.possibleMoves = function(game) {
  return game.currentBoard.filter(function(el) {
    return Number.isInteger(el)
  });
};

Computer.prototype.score = function(game) {
  if (game.hasWinner() && (game.declareWinner() !== this.name)) {
    return -1;
  }
  else if (game.hasWinner() && (game.declareWinner() === this.name)){
    return 1;
  }
  else if (game.isDraw()){
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
    game.makeAmove(move);
    movesScore[move] = this.minimaxMove(game, depth += 1, {});
    this.resetBoard(game, move);
  }

  if (depth === possibleMoves.length) {
    console.log("best");
    return this.bestMove(movesScore);
  }

  if (game.currentPlayer === this) {
    console.log("highest");
    return this.highestScore(movesScore);
  }
  else {
    console.log("lowest");
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
  game.currentBoard[move] = move;
  game.switchTurn();
};
