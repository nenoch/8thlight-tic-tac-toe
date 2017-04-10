$(document).ready(function() {


  $("#form").submit(function(event){
    event.preventDefault();
    var playerXname = $("input#playerX-name").val();
    var playerOname = $("input#playerO-name").val();

    $("h2#messages").text("It's tic-tac-toe time " + playerXname + " and " + playerOname + "!");
    $("#form").hide();

    var playerX = new Player(playerXname);
    var playerO = new Player(playerOname);

    var game = new Game(playerX, playerO);

    $('#0').click(function(){
      game.pickAfield(0);
      $('#0').text(game._currentBoard[0]);
      $("#end-of-game").text(game.declareWinner());
      $("#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
      var div = document.getElementById("end-of-game")
      if (div.innerHTML == game.gameOver() || game.declareWinner()) {
        $('.field').unbind("click");
      }
    });

    // $('#end-of-game').bind('contentchanged', function() {
    //   alert('woo');
    // });

    var div = document.getElementById("end-of-game")
    if (div.innerHTML == game.gameOver() || game.declareWinner()) {
      alert("wow!");
    }

    $('#1').click(function(){
      game.pickAfield(1);
      $('#1').text(game._currentBoard[1]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#2').click(function(){
      game.pickAfield(2);
      $('#2').text(game._currentBoard[2]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#3').click(function(){
      game.pickAfield(3);
      $('#3').text(game._currentBoard[3]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#4').click(function(){
      game.pickAfield(4);
      $('#4').text(game._currentBoard[4]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#5').click(function(){
      game.pickAfield(5);
      $('#5').text(game._currentBoard[5]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#6').click(function(){
      game.pickAfield(6);
      $('#6').text(game._currentBoard[6]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#7').click(function(){
      game.pickAfield(7);
      $('#7').text(game._currentBoard[7]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });

    $('#8').click(function(){
      game.pickAfield(8);
      $('#8').text(game._currentBoard[8]);
      $("h2#end-of-game").text(game.declareWinner());
      $("h2#end-of-game").text(game.gameOver());
      $("h4#update").text("It is " + game._currentPlayer.name + "'s turn");
    });



  });


});
