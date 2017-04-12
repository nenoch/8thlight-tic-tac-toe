describe("Game", function() {

  beforeEach(function() {
    player1 = {
      name: "Mike",
      symbol: "X"
    };

    player2 = {
      name: "Alan",
      symbol: "O"
    };

    game = new Game(player1, player2);
  });

  describe("#firstMover", function(){

    it("allows the user to decide who moves first", function(){
      game.firstMover(player2);
      expect(game._currentPlayer).toEqual(player2);
    });

  });

  describe("#switchTurn", function(){

    it("allows players to play one at the time", function(){
      game.switchTurn();
      expect(game._isN1turn).toEqual(false);
    });

  });

  describe("#pickAfield", function() {

    it("allows the player to choose a field", function(){
      game.pickAfield(2)
      expect(game._currentBoard[2]).toEqual('X');
    });

    it("prevents a field to be selected twice during the game", function(){
      spyOn(window, 'alert');
      game.pickAfield(2)
      game.pickAfield(2)
      expect(window.alert).toHaveBeenCalledWith('You can\'t pick this field. Try with an empty one.');
    });

  });

  describe("#gameOver", function() {

    it("declare that a game is over when all fields are taken", function(){
      game._currentBoard = ['X','O','X','O','X','O','X','O','X'];
      expect(game.gameOver()).toEqual('GAME OVER. Thanks for playing!');
    });

    it("doesn't declare that a game is over when fields are still available", function(){
      game._currentBoard = ['X','X',null,'O','X','O','X','O','X'];
      expect(game.gameOver()).not.toBeTruthy();
    });

  });

  describe("#declareWinner", function() {

    it("declare who's the winner", function(){
      game.pickAfield(0)
      game.pickAfield(4)
      game.pickAfield(1)
      game.pickAfield(8)
      game.pickAfield(2)
      expect(game.declareWinner()).toEqual('The Winner is Mike');
    });

  });


});
