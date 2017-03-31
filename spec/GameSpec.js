describe("Game", function() {

  beforeEach(function() {
    playerO = new Player();
    playerX = new Player();
    game = new Game(playerO, playerX);
  });

  describe("at start", function() {

    it("has two players", function() {
      expect(game._O).toEqual(jasmine.any(Player));
      expect(game._X).toEqual(jasmine.any(Player));
    });

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


});
