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
console.log(currentPlayer);
  $('#submit').on('click', function () {
    if ($('#p1Name').val()  === '') {
      errorBanner = $(`<p class="error-banner">Player one, please add your name!</a></p>`).addClass('animated bounceIn')
      $('.landing button').after(errorBanner);
        return false;
    }

    if ($('#p2Name').val()  === '') {
        errorBanner = $(`<p class="error-banner">Player two, please add your name!</a></p>`).fadeIn( "slow" );
        $('.landing button').after(errorBanner);
        return false;
    }

    p1Name = $('#p1Name').val();
    p2Name = $('#p2Name').val();
    $('.p1 h2').text(`${ p1Name }: 0 wins`);
    $('.p2 h2').text(`${ p2Name }: 0 wins`);
    landingToMain();

  });
  startingPlayer();
});

let startingPlayer = function() {
  // $('.players p').fadeIn(1000).fadeOut(1000).fadeIn(1000);

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
    console.log(currentPlayer);
    $('.p2-indicator').css('opacity', '1'); // Turn opacity to 1 for p2 indicator
    $('.p1-indicator').css('opacity', '0'); // Turn opacity to 0 for p1 indicator
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
};


let landingToMain = function() { // change display from landing page to main page page
  $('.landing').css('display', 'none');
  $('.gameboard').css('display', 'block');
  $('.players').css('display', 'block');

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

  $('#td1').on('click', function () {
    currentPlay = 1;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par1').append(result);
    board[1] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td1').off('click');



  });

  $('#td2').on('click', function () {
    currentPlay = 2;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par2').append(result);
    board[2] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td2').off('click');
  });

  $('#td3').on('click', function () {
    currentPlay = 3;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par3').append(result);
    board[3] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td3').off('click');
  });

  $('#td4').on('click', function () {
    currentPlay = 4;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par4').append(result);
    board[4] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td4').off('click');
  });

  $('#td5').on('click', function () {
    currentPlay = 5;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par5').append(result);
    board[5] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td5').off('click');
  });

  $('#td6').on('click', function () {
    currentPlay = 6;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par6').append(result);
    board[6] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td6').off('click');
  });

  $('#td7').on('click', function () {
    currentPlay = 7;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par7').append(result);
    board[7] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td7').off('click');
  });

  $('#td8').on('click', function () {
    currentPlay = 8;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par8').append(result);
    board[8] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td8').off('click');
  });

  $('#td9').on('click', function () {
    currentPlay = 9;
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par9').append(result);
    board[9] = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td9').off('click');
  });

};
