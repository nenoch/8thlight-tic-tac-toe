$(document).ready(function() {
  $("#board").hide();


  $("#start-form").submit(function(event){
    event.preventDefault();
    
    var playerAname = $("input#playerA-name").val();
    var playerAsymbol = $("input#playerA-symbol").val();

    var playerBname = $("input#playerB-name").val();
    var playerBsymbol = $("input#playerB-symbol").val();

    $("#welcome-message").text("It's Tic-Tac-Toe time for " + playerAname + " and " + playerBname + "!");
    $("#start-form").hide();

    var player1 = new User(playerAname, playerAsymbol);
    var player2 = new User(playerBname, playerBsymbol);
    var game = new Game(player1, player2);

    $("#first-move-form").html("<label>Would you like to choose who moves first?</label><br /><input type='radio' id='playerA' name='first-mover' value='0'> "+playerAname+"<br /><input type='radio' id='playerB' name='first-mover' value='1'> "+playerBname+"<br /><input type='radio' name='first-mover' value='0'> I don't care<br /><input type='submit' value='Play!'>");
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
