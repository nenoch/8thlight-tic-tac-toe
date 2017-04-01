$(document).ready(function() {

  $("#form").submit(function(event){
    event.preventDefault();
    var playerXname = $("input#playerX-name").val();
    var playerOname = $("input#playerO-name").val();

    $("h3#messages").text("Welcome " + playerXname + " and " + playerOname + "!");

    var playerX = new Player(playerXname);
    var playerO = new Player(playerOname);

    var game = new Game(playerX, playerO);

    $('#0').click(function(){
      game.pickAfield(0);
      $('#0').text(game._currentBoard[0]);
      game.declareWinner();
      game.gameOver();
    });

    $('#1').click(function(){
      game.pickAfield(1);
      $('#1').text(game._currentBoard[1]);
      game.declareWinner();
      game.gameOver();
    });

    $('#2').click(function(){
      game.pickAfield(2);
      $('#2').text(game._currentBoard[2]);
      game.declareWinner();
      game.gameOver();
    });

    $('#3').click(function(){
      game.pickAfield(3);
      $('#3').text(game._currentBoard[3]);
      game.declareWinner();
      game.gameOver();
    });

    $('#4').click(function(){
      game.pickAfield(4);
      $('#4').text(game._currentBoard[4]);
      game.declareWinner();
      game.gameOver();
    });

    $('#5').click(function(){
      game.pickAfield(5);
      $('#5').text(game._currentBoard[5]);
      game.declareWinner();
      game.gameOver();
    });

    $('#6').click(function(){
      game.pickAfield(6);
      $('#6').text(game._currentBoard[6]);
      game.declareWinner();
      game.gameOver();
    });

    $('#7').click(function(){
      game.pickAfield(7);
      $('#7').text(game._currentBoard[7]);
      game.declareWinner();
      game.gameOver();
    });

    $('#8').click(function(){
      game.pickAfield(8);
      $('#8').text(game._currentBoard[8]);
      game.declareWinner();
      game.gameOver();
    });

  });


});
