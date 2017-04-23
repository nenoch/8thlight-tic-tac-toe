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

  xdescribe('#makeAMove', function(){

    it('selects from the interface the number of the field to be played by User', function(){
      var spyEvent = spyOnEvent('#1', 'click')
      $('#1').click()
      expect('click').toHaveBeenTriggeredOn('#1')
      expect(spyEvent).toHaveBeenTriggered()

      // var spyEvent = spyOnEvent('#1', 'click')
      // $('#1').click()
      // expect('click').toHaveBeenTriggeredOn('#1')
      // expect(user.makeAMove()).toEqual(2);
    });

  });


});
