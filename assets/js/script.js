
$(document).ready(() => {

    // open responsive nav functionality
    $('#menu').click(() => {
        $('nav').toggleClass('showNav')
        $('html, body').css("overflow", "hidden")
    })

    // close responsive nav functionality
    $('#close').click(() => {
        $('nav').toggleClass('showNav')
        $('html, body').css("overflow", "visible")
    })

    // play video functionality
    $('article:first-child, .articles-list .wrapper ul li:nth-of-type(2) figure, .articles-list .wrapper ul li:nth-of-type(3) figure').click(() => {
        $('.video .wrapper').fadeIn();
        $('.video .wrapper').css('display', 'flex');
        $('video').trigger('play');
    })

    // close video functionality
    $('#close-video').click(() => {
        $('video').trigger('pause');
        $('.video .wrapper').fadeOut();
    })
})