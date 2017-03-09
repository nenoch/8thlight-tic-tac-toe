describe("Game", function() {

  beforeEach(function() {
    playerO = new Player();
    playerX = new Player();
    game = new Game(playerO, playerX);
  });

  describe("at start", function() {

    it("has two players", function() {
      expect(game._playerO).toEqual(jasmine.any(Player));
      expect(game._playerX).toEqual(jasmine.any(Player));
    });

  });

  describe("#claimField", function(){

    it("allows a player to claim a field", function(){
      game.claimField('A1');
      expect(game._playerO.markedFields).toContain('A1');
      expect(game._fields).not.toContain('A1');

    });

    it("doesn't allows a player to claim a field if already taken", function(){
      game.claimField('A1');
      game.claimField('A1');
      expect(game._playerO.markedFields).toEqual(['A1']);
    });

  });


});
