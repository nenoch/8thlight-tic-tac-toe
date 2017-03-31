$( document ).ready(function() {

  $("div#form").submit(function(event){
    event.preventDefault();
    var playerXname = $("input#playerX-name").val();
    var playerOname = $("input#playerO-name").val();

    var playerX = new Player(playerXname);
    var playerO = new Player(playerOname);
    var game = new Game(playerX, playerO);
  )};

)};
