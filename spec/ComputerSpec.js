describe("Computer", function(){

  beforeEach(function(){
    spyOn(Math, 'random').and.returnValue(0.2);
    computer = new Computer();
  });

  describe('at initialization', function(){

    it('gets a random name', function(){
      expect(computer.name).toEqual('Dr.Know');
    });

    it('gets a random symbol', function(){
      expect(computer.symbol).toEqual("♜");
    });

  });

  describe('#possibleMoves', function(){

    it('returns an array of possible moves', function(){
      var game = {
        _currentBoard: ['X',1,'X',3,4,'O',6,7,8]
      };
      expect(computer.possibleMoves(game)).toEqual([1,3,4,6,7,8]);
    });

  });

  describe('#score', function(){

    beforeEach(function(){
      player2 = {
        name: "Alan",
        symbol: "O"
      };
      game = new Game(computer,player2)
    });


    it('assign a score of 1 to a game where Computer wins', function(){
      game._currentBoard = ['♜','♜','♜',3,4,'O','O',7,8];
      expect(computer.score(game)).toEqual(1);
    });

    it('assign a score of -1 to a game where opponent wins', function(){
      game._currentBoard = ['♜',1,'♜','♜',4,5,'O','O','O'];
      expect(computer.score(game)).toEqual(-1);
    });

    it('assign a score of 0 to a game ended in a draw', function(){
      game._currentBoard = ['♜','♜','O','O','O','♜','♜','O','♜'];
      expect(computer.score(game)).toEqual(0);
    });

  });

  describe('#minimaxMove', function(){

    beforeEach(function(){
      player2 = {
        name: "Alan",
        symbol: "O"
      };
      game = new Game(computer,player2)
    });

    it('calculates the move with the highest chances of victory', function(){
      game._currentBoard = ['♜','♜',2,3,'♜','O','O','O',8];
      expect(computer.minimaxMove(game)).toEqual(2);
    });

  });

  describe('#resetBoard', function(){

    beforeEach(function(){
      player2 = {
        name: "Alan",
        symbol: "O"
      };
      game = new Game(computer,player2)
    });

    it('cancels a given move', function(){
      game._currentBoard = ['♜','♜',2,3,4,'O','O',7,8];
      var move = 1;
      computer.resetBoard(game, move)
      expect(game._currentBoard).toEqual(['♜',1,2,3,4,'O','O',7,8]);
    });

  });

  describe('#bestScore', function(){

    it('returns the highest score of the moves\' hashmap', function(){
      var moves = {2:1, 3:-1, 5:0};
      expect(computer.bestScore(moves)).toEqual(1);
    });

  });

  describe('#bestMove', function(){

    it('returns the move corresponding to the highest score of the moves\' hashmap', function(){
      var moves = {2:1, 3:-1, 5:0};
      expect(computer.bestMove(moves)).toEqual(2);
    });

  });

});
