function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
// Typewriter effect using Typejs
$(function(){
    var typed = new Typed(".type", {
        strings: ["I love all things food.", "I have a Shih Tzu named Lulu.", "I build websites."],
        smartBackspace: true,
        typeSpeed: 50,
        backSpeed: 50,
        autoInsertCss: true,
        loop: true
    });
    //Caret animation
    $('.caret').ready(function (){
        var caret = $('.caret');
        startAnimation();
        function startAnimation() {
            caret.animate({bottom: '-=120'}, 2000);
            caret.animate({bottom: '+=120'}, 2000, startAnimation);
        }
    });
    //Button slow redirect
    $('#home').click(function () {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $('#gotoAbout').click(function () {
        $('html, body').animate({ scrollTop: $(".bioBackground").offset().top }, "slow");
        return false;
    });
    $('#gotoAbout2').click(function () {
        $('html, body').animate({ scrollTop: $(".bioBackground").offset().top }, "slow");
        return false;
    });
    $('#gotoExperience').click(function () {
        $('html,body').animate({ scrollTop: $("#experience").offset().top }, "slow");
        return false;
    });
    //In view fade in
    $(window).on('scroll',function() {
        $('.fading').each(function() {
            if (isScrolledIntoView($(this))) {
                $(this).addClass("fadeIn");
            }// else {
               // $(this).removeClass("fadeIn");

        })
    });
});
