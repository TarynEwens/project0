//CONNECTION TEST
console.log("connected business");

// GLOBAL VARIABLES
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
let $winnerBanner;
let p1Wins = 0;
let p2Wins = 0;


//FIND PLAYER FUNCTION
const findPlayer = function(currentPlayer) {
  if (currentPlayer === 0) { //If current player is 0 (player 1) then playerName is p1Name, icon is O and pClass is o. Unsure why this is backwards, but it works.
    playerName = p1Name;
    icon = "O";
    pClass = "o";
  } else if (currentPlayer === 1) { //If current player is 1 (player 2) then playerName is p1Name, icon is X and pClass is x.
    playerName = p2Name;
    icon = "X";
    pClass = "x";
  }
  findMatch(); //Call findMatch function
};

//FIND MATCH FUNCTION
const findMatch = function(){
  for (var i = 0; i < waysToWin.length; i++) {
    // Loop through both ways to win (X X X or O O O) and if all of each column or row or diagonal match, push the match into the match array, and then convert to string so it can be compared in next function. Call findWIN function if a match is found.
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
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-diagonal1="true"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    } else if (($('*[data-diagonal2="true"]').text()) === (waysToWin[i])) {
      match.push(waysToWin[i]);
      matchString = match.toString();
      findWin();
    }

    //DRAW - If length of available array is 0 then create a banner (paragraph) that tells the players its a draw and offers reset link (also fades in slowly), then calls NextGame function - break added in to stop the loop from repeating.
    else if (available.length === 0) {
      $winnerBanner = $(`<p class="banner"> It's a draw. <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" );
      $('.gameboard').after($winnerBanner);
      $('td').off('click'); //disable gameboard - game is over
      nextGame();
      break;
    }
  }
  nextPlayer(); //call nextPlayer function
};


//FIND WIN FUNCTION - if the matchString is X X X then the variable winner is now equal to p1Name (player one), or vice versa
const findWin = function() {
  if (matchString === " X  X  X ") {
    winner = p1Name;
  } else if (matchString === " O  O  O ") {
    winner = p2Name;
  }
  // create a winner banner that tells the players who won, then add it to the DOM after the gameboard. Turn off click function on all cells in the gameboard. If the winner variable is equal to the p-Name variable, a counter will add 1 to p-Wins, and the h2 with the players name and # of wins will be updated. Call next game function.
  $winnerBanner = $(`<p class="banner"> ${ winner } wins! <a href="#" class="reset">Try again?</a></p>`).fadeIn( "slow" ); //create a new paragraph saying which player won
  $('.gameboard').after($winnerBanner); // append to DOM after gameboard
  $('td').off('click'); //disable gameboard - game is over
  if (winner === p1Name) {
    p1Wins = p1Wins + 1; // add 1 win to p1Wins
    $('.p1 h2').text(`${ playerName }: ${ p1Wins } wins`);
  } else {
    p2Wins = p2Wins + 1; // add 1 win to p1Wins
    $('.p2 h2').text(`${ playerName }: ${ p2Wins } wins`);
  }
  nextGame();
};

// NEXT PLAYER FUNCTION - If current player is 0 (player 1), make current player 1 (player 2) and vice versa. Also sets opacity of the player indicator div to either 1 or 0 depending on which one needs to be visible at the time.
const nextPlayer = function() {
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

// NEXT GAME FUNCTION - Function to reset all relevant variables back to their initial state, removes X's and O's from board, removes banners, and calls Click function to start again
const nextGame = function() {
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
