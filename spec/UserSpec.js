describe("User", function() {

  beforeEach(function() {
    user = new User('Alan', '@');
  });

  describe('at initialization', function(){

    it('has a custom name', function(){
      expect(user.name).toEqual('Alan');
    });

    it('has a custom symbol', function(){
      expect(user.symbol).toEqual('@');
    });

  });


});
