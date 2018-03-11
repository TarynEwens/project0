console.log("connected main");
let result;
let currentPlay;
let icon;
let pClass;
let currentPlayer;



$(document).ready(function() {

game();

});

let game = function() {
  currentPlayer = 0;

  click();
}


let click = function() {
console.log("click currentPlayer = " + currentPlayer);
  if (currentPlayer === 0) {
    console.log('this is player 0' +currentPlayer);
    icon = "X";
    pClass = "x";
  };

  $('#one').on('click', function () {
    currentPlay = 1;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parone').append(result);
    $('#one').off('click');

    // if (currentPlayer === "p1") {
    //   $('#one > p').addClass('p1-indicator')
    // } else if (currentPlayer === "p2") {
    //   $('#one > p').addClass('p2-indicator')
    // }
    //
    // logPlays(currentPlay);

    //
    // $('#one').on('click', function(event) {
    //   event.preventDefault();
    // })
    findPlayer(currentPlayer);


  });

  $('#two').on('click', function () {
    currentPlay = 2;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.partwo').append(result);
    findPlayer(currentPlayer);
    $('#two').off('click');
  });

  $('#three').on('click', function () {
    currentPlay = 3;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parthree').append(result);
    findPlayer(currentPlayer);
    $('#three').off('click');
  });

  $('#four').on('click', function () {
    currentPlay = 4;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parfour').append(result);
    findPlayer(currentPlayer);
    $('#four').off('click');
  });

  $('#five').on('click', function () {
    currentPlay = 5;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parfive').append(result);
    findPlayer(currentPlayer);
    $('#five').off('click');
  });

  $('#six').on('click', function () {
    currentPlay = 6;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parsix').append(result);
    findPlayer(currentPlayer);
    $('#six').off('click');
  });

  $('#seven').on('click', function () {
    currentPlay = 7;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parseven').append(result);
    findPlayer(currentPlayer);
    $('#seven').off('click');
  });

  $('#eight').on('click', function () {
    currentPlay = 8;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.pareight').append(result);
    findPlayer(currentPlayer);
    $('#eight').off('click');
  });

  $('#nine').on('click', function () {
    currentPlay = 9;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parnine').append(result);
    findPlayer(currentPlayer);
    $('#nine').off('click');
  });

};
