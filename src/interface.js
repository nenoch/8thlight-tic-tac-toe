$(document).ready(function() {

  $("#form").submit(function(event){
    event.preventDefault();
    var playerXname = $("input#playerX-name").val();
    var playerOname = $("input#playerO-name").val();

    $("#welcome-message").text("It's Tic-Tac-Toe time for " + playerXname + " and " + playerOname + "!");
    $("#form").hide();

    var playerX = new Player(playerXname);
    var playerO = new Player(playerOname);

    var game = new Game(playerX, playerO);

    $(".field").click(function(){

      var num = Number($(this).attr('id'));
      var id = $(this).attr('id');

      game.pickAfield(num);
      $(this).text(game._currentBoard[num]);

      $("#end-of-game").text(game.declareWinner());
      $("#end-of-game").text(game.gameOver());
      $("#update").text(game._currentPlayer.name + "'s Turn!");
      var div = document.getElementById("end-of-game")
      if (div.innerHTML == game.gameOver() || game.declareWinner()) {
        $("#update").hide();
        $('.field').unbind('click');
        var button = '<button type="button" onclick="location.reload()" class="btn btn-primary btn-lg">Start a New Game</button>';
        $(button).insertAfter('#end-of-game')
      }
    });


  });


});
