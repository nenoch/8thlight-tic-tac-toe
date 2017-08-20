describe("Computer", function(){

  beforeEach(function(){
    computer = new Computer("Samantha", "♜");

    player = {
      name: "Alan",
      symbol: "O"
    };

    game = new Game(computer, player)
  });

  describe('#possibleMoves', function(){

    it('returns an array of possible moves', function(){
      game.currentBoard = ['♜',1,'♜','♜','O',5,'O',7,8,9,10,11,12,13,14,15];
      expect(computer.possibleMoves(game)).toEqual([1,5,7,8,9,10,11,12,13,14,15]);
    });

  });

  describe('#score', function(){

    it('assign a score of 1 to a game where Computer wins', function(){
      game.currentBoard = ['♜','♜','♜','♜','O','O','O',7,8,9,10,11,12,13,14,15];
      expect(computer.score(game)).toEqual(1);
    });

    it('assign a score of -1 to a game where opponent wins', function(){
      game.currentBoard = ['♜','♜','♜',3,'O','O','O','O',8,9,'♜',11,12,13,14,15];
      expect(computer.score(game)).toEqual(-1);
    });

    it('assign a score of 0 to a game ended in a draw', function(){
      game.currentBoard = ['♜','O','♜','♜','O','♜','O','O','♜','O','♜','♜','O','♜','O','O'];
      expect(computer.score(game)).toEqual(0);
    });

  });

  describe('#minimaxMove', function(){

    it('calculates the move with the highest chances of victory', function(){
      game.currentBoard = ['♜',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      // game.currentBoard = ['♜',1,'♜','♜','O','O','O',7,8,9,10,11,12,13,14,15];
      expect(computer.minimaxMove(game)).toEqual(1);
    });

  });

  describe('#resetBoard', function(){

    it('deletes a given move', function(){
      game.currentBoard = ['♜','♜',2,3,4,'O','O',7,8,9,10,11,12,13,14,15];
      var move = 1;
      computer.resetBoard(game, move)
      expect(game.currentBoard).toEqual(['♜',1,2,3,4,'O','O',7,8,9,10,11,12,13,14,15]);
    });

  });

  describe('#highestScore', function(){

    it('returns the highest score of the moves\' hashmap', function(){
      var moves = {2:1, 3:-1, 5:0};
      expect(computer.highestScore(moves)).toEqual(1);
    });

  });

  describe('#lowestScore', function(){

    it('returns the lowest score of the moves\' hashmap', function(){
      var moves = {2:1, 3:-1, 5:0};
      expect(computer.lowestScore(moves)).toEqual(-1);
    });

  });

  describe('#bestMove', function(){

    it('returns the move corresponding to the highest score of the moves\' hashmap', function(){
      var moves = {2:1, 3:-1, 5:0};
      expect(computer.bestMove(moves)).toEqual(2);
    });

  });

});
