function Computer() {
  this._names = ["Dr.Know", "JARVIS", "Samantha", "Hal"];
  this._symbols = ["♜", "♟", "♞", "♛"];
  this.name = this._names[Math.floor (Math.random() * this._names.length)];
  this.symbol = this._symbols[Math.floor (Math.random() * this._symbols.length)];
}

Computer.prototype.possibleMoves = function(game) {
  return game._currentBoard.filter(function(el) {
    return Number.isInteger(el)
  });
};
