$(document).ready(function () {

//hamburger
$('#hamburger').click(function() {
  $('.menu').toggleClass('menu-show');
  $('.mobile-toggle').toggleClass('active');
});

// sticky Header
$(window).scroll(function() {

  if ($(window).scrollTop() > 150) {
    $('.main-menu').addClass('sticky');
  } else {
    $('.main-menu').removeClass('sticky');
  }
});



/*sidebar*/
$('#category').click(function() {  
  $('#category').toggleClass('side-rot');

  if (window.screen.width > 768) {
    $('.category-items').toggleClass('hide');
  }
  else{
    $('.category-items').toggleClass('show');
  }
});

$('#brands').click(function() {
  $('#brands').toggleClass('side-rot');
  
  if (window.screen.width > 768) {
    $('.brand-items').toggleClass('hide');
  }
  else{
    $('.brand-items').toggleClass('show');
  }
});

//detail-info
$('#info').click(function() {
  $('#info').toggleClass('info-arr');
  
  if (window.screen.width > 768) {
    $('.product-inf').toggleClass('hide');
  }
  else{
    $('.product-inf').toggleClass('show');
  }
});

// grid
$(document).on('click', '.grid-button', function() {
  $(this).addClass('active').siblings().removeClass('active');
});


// cart-add-nummer
$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});

});