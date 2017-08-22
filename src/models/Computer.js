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

Computer.prototype.score = function(game, depth) {
  if (game.hasWinner() && (game.declareWinner() !== this.name)) {
    return -1000/depth;
  }
  else if (game.hasWinner() && (game.declareWinner() == this.name)){
    return 1000/depth;
  }
  else if (game.isDraw()){
    return 0;
  }
};

Computer.prototype.minimaxMove = function(game, depth = this.maxDepth, alpha = -Infinity, beta = +Infinity, computerPlaying = true){
  if (depth === 0 ) {
    console.log("terminal state");
    return this.score(game, depth);
  }

  var possibleMoves = this.possibleMoves(game);

  if (computerPlaying) {
    console.log("cp", computerPlaying);
    var bestValue = -1000;

    for(var i = 0; i < possibleMoves.length; i++){
      var move = possibleMoves[i];
      game.makeAmove(move);
      // minimaxValue = this.minimaxMove(game, depth-1, alpha, beta, false);
      bestValue = Math.max(bestValue, this.minimaxMove(game, depth-1, alpha, beta, !computerPlaying));
      this.resetBoard(game, move);
      alpha = Math.max(alpha, bestValue);
      console.log("max alpha", alpha);
      if (alpha >= beta) {
        console.log("max pruning");
        return bestValue;
        //break
      }
    }
    console.log('max bestValue', bestValue);
    return bestValue;
  }
  else {
    var bestValue = 1000;

    for(var i = 0; i < possibleMoves.length; i++){
      var move = possibleMoves[i];
      game.makeAmove(move);
      // var minimaxValue = this.minimaxMove(game, depth-1, alpha, beta, true);
      bestValue = Math.min(bestValue, this.minimaxMove(game, depth-1, alpha, beta, !computerPlaying));
      this.resetBoard(game, move);
      beta = Math.min(beta, bestValue);
      console.log("min beta", beta);
      if (alpha >= beta) {
        console.log("min pruning");
        return bestValue;
        //break
      }
    }
    console.log('min bestValue', bestValue);
    return bestValue;
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
