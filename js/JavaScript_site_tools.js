// $(document).ready(function(){
//     $('.header-nav__burger').click(function(event){
//         $('.header-nav__burger', '.navbar-list').toggleClass('active');
//     });
// });
$(document).ready(function(){
    $('.header-nav__burger').click(function(event){
        $('.header-nav__burger,.navbar-list').toggleClass('active');
        $('body').toggleClass('lock')
    });
});