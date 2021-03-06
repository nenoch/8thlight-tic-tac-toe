function startGame() {
  var gameType = document.querySelector('input[name="game-type"]:checked').value;
  if (gameType == 1) {
    humanVShuman();
  }
  else if (gameType == 2) {
    humanVScomputer();
  } else {
    computerVScomputer();
  };
document.getElementById("select-game-type").style.display = 'none';
};

function humanVShuman() {
  var playersForm = document.getElementById("players-form");
  playersForm.innerHTML = `
  <h3>Enter your names and 1 or 2 digits symbols to start playing!</h3>
  <input id='playerA-name' type='text' placeholder='Player 1' required><span>➜</span>
  <input id='playerA-symbol' type='text' maxlength="2" placeholder="Player 1 symbol" required><br />
  <input id='playerB-name' type='text' placeholder='Player 2' required><span>➜</span>
  <input id='playerB-symbol' type='text' maxlength="2" placeholder="Player 2 symbol" required><br />
  <input class='submit-button' type='submit' value='Start!'>`
  ;
  playersForm.addEventListener('submit', function(event){
    event.preventDefault();
    var playerAname = document.getElementById("playerA-name").value;
    var playerAsymbol = document.getElementById("playerA-symbol").value;
    var playerBname = document.getElementById("playerB-name").value;
    var playerBsymbol = document.getElementById("playerB-symbol").value;
    var player1 = new User(playerAname, playerAsymbol);
    var player2 = new User(playerBname, playerBsymbol);
    var game = new Game(player1, player2);
    document.getElementById("players-form").style.display = 'none';
    setWelcomeMessage(game);
    setFirstMover(game);
  });
}

function humanVScomputer() {
  var playersForm = document.getElementById("players-form");
  playersForm.innerHTML = `
  <h3>Enter your name and a 1 or 2 digits symbol to start playing!</h3>
  <input id='playerA-name' type='text' placeholder='Your name' required><span>➜</span>
  <input id='playerA-symbol' type='text' maxlength="2" placeholder='Your symbol' required><br />
  <input type='submit' value='Start!'>`
  ;
  playersForm.addEventListener('submit', function(event){
    event.preventDefault();
    var playerAname = document.getElementById("playerA-name").value;
    var playerAsymbol = document.getElementById("playerA-symbol").value;
    var player1 = new User(playerAname, playerAsymbol);
    var player2 = new Computer("Samantha", "♛");
    var game = new Game(player1, player2);
    document.getElementById("players-form").style.display = 'none';
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
    var player1 = new Computer("Samantha", "♛");
    var player2 = new Computer("JARVIS", "♞");
    var game = new Game(player1, player2);
    document.getElementById("players-form").style.display = 'none';
    setWelcomeMessage(game);
    setFirstMover(game);
  });
}

function setWelcomeMessage(game) {
  var welcome = document.getElementById("welcome-message");
  welcome.textContent = `
  It's Tic-Tac-Toe time for ${game.players[0].name}
  and ${game.players[1].name}!`
  ;
}

function setFirstMover(game) {
  var firstMoveForm = document.getElementById("first-move-form");
  firstMoveForm.innerHTML = `
  <h3>Would you like to choose who moves first?</h3><br />
  <input type='radio' name='first-mover' value='0' required> ${game.players[0].name}<br />
  <input type='radio' name='first-mover' value='1'> ${game.players[1].name}<br />
  <input type='radio' name='first-mover' value='0'> I don't care<br />
  <input type='submit' value='Play!'>`
  ;
  firstMoveForm.addEventListener('submit', function(event){
    event.preventDefault();
    var firstPlayerIndex = document.querySelector('input[name="first-mover"]:checked').value;
    game.firstMover(game.players[firstPlayerIndex])
    document.getElementById("first-move-form").style.display = 'none';
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
    <div id="3" class="field"></div>
  </div>
  <div class="row">
    <div id="4" class="field"></div>
    <div id="5" class="field"></div>
    <div id="6" class="field"></div>
    <div id="7" class="field"></div>
  </div>
  <div class="row">
    <div id="8" class="field"></div>
    <div id="9" class="field"></div>
    <div id="10" class="field"></div>
    <div id="11" class="field"></div>
  </div>
  <div class="row">
    <div id="12" class="field"></div>
    <div id="13" class="field"></div>
    <div id="14" class="field"></div>
    <div id="15" class="field"></div>
  </div>
  `;
  turnInfo(game)
  playTheGame(game);
  computersTurn(game);
}

function playTheGame(game) {
  $(".field").click(function(){
      var num = this.id;
      console.log(num);
      game.makeAmove(num);
      console.log(game.currentBoard[num]);
      this.textContent = game.currentBoard[num];
      console.log("content", this.textContent);
      computersTurn(game);
      turnInfo(game);
      checkGameOver(game);
    });
}

function turnInfo(game) {
  var update = document.getElementById("update");
  update.textContent = `
  ${game.currentPlayer.name}'s Turn!`
  ;
  console.log(game.currentPlayer.name);
}

function gameOverMessage(game) {
  if (game.hasWinner()) {
    return 'The Winner is ' + game.declareWinner();
  }
  else if (game.isDraw()) {
    return 'GAME OVER. No one wins this time!';
  }
};

function checkGameOver(game) {
  var div = document.getElementById("end-of-game");
  div.textContent = gameOverMessage(game);
  if (div.innerHTML != "") {
    $(".field").unbind('click');
    document.getElementById("update").style.display = 'none';
    document.getElementById("new-game").innerHTML = `
    <button type="button" onclick="location.reload()"
    class="btn btn-primary btn-lg">Start a New Game</button>`
    ;
  }
}

function computersTurn(game) {
  if (game.currentPlayer instanceof Computer) {
    console.log("hello");
    var num = game.currentPlayer.minimaxMove(game);
    console.log(num);
    var div = document.getElementById(num);
    setTimeout(function() {
      div.click();
    }, 1000);
  }
}
