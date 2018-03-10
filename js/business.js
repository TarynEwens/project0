console.log("connected business");

const waysToWin = ["123", "456", "789", "147", "258", "369", "159", "357"];

let available = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // plays available
let currentPlayer;
let current;
let p1Played = []; // plays made
let p2Played = []; // plays made
let win = false;

let p1; // player one
let p2; // player two
let brandNewCurrent;



const findPlayer = function(currentPlayer) {
  if (currentPlayer === 'p1') {
    currentPlayed = p1Played;
  } else if (currentPlayer === 'p2') {
    currentPlayed = p2Played;
  }
}


const logPlays = function(currentPlay) {
currentPlayed.push(currentPlay); //push currentPlay into p Played array
console.log(p1Played);
console.log(p2Played);

for (var i = available.length - 1; i >= 0; i--) { //loop through available until a match is found, then splice it out so it's removed
    if (available[i] === currentPlay) {
        available.splice(i, 1);
        break;
    }
}
// console.log(available);
findWinner(currentPlayed);
}


const findWinner = function(currentPlayed) {
  currentPlayed.sort();
  // console.log(currentPlayed);
  let currentPlayedString = currentPlayed.toString();
  // console.log(currentPlayedString);
  let current = currentPlayedString.replace(/,/g, "")
  // console.log(current);

  for (var i = waysToWin.length -1; i >= 0; i--) {
    if (waysToWin[i] === current) {
      console.log(`match found`);
      win = true;
      return;
    }
  }

  if ((win !== true) && (available.length === 0)) {
      console.log('draw')
    }

  nextPlayer();
};

const nextPlayer = function() {
  if (currentPlayer === "p1") {
    currentPlayer = "p2";
  } else if (currentPlayer === "p2") {
  currentPlayer = "p1";
  }
  // console.log(currentPlayer);
  game();
};

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
