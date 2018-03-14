console.log("connected business");

let board = {
  A1: "",
  A2: "",
  A3: "",
  B1: "",
  B2: "",
  B3: "",
  C1: "",
  C2: "",
  C3: ""
};

let waysToWin = [" X  X  X ", " O  O  O "];
let available = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // plays available
let match = [];
let matchString;
let winner;
let playerName;
let winnerBanner;
let p1Wins = 0;
let p2Wins = 0;


const findPlayer = function(currentPlayer) {
  if (currentPlayer === 0) { //If current player is 0 (player 1) then currentPlayed is p1Played, currentName is Player one.
    playerName = p1Name;
    icon = "O";
    pClass = "o";
  } else if (currentPlayer === 1) { //If current player is 1 (player 2) then currentPlayed is p2Played, current name is Player two.
    playerName = p2Name;
    icon = "X";
    pClass = "x";
  }
  findMatch(); //Call log plays function
};

const findMatch = function(){
  for (var i = 0; i < waysToWin.length; i++) {
    //HORIZONTAL AND VERTICAL WINS
    if (($('*[data-column="A"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-column="B"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-column="C"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-row="1"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-row="2"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-row="3"]').text()) === (waysToWin[i])) {
      console.log('normal win!');
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    }

    //DIAGONALS
    else if ((board.A1 === `X`) && (board.B2 === `X`) && (board.C3 === `X`)) {
      matchString = " X  X  X ";
      findWin();
      break;
    } else if ((board.A1 === `O`) && (board.B2 === `O`) && (board.C3 === `O`)) {
      matchString = " O  O  O ";
      findWin();
      break;
    } else if ((board.C1 === `X`) && (board.B2 === `X`) && (board.A3 === `X`)) {
      matchString = " X  X  X ";
      findWin();
      break;
    } else if ((board.C1 === `O`) && (board.B2 === `O`) && (board.A3 === `O`)) {
      matchString = " O  O  O ";
      findWin();
      break;
    }

    //DRAW
    else if (available.length === 0) {
      console.count('draw!!! - evaluating twice');
      winnerBanner = $(`<p class="banner"> It's a draw. <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" );
      $('.gameboard').after(winnerBanner);
      $('td').off('click'); //disable gameboard - game is over
      nextGame();
      break;
    }
  }
  nextPlayer();
};

const findWin = function() {
  if (matchString === " X  X  X ") {
    winner = p1Name;
  } else if (matchString === " O  O  O ") {
    winner = p2Name;
  }

  winnerBanner = $(`<p class="banner"> ${ winner } wins! <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" ); //create a new paragraph saying which player won
  $('.gameboard').after(winnerBanner); // append to DOM after gameboard
  $('td').off('click'); //disable gameboard - game is over
  if (winner === p1Name) {
    p1Wins = p1Wins + 1; // add 1 win to p1Wins
    $('.p1 h2').text(`${ playerName }: ${ p1Wins } wins`);
    console.log('if winner!!! - evaluating twice');
  } else {
    console.log('else winner - evaluating twice');
    p2Wins = p2Wins + 1; // add 1 win to p1Wins
    $('.p2 h2').text(`${ playerName }: ${ p2Wins } wins`);
  }
  nextGame();
};

const nextPlayer = function() { // If current player is 0 (player 1), make current player 1 (player 2) and vice versa.
  if (currentPlayer === 0) {
    currentPlayer = 1;
    $('.p2-indicator').css('opacity', '1'); // Turn opacity to 1 for p2 indicator
    $('.p1-indicator').css('opacity', '0'); // Turn opacity to 0 for p1 indicator
  } else {
    currentPlayer = 0;
    $('.p1-indicator').css('opacity', '1'); // Turn opacity to 1 for p1 indicator
    $('.p2-indicator').css('opacity', '0'); // Turn opacity to 0 for p2 indicator
  }
};

const nextGame = function() { // Function to clear gameboard and start again
  $('.reset').on('click', function() {
    $('.x').remove();
    $('.o').remove();
    $('.banner').remove();
    available = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // plays available
    board = {
      A1: "",
      A2: "",
      A3: "",
      B1: "",
      B2: "",
      B3: "",
      C1: "",
      C2: "",
      C3: ""
    };
    match = [];
    matchString;

    click();
  });
};
