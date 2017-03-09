describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  describe("at start", function() {

    it("should initialize two players", function() {
      expect(game.playerO).toEqual(jasmine.any(Player));
      expect(game.playerX).toEqual(jasmine.any(Player));
    });

  });

});
