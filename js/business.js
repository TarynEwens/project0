console.log("connected business");

const board = {
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
let brandNewCurrent;
let playerName;
let winnerBanner;
let drawBanner;
let currentWins;
let p1Wins = 0;
let p2Wins = 0;
let match = 0;
let firstWin;
let firstLetter;





const findPlayer = function(currentPlayer) {
  if (currentPlayer === 0) { //If current player is 0 (player 1) then currentPlayed is p1Played, currentName is Player one.
    // currentPlayed = p1Played;
    playerName = "Player one";
    icon = "O";
    pClass = "o";
  } else if (currentPlayer === 1) { //If current player is 1 (player 2) then currentPlayed is p2Played, current name is Player two.
    // currentPlayed = p2Played;
    playerName = "Player two";
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

  if (available.length === 0) {
    draw = true;
  }
  findWin();
};

const findWin = function() {

  if (x) {
    winnerBanner = $(`<p class="banner"> ${ playerName } wins! <a href="#">Try again?</a></p>`); //create a new paragraph saying which player won
    $('.gameboard').append(winnerBanner); // append to DOM after gameboard
    $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off('click'); //disable gameboard - game is over
    p1Wins = p1Wins + 1; // add 1 win to p1Wins
  }
  if (o) {
    winnerBanner = $(`<p class="banner"> ${ playerName } wins! <a href="#">Try again?</a></p>`); //create a new paragraph saying which player won
    $('.gameboard').append(winnerBanner); // append to DOM after gameboard
    $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off('click'); //disable gameboard - game is over
    p2Wins = p2Wins + 1; // add 1 win to p2Wins
  }
  if (draw) {
    winnerBanner = $(`<p class="banner"> It's a draw. <a href="#">Try again?</a></p>`);
    $('.gameboard').append(winnerBanner);
    $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off('click'); //disable gameboard - game is over

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

// const nextGame = function() { TODO: Function to clear gameboard and start again
//
// };
