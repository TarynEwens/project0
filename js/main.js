console.log("connected main");
let result;
let currentPlay;
let icon;
let pClass;
let currentPlayer;
let p1Name;
let p2Name;



$(document).ready(function() {
  // inputSubmit();


  $('#playerNameForm').submit(function () {
    p1Name = $('#p1Name').val();
    p2Name = $('#p2Name').val();
    $('.p1 h2').text(`${ p1Name }: 0 wins`);
    $('.p2 h2').text(`${ p2Name }: 0 wins`);
    landingToMain();
    startingPlayer();
    game();

  });

});

let startingPlayer = function() {
  $('.p1').on('click', function () {
    currentPlayer = 0;
    $('.p2-indicator').css('opacity', '0'); // Turn opacity to 1 for p2 indicator
    $('.p1-indicator').css('opacity', '1'); // Turn opacity to 0 for p1 indicator
  })
  $('.p2').on('click', function () {
    currentPlayer = 1;
    $('.p1-indicator').css('opacity', '0'); // Turn opacity to 1 for p1 indicator
    $('.p2-indicator').css('opacity', '1'); // Turn opacity to 0 for p2 indicator
  })

};


let landingToMain = function() { // change display from landing page to main page page
  $('.landing').css('display', 'none');
  $('.gameboard').css('display', 'inherit');
  // $('header').css('display', 'inherit');
  $('.players').css('display', 'inherit');
};

let game = function() {
  // currentPlayer = 0;
  $('.p1-indicator').css('opacity', '1'); // Start player one indicator opacity to 1 (visible)
  click();
};


let click = function() {
  if (currentPlayer === 0) {
    icon = "X";
    pClass = "x";
  } else {
    icon = "O";
    pClass = "o";
  }

  $('#one').on('click', function () {
    currentPlay = 1;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parone').append(result);
    board[1] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#one').off('click');



  });

  $('#two').on('click', function () {
    currentPlay = 2;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.partwo').append(result);
    board[2] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#two').off('click');
  });

  $('#three').on('click', function () {
    currentPlay = 3;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parthree').append(result);
    board[3] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#three').off('click');
  });

  $('#four').on('click', function () {
    currentPlay = 4;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parfour').append(result);
    board[4] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#four').off('click');
  });

  $('#five').on('click', function () {
    currentPlay = 5;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parfive').append(result);
    board[5] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#five').off('click');
  });

  $('#six').on('click', function () {
    currentPlay = 6;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parsix').append(result);
    board[6] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#six').off('click');
  });

  $('#seven').on('click', function () {
    currentPlay = 7;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parseven').append(result);
    board[7] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#seven').off('click');
  });

  $('#eight').on('click', function () {
    currentPlay = 8;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.pareight').append(result);
    board[8] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#eight').off('click');
  });

  $('#nine').on('click', function () {
    currentPlay = 9;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.parnine').append(result);
    board[9] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#nine').off('click');
  });

};
