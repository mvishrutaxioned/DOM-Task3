
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
})