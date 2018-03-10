console.log("connected main");
let result;
let currentPlay;

let icon;



$(document).ready(function() {
currentPlayer = "p1"


game();
});

let game = function() {
  findPlayer(currentPlayer);
  if (currentPlayer === "p1") {
    icon = "X";
  } else if (currentPlayer === "p2") {
    icon = "O";
  }
  click();
}


let click = function() {
  $('#one').on('click', function () {
    currentPlay = 1;
    let result = $(`<p> ${ icon } </p>`);
    $('.parone').append(result)

    // if (currentPlayer === "p1") {
    //   $('#one > p').addClass('p1-indicator')
    // } else if (currentPlayer === "p2") {
    //   $('#one > p').addClass('p2-indicator')
    // }

    logPlays(currentPlay);
  });

  $('#two').on('click', function () {
    currentPlay = 2;
    let result = $(`<p> ${ icon } </p>`);
    $('.partwo').append(result);
    logPlays(currentPlay);
  });

  $('#three').on('click', function () {
    currentPlay = 3;
    let result = $(`<p> ${ icon } </p>`);
    $('.parthree').append(result);
    logPlays(currentPlay);
  });

  $('#four').on('click', function () {
    currentPlay = 4;
    let result = $(`<p> ${ icon } </p>`);
    $('.parfour').append(result);
    logPlays(currentPlay);
  });

  $('#five').on('click', function () {
    currentPlay = 5;
    let result = $(`<p> ${ icon } </p>`);
    $('.parfive').append(result);
    logPlays(currentPlay);
  });

  $('#six').on('click', function () {
    currentPlay = 6;
    let result = $(`<p> ${ icon } </p>`);
    $('.parsix').append(result);
    logPlays(currentPlay);
  });

  $('#seven').on('click', function () {
    currentPlay = 7;
    let result = $(`<p> ${ icon } </p>`);
    $('.parseven').append(result);
    logPlays(currentPlay);
  });

  $('#eight').on('click', function () {
    currentPlay = 8;
    let result = $(`<p> ${ icon } </p>`);
    $('.pareight').append(result);
    logPlays(currentPlay);
  });

  $('#nine').on('click', function () {
    currentPlay = 9;
    let result = $(`<p> ${ icon } </p>`);
    $('.parnine').append(result);
    logPlays(currentPlay);
  });
};
