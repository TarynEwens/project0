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
  $('#p1-indicator').css('opacity', '1');

  click();
};


let click = function() {
  console.log("click currentPlayer = " + currentPlayer);
  if (currentPlayer === 0) {
    icon = "X";
    pClass = "x";
  }

  $('#one').on('click', function () {
    currentPlay = 1;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parone').append(result);
    board[1] = `${ icon }`;
    $('#one').off('click');

    // if (currentPlayer === "p1") {
    //   $('#one > p').addClass('p1-indicator')
    // } else if (currentPlayer === "p2") {
    //   $('#one > p').addClass('p2-indicator')
    // }
    findPlayer(currentPlayer);


  });

  $('#two').on('click', function () {
    currentPlay = 2;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.partwo').append(result);
    board[2] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#two').off('click');
  });

  $('#three').on('click', function () {
    currentPlay = 3;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parthree').append(result);
    board[3] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#three').off('click');
  });

  $('#four').on('click', function () {
    currentPlay = 4;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parfour').append(result);
    board[4] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#four').off('click');
  });

  $('#five').on('click', function () {
    currentPlay = 5;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parfive').append(result);
    board[5] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#five').off('click');
  });

  $('#six').on('click', function () {
    currentPlay = 6;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parsix').append(result);
    board[6] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#six').off('click');
  });

  $('#seven').on('click', function () {
    currentPlay = 7;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parseven').append(result);
    board[7] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#seven').off('click');
  });

  $('#eight').on('click', function () {
    currentPlay = 8;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.pareight').append(result);
    board[8] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#eight').off('click');
  });

  $('#nine').on('click', function () {
    currentPlay = 9;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`);
    $('.parnine').append(result);
    board[9] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#nine').off('click');
  });

};
