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

  describe("at initialization", function(){

    it("has 2 players", function(){
      expect(game.players).toEqual([player1, player2]);
    });

    it("has a 9 digits board", function(){
      expect(game.currentBoard).toEqual([0,1,2,3,4,5,6,7,8]);
    });

    it("has current player set to the first player", function(){
      expect(game.players[0]).toEqual(game.currentPlayer);
    });

  });

  describe("#firstMover", function(){

    it("allows the user to decide who moves first", function(){
      game.firstMover(player2);
      expect(game.currentPlayer).toEqual(player2);
    });

  });

  describe("#switchTurn", function(){

    it("allows players to play one at the time", function(){
      game.switchTurn()
      expect(game.currentPlayer.name).toEqual('Alan');
    });

  });

  describe("#makeAmove", function() {

    it("allows the player to choose a field", function(){
      game.makeAmove(2);
      expect(game.currentBoard[2]).toEqual('X');
    });

    it("prevents a field to be selected twice during the game", function(){
      spyOn(window, 'alert');
      game.makeAmove(2);
      game.makeAmove(2);
      expect(window.alert).toHaveBeenCalledWith('You can\'t pick this field. Try with an empty one.');
    });

  });

  describe("#isDraw", function(){

    it("is true when there are no available fields", function(){
      game.currentBoard = ['X','X','O','O','O','X','X','O','X'];
      expect(game.isDraw()).toEqual(true);
    });

    it("is false when fields are still available", function(){
      game.currentBoard = ['X',1,2,'O',4, 5,'X','O','X'];
      expect(game.isDraw()).toEqual(false);
    });

    it("is false when there is a winner", function(){
      game.currentBoard = ['X','X','X','X','O','O','O','X','O'];
      expect(game.isDraw()).toEqual(false);
    });

  });

  describe("#hasWinner", function(){

    it("is false when there is no winner", function(){
      game.currentBoard = ['X','X','O','O','O','X','X','O','X'];
      expect(game.hasWinner()).toEqual(false);
    });

    it("is true when there is a winner", function(){
      game.currentBoard = ['X','X','X',3,'O',5,6,7,'O'];
      expect(game.hasWinner()).toEqual(true);
    });

    it("is true when there is a winner and all fields are taken", function(){
      game.currentBoard = ['X','X','X','X','O','O','O','X','O'];
      expect(game.hasWinner()).toEqual(true);
    });

  });

  describe("#declareWinner", function(){

    it("declares the name of the winner if called when hasWinner() == true", function(){
      game.currentBoard = ['X','X','X','X','O','O','O','X','O'];
      expect(game.declareWinner()).toEqual("Alan");
    });

  });

});
