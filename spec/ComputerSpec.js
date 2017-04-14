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

});
