describe("Game", function() {

  beforeEach(function() {
    playerX = new Player('Mike');
    playerO = new Player('Alan');
    game = new Game(playerX, playerO);
  });

  describe("#switchTurn", function(){

    it("allows players to play one at the time", function(){
      game.switchTurn();
      expect(game._isXturn).toEqual(false);
    });

  });

  describe("#pickAfield", function() {

    it("allows the player to choose a field", function(){
      game.pickAfield(2)
      expect(game._currentBoard[2]).toEqual('X');
    });

    it("prevents a field to be selected twice during the game", function(){
      game.pickAfield(2)
      expect(game.pickAfield(2)).toEqual('You can\'t pick this field. Try with an empty one.');
    });

  });

  describe("#gameOver", function() {

    it("declare that a game is over when all fields are taken", function(){
      game._currentBoard = ['X','O','X','O','X','O','X','O','X'];
      expect(game.gameOver()).toEqual('GAME OVER. Thanks for playing!');
    });

    it("doesn't declare that a game is over when fields are still available", function(){
      game._currentBoard = ['X','X',null,'O','X','O','X','O','X'];
      expect(game.gameOver()).toBe(false);
    });

  });

  describe("#declareWinner", function() {

    it("declare who's the winner", function(){
      game._currentBoard = [null,null,null,'X','X','X',null,null,null];
      expect(game.declareWinner()).toEqual('The Winner is Mike');
    });

  });


});
