$(document).ready(function() {
  $("#board").hide();


  $("#start-form").submit(function(event){
    event.preventDefault();
    var gameType = $("input[name='game-type']:checked").val();

    $("#start-form").hide();

    if (gameType == 1) {

      $("#players-form").html("<h3>Enter your names and favourite symbols to start playing!</h3><input id='playerA-name' type='text' placeholder='Player A Name'><br /><input id='playerA-symbol' type='text' placeholder='Player A Symbol'><br /><input id='playerB-name' type='text' placeholder='Player B Name'><br /><input id='playerB-symbol' type='text' placeholder='Player B Symbol'><br /><input class='submit-button' type='submit' value='Start!'>");

    } else if (gameType == 2) {

      $("#players-form").html("<h3>Enter your name and favourite symbol to start playing!</h3><input id='playerA-name' type='text' placeholder='Player Name'><br /><input id='playerA-symbol' type='text' placeholder='Player Symbol'><br /><input type='submit' value='Start!'>");

    } else {

      $("#players-form").html("<h3>Time to watch two Hyper-Intelligent machines competing!</h3><br /><input type='submit' value='Start!'>");

    }

  $("#players-form").submit(function(event){
      event.preventDefault();
      var playerAname = $("input#playerA-name").val();
      var playerAsymbol = $("input#playerA-symbol").val();

      if (playerAname === undefined) {
        var player1 = new Computer();
      } else {
        var player1 = new User(playerAname, playerAsymbol);
      }

      var playerBname = $("input#playerB-name").val();
      var playerBsymbol = $("input#playerB-symbol").val();

      if (playerBname === undefined) {
        var player2 = new Computer();
      } else {
        var player2 = new User(playerBname, playerBsymbol);
      }

      var game = new Game(player1, player2);
      console.log(game);

    $("#players-form").hide();

    $("#welcome-message").text("It's Tic-Tac-Toe time for " + player1.name + " and " + player2.name + "!");

    $("#first-move-form").html("<label>Would you like to choose who moves first?</label><br /><input type='radio' name='first-mover' value='0'> "+player1.name+"<br /><input type='radio' name='first-mover' value='1'> "+player2.name+"<br /><input type='radio' name='first-mover' value='0'> I don't care<br /><input type='submit' value='Play!'>");
    $("#first-move-form").submit(function(event){
      event.preventDefault();
      var firstPlayerIndex = $("input[name='first-mover']:checked").val();
      game.firstMover(game.players[firstPlayerIndex])
      $("#first-move-form").hide();

      $("#board").show();

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

  });
});
