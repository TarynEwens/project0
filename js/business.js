console.log("connected business");

const waysToWin = ["123", "456", "789", "147", "258", "369", "159", "357"];

let available = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // plays available

let current;
let p1Played = []; // plays made
let p2Played = []; // plays made
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





const findPlayer = function(currentPlayer) {
  // console.log("start of findPlayer currentPlayer = " + currentPlayer);
  if (currentPlayer === 0) { //If current player is 0 (player 1) then currentPlayed is p1Played, currentName is Player one.
    currentPlayed = p1Played;
    playerName = "Player one";
    icon = "O";
    pClass = "o";
    currentWins = p1Wins; // TODO: currentWins should be p1Wins but this doesn't work yet!
  } else if (currentPlayer === 1) { //If current player is 1 (player 2) then currentPlayed is p2Played, current name is Player two.
    currentPlayed = p2Played;
    playerName = "Player two";
    icon = "X";
    pClass = "x";
    currentWins = p2Wins; // TODO: currentWins should be p2Wins but this doesn't work yet!
  }
  // console.log(currentPlayed);
logPlays(currentPlay); //Call log plays function
console.log("end of findPlayer currentPlayer = " + currentPlayer);
}


const logPlays = function(currentPlay) {
currentPlayed.push(currentPlay); //push currentPlay into p1 or p2 Played array
// console.log("log plays p1Played = " + p1Played);
// console.log("log plays p2Played = " + p2Played);
// console.log("log plays currentPlayed = " + currentPlayed)
// console.log("log plays currentPlayer = " + currentPlayer);

for (var i = available.length - 1; i >= 0; i--) { //loop through available until a match is found, then splice it out so it's removed
    if (available[i] === currentPlay) {
        available.splice(i, 1);
        break;
    }
}
// console.log(available);
findWinner(currentPlayed); // call findWinner function
}


const findWinner = function(currentPlayed) {
  currentPlayed.sort(); //sort currentPlayed array into order
  // console.log(currentPlayed);
  let currentPlayedString = currentPlayed.toString(); //change it to a string
  // console.log(currentPlayedString);
  let current = currentPlayedString.replace(/,/g, "") //remove the commas
  // console.log(current);

  for (var i = waysToWin.length -1; i >= 0; i--) { // loop through each possible way to win, and if a match found return true
    if (waysToWin[i] === current) {
      // console.log(`waysToWin - match found`);
      win = true;

      winnerBanner = $(`<p class="banner"> ${ playerName } wins! <a href="#">Try again?</a></p>`); //create a new paragraph saying which player won
      $('.gameboard').append(winnerBanner) // append to DOM after gameboard
      currentWins = currentWins + 1; // TODO: make p1Wins or p2Wins + 1 - THIS DOESN'T WORK
      $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off('click'); //disable gameboard - game is over
    }
  }

  if ((win !== true) && (available.length === 0)) { // if no match is found and no plays are left, create a new paragraph declaring the game a draw and append to DOM after gameboard.
      console.log('waysToWin - draw')
      winnerBanner = $(`<p class="banner"> It's a draw. <a href="#">Try again?</a></p>`);
      $('.gameboard').append(winnerBanner)
      currentWins = currentWins + 1;// TODO: make p1Wins or p2Wins + 1 - THIS DOESN'T WORK
      $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off('click'); //disable gameboard - game is over
    }

  nextPlayer(); //Call nextPlayer
};

const nextPlayer = function() { // If current player is 0 (player 1), make current player 1 (player 2) and vice versa.
  if (currentPlayer === 0) {
    currentPlayer = 1;
    // $('#p2-indicator').css('opacity', '1');
  } else {
  currentPlayer = 0;
  // $('#p1-indicator').css('opacity', '1');
  }
  // console.log("nextPlayer currentPlayer = " + currentPlayer);


};

// const nextGame = function() { TODO: Function to clear gameboard and start again
//
// };

// findPlayer('p1', 1)
// findPlayer('p2', 5)
// findPlayer('p1', 3)
// findPlayer('p2', 4)
// findPlayer('p1', 2)
// findPlayer('p2', 7)
// findPlayer('p1', 9)
// findPlayer('p2', 8)
// findPlayer('p1', 6)


// findPlayer('p1', 5)
// findPlayer('p2', 6)
// logPlays(1);
