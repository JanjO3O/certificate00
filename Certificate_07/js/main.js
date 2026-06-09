$(document).ready(function(){
    $('header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $(this).find("ul.depth2").fadeIn()
    })
    $('header nav').on('mouseleave', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).find("ul.depth2").fadeOut()
    })
    $('header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).find("ul.depth2").fadeOut()
    })

    function slide(){
        $('.slide ul').animate({left: "-800px"}, 1000, function(){
            $('.slide ul').append($('.slide ul li:first-child'))
            $('.slide ul').css({left: 0})
        })
    }
    setInterval(slide, 3000)

    $('.pop_open').on('click', function(){
        $('.popup').show()
    })
    $('.popup .close button').on('click', function(){
        $('.popup').hide()
    })
    
})