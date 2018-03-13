console.log("connected business");

let board = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: ""
};

let x = false;
let o = false;
let draw = false;
// let plays = ["X", "X", "X", "O", "O", "X", "O", "_", "_"];

let available = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // plays available

let current;
// let p1Played = []; // plays made
// let p2Played = []; // plays made
let currentPlayed;
let win = false;

let p1; // player one
let p2; // player two
let playerName;
let winnerBanner;
let currentWins;
let p1Wins = 0;
let p2Wins = 0;




const findPlayer = function(currentPlayer) {
  if (currentPlayer === 0) { //If current player is 0 (player 1) then currentPlayed is p1Played, currentName is Player one.
    // currentPlayed = p1Played;
    playerName = p1Name;
    icon = "O";
    pClass = "o";
  } else if (currentPlayer === 1) { //If current player is 1 (player 2) then currentPlayed is p2Played, current name is Player two.
    // currentPlayed = p2Played;
    playerName = p2Name;
    icon = "X";
    pClass = "x";
  }
  logPlays();
// logPlays(currentPlay); //Call log plays function
};

const logPlays = function() {
  for (var i = available.length - 1; i >= 0; i--) { //loop through available until a match is found, then splice it out so it's removed
    if (available[i] === currentPlay) {
      available.splice(i, 1);

    }
  }
  console.log(available);
  findMatch(); // call findWinner function
};


const findMatch = function(){
  console.log(x);
  console.log(o);
  if ((board[1] === `X`) && (board[2] === `X`) && (board[3] === `X`)) {
    x = true;
  }


  if ((board[1] === `O`) && (board[2] === `O`) && (board[3] === `O`)) {
    o = true;
  }

  if ((board[4] === `X`) && (board[5] === `X`) && (board[6] === `X`)) {
    x = true;
  }
  if ((board[4] === `O`) && (board[5] === `O`) && (board[6] === `O`)) {
    o = true;
  }

  if ((board[7] === `X`) && (board[8] === `X`) && (board[9] === `X`)) {
    x = true;
  }
  if ((board[7] === `O`) && (board[8] === `O`) && (board[9] === `O`)) {
    o = true;
  }

  if ((board[1] === `X`) && (board[4] === `X`) && (board[7] === `X`)) {
    x = true;
  }
  if ((board[1] === `O`) && (board[4] === `O`) && (board[7] === `O`)) {
    o = true;
  }

  if ((board[2] === `X`) && (board[5] === `X`) && (board[8] === `X`)) {
    x = true;
  }
  if ((board[2] === `O`) && (board[5] === `O`) && (board[8] === `O`)) {
    o = true;
  }

  if ((board[3] === `X`) && (board[6] === `X`) && (board[9] === `X`)) {
    x = true;
  }
  if ((board[3] === `O`) && (board[6] === `O`) && (board[9] === `O`)) {
    o = true;
  }

  if ((board[1] === `X`) && (board[5] === `X`) && (board[9] === `X`)) {
    x = true;
  }
  if ((board[1] === `O`) && (board[5] === `O`) && (board[9] === `O`)) {
    o = true;
  }

  if ((board[3] === `X`) && (board[5] === `X`) && (board[7] === `X`)) {
    x = true;
  }
  if ((board[3] === `O`) && (board[5] === `O`) && (board[7] === `O`)) {
    o = true;
  }

  else if (available.length === 0) {
    draw = true;
  }
  findWin();
};

const findWin = function() {

  if (x) {
    winnerBanner = $(`<p class="banner"> ${ playerName } wins! <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" ); //create a new paragraph saying which player won
    $('.gameboard').after(winnerBanner); // append to DOM after gameboard
    $('#td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9').off('click'); //disable gameboard - game is over
    p1Wins = p1Wins + 1; // add 1 win to p1Wins
    $('.p1 h2').text(`${ playerName }: ${ p1Wins } wins`)
    nextGame();
  }
  if (o) {
    winnerBanner = $(`<p class="banner"> ${ playerName } wins! <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" ); //create a new `par`agraph saying which player won
    $('.gameboard').after(winnerBanner); // append to DOM after gameboard
    $('#td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9').off('click'); //disable gameboard - game is over
    p2Wins = p2Wins + 1; // add 1 win to p2Wins
    $('.p2 h2').text(`${ playerName }: ${ p2Wins } wins`)
    nextGame();
  }
  if ((draw) && (o === false) && (x === false)) {
    winnerBanner = $(`<p class="banner"> It's a draw. <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" );
    $('.gameboard').after(winnerBanner);
    $('#td1, #td2, #td3, #td4, #td5, #td6, #td7, #td8, #td9').off('click'); //disable gameboard - game is over
    nextGame();

  }
  nextPlayer();
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
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  };
  x = false;
  o = false;
  draw = false;
  game();
});
};
