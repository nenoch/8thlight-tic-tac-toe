function User(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

User.prototype.pickAfield = function() {
  // return Number($(this).attr('id'));
  // $(this).text(game.currentBoard[num]);
  return 3;

};
