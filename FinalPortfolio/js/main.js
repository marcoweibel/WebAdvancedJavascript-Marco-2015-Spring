//switch from normal header to small header size when scrolling down.
$(window).scroll(function(){
    if($(document).scrollTop() > 5) {
        $('.header').addClass('small'); 
        $('.header__logo img').addClass('small');
        $('.header__nav ul').addClass('small');
        $('.header__nav ul ul').addClass('small');
        $('.portfolioFilter').addClass('small');
        $( ".header__info" ).addClass('is-hidden');
    } else {
        $('.header').removeClass('small');
        $('.header__logo img').removeClass('small');
        $('.header__nav ul').removeClass('small');
        $('.header__nav ul ul').removeClass('small');
        $('.portfolioFilter').removeClass('small');
        $( ".header__info" ).removeClass('is-hidden');
    }
});

/*I got help from an Isotope tutorial for this code */
            $(window).load(function(){
                var $container = $('.portfolioContainer');
                $container.isotope({
                    filter: '*',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
             
                $('.portfolioFilter a').click(function(){
                    $('.portfolioFilter .current').removeClass('current');
                    $(this).addClass('current');
             
                    var selector = $(this).attr('data-filter');
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                     });
                     return false;
                }); 
            });
