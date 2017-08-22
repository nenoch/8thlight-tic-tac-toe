function Computer(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  this.maxDepth = 6;
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
  else if (game.hasWinner() && (game.declareWinner() == this.name)){
    return 1;
  }
  else if (game.isDraw()){
    return 0;
  }
};

Computer.prototype.minimaxMove = function (game, depth = this.maxDepth, alpha = -Infinity, beta = +Infinity, computerPlaying = true){
  if (depth === 0 || game.isDraw() || game.hasWinner()) {
    console.log("terminal state");
    return;
  }

  var possibleMoves = this.possibleMoves(game);

  if (computerPlaying === true) {
    for(var i = 0; i < possibleMoves.length; i++){
      var move = possibleMoves[i];
      console.log("max move", move);
      // something has to happen to the game
      console.log("max player", game.currentPlayer)
      game.makeAmove(move);
      alpha = Math.max(alpha, this.minimaxMove(game, depth-1, alpha, beta, false));
      this.resetBoard(game, move);
      if (alpha >= beta) {
        console.log("max pruning");
        return;
        //break
      }
    }
    return alpha;
  }
  else {
    for(var i = 0; i < possibleMoves.length; i++){
      var move = possibleMoves[i];
      console.log("min move", move);
      // something has to happen to the game
      console.log("min player", game.currentPlayer)
      game.makeAmove(move);
      beta = Math.min(beta, this.minimaxMove(game, depth-1, alpha, beta, true));
      this.resetBoard(game, move);
      if (alpha >= beta) {
        console.log("min pruning");
        return;
        //break
      }
    }
    return beta;
  }
}

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
  console.log("switching called by minimax");
};
