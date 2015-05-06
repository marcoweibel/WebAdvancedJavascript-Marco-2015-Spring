//switch from normal header to small header when scrolling down.
$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
        $('.header').addClass('small'); 
        $('.header__logo img').addClass('small');
        $('.header__nav ul').addClass('small');
        $( ".header__info" ).addClass('is-hidden');
        $('.content').addClass('small'); 
    } else {
        $('.header').removeClass('small');
        $('.header__logo img').removeClass('small');
        $('.header__nav ul').removeClass('small');
        $( ".header__info" ).removeClass('is-hidden');
        $('.content').removeClass('small');
    }
});

