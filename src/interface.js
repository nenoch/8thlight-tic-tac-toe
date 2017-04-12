$(document).ready(function() {

  $("#form").submit(function(event){
    event.preventDefault();
    var player1name = $("input#player1-name").val();
    var player2name = $("input#player2-name").val();
    var player1symbol = $("input#player1-symbol").val();
    var player2symbol = $("input#player2-symbol").val();

    $("#welcome-message").text("It's Tic-Tac-Toe time for " + player1name + " and " + player2name + "!");
    $("#form").hide();

    var player1 = new User(player1name, player1symbol);
    var player2 = new User(player2name, player2symbol);

    var game = new Game(player1, player2);

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
