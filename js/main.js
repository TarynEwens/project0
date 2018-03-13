console.log("connected main");
let result;
let currentPlay;
let icon;
let pClass;
let currentPlayer = 0;
let p1Name;
let p2Name;
let flag;



$(document).ready(function() {

  $('#playerNameForm').submit(function () {
    p1Name = $('#p1Name').val();
    p2Name = $('#p2Name').val();
    $('.p1 h2').text(`${ p1Name }: 0 wins`);
    $('.p2 h2').text(`${ p2Name }: 0 wins`);
    landingToMain();
    startingPlayer();
    console.log(currentPlayer);
  });


});

let startingPlayer = function() {
  $('.players p').fadeIn(1000).fadeOut(1000).fadeIn(1000);

  $('.p1').on('click', function () {
    currentPlayer = 0;
    console.log(currentPlayer);
    $('.p2-indicator').css('opacity', '0'); // Turn opacity to 1 for p2 indicator
    $('.p1-indicator').css('opacity', '1'); // Turn opacity to 0 for p1 indicator
    console.log(currentPlayer);
    $('.players p').css('visibility', 'hidden');
    $('.p1 h2').hover(function() {
      $(this).css('font-weight', '300');
    })
    $('.p2 h2').hover(function() {
      $(this).css('font-weight', '300');
    })
    $('.p1').off('click');
    $('.p2').off('click');
    game();
  });

  $('.p2').on('click', function () {
    currentPlayer = 1;
    $('.p1-indicator').css('opacity', '0'); // Turn opacity to 1 for p1 indicator
    $('.p2-indicator').css('opacity', '1'); // Turn opacity to 0 for p2 indicator
    console.log(currentPlayer);
    $('.players p').css('visibility', 'hidden');
    $('.p1').off('click');
    $('.p2').off('click');
    $('.p2 h2:hover').css('font-weight', '300');
    $('.p1 h2:hover').css('font-weight', '300');
    game();
  });

  console.log("flag = ", flag);



};


let landingToMain = function() { // change display from landing page to main page page
  $('.landing').css('display', 'none');
  $('.gameboard').css('display', 'inherit');
  $('.players').css('display', 'inherit');
};

let game = function() {
  // currentPlayer = 0;
  // $('.p1-indicator').css('opacity', '1'); // Start player one indicator opacity to 1 (visible)
  console.log(currentPlayer);
  click();

};


let click = function() {
  console.log(currentPlayer);
  if (currentPlayer === 0) {
    icon = "X";
    pClass = "x";
  } else {
    icon = "O";
    pClass = "o";
  }
  console.log(currentPlayer);

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
