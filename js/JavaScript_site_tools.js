// $(document).ready(function(){
//     $('.header-nav__burger').click(function(event){
//         $('.header-nav__burger', '.navbar-list').toggleClass('active');
//     });
// });
$(document).ready(function(){
    $('.header-nav__burger').click(function(event){
        $('.header-nav__burger,.navbar-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('nav.navbar-list a').click(function(event){
        $('.header-nav__burger,.navbar-list').removeClass('active');
        $('body').removeClass('lock');
    })
});


$('nav.navbar-list a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.header-nav__icon a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.footer-content__navbar a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });

  $('div.content__block-faq a').on('click', function(e){
    var anchor = $(this).data('anchor');
    $('html,body').stop().animate({ scrollTop: $(anchor).offset().top - document.querySelector('.header-box').offsetHeight}, 1000);
    e.preventDefault();
  });