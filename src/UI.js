function startGame() {
  var gameType = $("input[name='game-type']:checked").val();

  if (gameType == 1) {
    humanVShuman();
  }
  else if (gameType == 2) {
    humanVScomputer();
  } else {
    computerVScomputer();
  };

  $("#select-game-type").hide();
};

function humanVShuman() {
  var playersForm = document.getElementById("players-form");
  playersForm.innerHTML = `
  <h3>Enter your names and favourite symbols to start playing!</h3>
  <input id='playerA-name' type='text' placeholder='Player A Name'><br />
  <input id='playerA-symbol' type='text' placeholder='Player A Symbol'><br />
  <input id='playerB-name' type='text' placeholder='Player B Name'><br />
  <input id='playerB-symbol' type='text' placeholder='Player B Symbol'><br />
  <input class='submit-button' type='submit' value='Start!'>`
  ;

  playersForm.addEventListener('submit', function(event){
    event.preventDefault();

    var playerAname = $("input#playerA-name").val();
    var playerAsymbol = $("input#playerA-symbol").val();
    var playerBname = $("input#playerB-name").val();
    var playerBsymbol = $("input#playerB-symbol").val();
    var player1 = new User(playerAname, playerAsymbol);
    var player2 = new User(playerBname, playerBsymbol);
    var game = new Game(player1, player2);

    $("#players-form").hide();
    setWelcomeMessage(game);
    setFirstMover(game);
    showBoard(game);
  });
}

function humanVScomputer() {
  var playersForm = document.getElementById("players-form");
  playersForm.innerHTML = `
  <h3>Enter your name and favourite symbol to start playing!</h3>
  <input id='playerA-name' type='text' placeholder='Player Name'><br />
  <input id='playerA-symbol' type='text' placeholder='Player Symbol'><br />
  <input type='submit' value='Start!'>`
  ;
  playersForm.addEventListener('submit', function(event){
    event.preventDefault();

    var playerAname = $("input#playerA-name").val();
    var playerAsymbol = $("input#playerA-symbol").val();
    var player1 = new User(playerAname, playerAsymbol);
    var player2 = new Computer();
    var game = new Game(player1, player2);
    $("#players-form").hide();
    setWelcomeMessage(game);
    setFirstMover(game);
  });
}

function computerVScomputer() {
  var playersForm = document.getElementById("players-form");
  playersForm.innerHTML = `
  <h3>Watch two Hyper-Intelligent machines competing!</h3><br />
  <input type='submit' value='Start!'>`
  ;
  playersForm.addEventListener('submit', function(event){
    event.preventDefault();
    var player1 = new Computer();
    var player2 = new Computer();
    var game = new Game(player1, player2);
    $("#players-form").hide();
    setWelcomeMessage(game);
    setFirstMover(game);
  });
}

function setWelcomeMessage(game) {
  var welcome = document.getElementById("welcome-message");
  welcome.innerHTML = `
  It's Tic-Tac-Toe time for ${game.players[0].name}
  and ${game.players[1].name}!"`
  ;
}

function setFirstMover(game) {
  var firstMoveForm = document.getElementById("first-move-form");
  firstMoveForm.innerHTML = `
  <label>Would you like to choose who moves first?</label><br />
  <input type='radio' name='first-mover' value='0'> ${game.players[0].name}<br />
  <input type='radio' name='first-mover' value='1'> ${game.players[1].name}<br />
  <input type='radio' name='first-mover' value='0'> I don't care<br />
  <input type='submit' value='Play!'>`
  ;
  firstMoveForm.addEventListener('submit', function(event){
    event.preventDefault();
    var firstPlayerIndex = $("input[name='first-mover']:checked").val();
    game.firstMover(game.players[firstPlayerIndex])
    $("#first-move-form").hide();
    showBoard(game);
  });
}

function showBoard(game) {
  var board = document.getElementById("board");
  board.innerHTML = `
  <div class="row">
    <div id="0" class="field"></div>
    <div id="1" class="field"></div>
    <div id="2" class="field"></div>
  </div>
  <div class="row">
    <div id="3" class="field"></div>
    <div id="4" class="field"></div>
    <div id="5" class="field"></div>
  </div>
  <div class="row">
    <div id="6" class="field"></div>
    <div id="7" class="field"></div>
    <div id="8" class="field"></div>
  </div>
  `;
  playTheGame(game);
  checkComputersTurn(game);
}

function playTheGame(game) {
  var fields = document.getElementsByClassName("field");
  for (var i = 0; i < fields.length; i++){
    fields[i].addEventListener('click', function(event){
      event.preventDefault();
      var num = this.id;
      game.makeAmove(num);
      $(this).text(game.currentBoard[num]);
      checkComputersTurn(game);
      updateTurnInfo(game);
      checkGameOver(game);
    });
  }
}

function updateTurnInfo(game) {
  $("#update").text(game._currentPlayer.name + "'s Turn!");
}

function gameOverMessage(game) {
  if (game.hasWinner()) {
    return 'The Winner is ' + game.winner.name;
  }
  else if (game.isDraw()) {
    return 'GAME OVER. No one wins this time!';
  }
};

function checkGameOver(game) {
  $("#end-of-game").text(gameOverMessage(game));
  var div = document.getElementById("end-of-game");
  if (div.innerHTML != "") {
    $("#update").hide();
    $('.field').unbind('click');
    var button = `
    <button type="button" onclick="location.reload()"
    class="btn btn-primary btn-lg">Start a New Game</button>`
    ;
    $(button).insertAfter('#end-of-game');
  }
}

function checkComputersTurn(game) {
  if (game._currentPlayer instanceof Computer) {
    var num = game._currentPlayer.minimaxMove(game);
    setTimeout(function() {
      $("#" + num).trigger("click");
    }, 1000);
  }
}
