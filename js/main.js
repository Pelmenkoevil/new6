var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    parallax: true,
    autoplay: 2000,
    speed: 1000,
    loop: true
});

(function(){
  var button = $('.button-add-to-cart');
  var basketCount = $('.menu-basket span');
  var count = basketCount.text();

  button.on('click', function() {
    count = Number(count) + 1

    basketCount.text(count);
  })
}())

function myFunction() {
  document.getElementById("axe").src="img/topor.png";
  document.getElementById("axe").width = "350";
}
function l() {
  document.getElementById("axe").src="img/topor3.jpg";
  document.getElementById("axe").width = "250";
}
function xl() {
  document.getElementById("axe").src="img/topor4.jpg";
  document.getElementById("axe").width = "350";
}
function xxl() {
  document.getElementById("axe").src="img/topor5.jpeg";
  document.getElementById("axe").width = "250";
}


$(function(){
  $('#mobile').click(function(){
    $('.mobile-menu').toggle(function(){
      $(this).animate({}, 2000 );
    });
  });
});
