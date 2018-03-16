//CONECTION TEST
console.log("connected main");

//GLOBAL VARIABLES
let result;
let currentPlay;
let icon;
let pClass;
let currentPlayer = 0;
let p1Name;
let p2Name;
let flag;


//DOCUMENT READY FUNCTION
$(document).ready(function() {

// SUBMIT FUNCTION - When submit button is clicked, create an error banner if there is no value in the inputs. If inputs contain values, set p-Name as the value, then update the h2 containing player names to reflect the updated names. Then call landing to main function, and after that completes, call startingPlayer function.
  $('#submit').on('click', function () {
    if ($('#p1Name').val()  === '') {
      errorBanner = $(`<p class="error-banner">Player one, please add your name!</a></p>`).addClass('animated bounceIn');
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


// STARTING PLAYER FUNCTION - Players choose which player will go first
let startingPlayer = function() {

  $('.p1').on('click', function () { //If player one div is clicked on, current player is set to 0, and a variety of CSS properties and changed to reflect the players decision.
    currentPlayer = 0;
    $('.p2-indicator').css('opacity', '0');
    $('.p1-indicator').css('opacity', '1');
    $('.players p').css('visibility', 'hidden');


    $('.p2 h2').hover(function() {
      $(this).css('font-weight', '300');
    });
    $('.p1').off('click');
    $('.p2').off('click');
    click(); // Call click function when complete
  });

  $('.p2').on('click', function () { // Same as above for player 2
    currentPlayer = 1;
    $('.p2-indicator').css('opacity', '1');
    $('.p1-indicator').css('opacity', '0');
    $('.players p').css('visibility', 'hidden');
    $('.p1 h2').hover(function() {
      $(this).css('font-weight', '300');
    });
    $('.p2 h2').hover(function() {
      $(this).css('font-weight', '300');
    });
    $('.p1').off('click');
    $('.p2').off('click');
    click();
  });
};

// LANDING TO MAIN FUNCTION - change display from landing page to main page page using display none and display block
let landingToMain = function() {
  $('.landing').hide();
  $('.gameboard').show();
  $('.players').show();
  $('footer').show();
};

// CLICK FUNCTION - Starts by saying if current player is 0 icon is X and class is x, and vice versa
let click = function() {
  if (currentPlayer === 0) {
    icon = "X";
    pClass = "x";
  } else {
    icon = "O";
    pClass = "o";
  }

  //On each cells click, pop one number out of the available array. Create a result variable with a paragraph with the icon, which will fade in slowly. Append result to empty paragraph inside cell. Add the icon into matching board object. call find player function, and turn off that cells click so it can't be used again.

  $('#td1').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par1').append(result);
    board.A1 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td1').off('click');
  });

  $('#td2').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par2').append(result);
    board.A2 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td2').off('click');
  });

  $('#td3').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par3').append(result);
    board.A3 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td3').off('click');
  });

  $('#td4').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par4').append(result);
    board.B1 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td4').off('click');
  });

  $('#td5').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par5').append(result);
    board.B2 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td5').off('click');
  });

  $('#td6').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par6').append(result);
    board.B3 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td6').off('click');
  });

  $('#td7').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par7').append(result);
    board.C1 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td7').off('click');
  });

  $('#td8').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par8').append(result);
    board.C2 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td8').off('click');
  });

  $('#td9').on('click', function () {
    available.pop();
    let result = $(`<p class="${ pClass }"> ${ icon } </p>`).fadeIn( "slow" );
    $('.par9').append(result);
    board.C3 = `${ icon }`;
    findPlayer(currentPlayer);
    $('#td9').off('click');
  });

};
