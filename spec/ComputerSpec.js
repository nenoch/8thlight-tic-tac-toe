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

  describe('#possibleMoves()', function(){

    it('returns an array of possible moves', function(){
      var game = {
        _currentBoard: ['X',1,'X',3,4,'O',6,7,8]
      };
      expect(computer.possibleMoves(game)).toEqual([1,3,4,6,7,8]);
    });

  });

});
