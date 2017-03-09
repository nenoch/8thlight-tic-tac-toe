function Game(playerO, playerX) {
  this._playerO = playerO;
  this._playerX = playerX;
  this._fields = ['A1','A2','A3','B1','B2','B3','C1','C2','C3'];
}

Game.prototype.claimField = function(field) {
  if (this._fields.includes(field)) {
    var index = this._fields.indexOf(field);
    this._fields.splice(index, 1);
    this._playerO.markedFields.push(field);
  }
  else {
    console.log("Field Not Available! Claim a different one!")
  }

};
