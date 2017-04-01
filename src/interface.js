$(document).ready(function() {

  var playerX;
  var playerO;

  $("#form").submit(function(event){
    event.preventDefault();
    var playerXname = $("input#playerX-name").val();
    var playerOname = $("input#playerO-name").val();

    $("h3#messages").text("Welcome " + playerXname + " and " + playerOname + "!");

    playerX = new Player(playerXname);
    playerO = new Player(playerOname);

    var game = new Game(playerX, playerO);

    $('#0').click(function(){
      game.pickAfield(0);
      $('#0').text(game._currentBoard[0]);
    });

    $('#1').click(function(){
      game.pickAfield(1);
      $('#1').text(game._currentBoard[1]);
    });

    $('#2').click(function(){
      game.pickAfield(2);
      $('#2').text(game._currentBoard[2]);
    });

    $('#3').click(function(){
      game.pickAfield(3);
      $('#3').text(game._currentBoard[3]);
    });

    $('#4').click(function(){
      game.pickAfield(4);
      $('#4').text(game._currentBoard[4]);
    });

    $('#5').click(function(){
      game.pickAfield(5);
      $('#5').text(game._currentBoard[5]);
    });

    $('#6').click(function(){
      game.pickAfield(6);
      $('#6').text(game._currentBoard[6]);
    });

    $('#7').click(function(){
      game.pickAfield(7);
      $('#7').text(game._currentBoard[7]);
    });

    $('#8').click(function(){
      game.pickAfield(8);
      $('#8').text(game._currentBoard[8]);
    });

  });


});
