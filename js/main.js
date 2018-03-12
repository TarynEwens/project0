console.log("connected main");
let result;
let currentPlay;
let icon;
let pClass;
let currentPlayer;



$(document).ready(function() {
  // inputSubmit();
  game();


});

// let inputSubmit = function() {
//   $('#p1Submit').on('click', function () {
//     console.log('button click')
//     icon = $('#p1Icon').val();
//     console.log(icon);
// })
//     $('#p2Submit').on('click', function () {
//       console.log('button click')
//       icon = $('#p2Icon').val();
//       console.log(icon);
//
// })
// };







let game = function() {
  currentPlayer = 0;
  $('.p1-indicator').css('opacity', '1'); // Start player one indicator opacity to 1 (visible)

  click();
};


let click = function() {
  if (currentPlayer === 0) {
    icon = "X";
    pClass = "x";
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
