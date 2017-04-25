function User(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

User.prototype.pickAfield = function() {
      return this.id;
};
