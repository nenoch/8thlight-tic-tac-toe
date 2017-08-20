function Computer(name, symbol) {
  this.name = name;
  this.symbol = symbol;
  // this.maxDepth = 1;
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

Computer.prototype.minimaxMove = function(game, depth = 0, alpha= -Infinity, beta= +Infinity, movesScore = {}) {
  var possibleMoves = this.possibleMoves(game);

  if (game.isDraw() || game.hasWinner()) {
    return this.score(game);
  }

  for(var i = 0; i < possibleMoves.length; i++) {
    var move = possibleMoves[i];
    game.makeAmove(move);
    var result = this.minimaxMove(game, depth+=1, alpha, beta, {});
    // movesScore[move] = this.minimaxMove(game, depth+=1, alpha, beta, {});
    this.resetBoard(game, move);
    if (game.currentPlayer === this) {
      if (result > alpha) {
        alpha = result;
        if (depth === 1) {
          return move;
        }
      } else if (alpha >= beta) {
      return alpha;
      }
      return alpha;
    // return this.highestScore(movesScore);
    } else {
      if (result < beta) {
        beta = result;
        if (depth === 1) {
          return move;
        }
      } else if (beta <= alpha) {
        return beta;
      }
      return beta;
      // return this.lowestScore(movesScore);
    }
  }

  // if (depth === possibleMoves.length) {
  //   return this.bestMove(movesScore);
  // }

  // if (game.currentPlayer === this) {
  //   return this.highestScore(movesScore);
  // }
  // else {
  //   return this.lowestScore(movesScore);
  // }

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
  console.log("switching called by minimax");
};
