$(document).ready(function(){
    $('header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('header nav > ul.depth1 > li > ul.depth2 , header .menu_bg').stop().fadeIn()
    })
    $('header nav > ul.depth1 > li').on('mouseleave', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2 , header .menu_bg').stop().fadeOut()
    })
    $('header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2 , header .menu_bg').stop().fadeOut()
    })

    function slide(){
        $('.cont01 .slide ul').animate({left: "-100%"}, 1000, function(){
            $('.cont01 .slide ul').append($('.cont01 .slide ul li:first-child'))
            $('.cont01 .slide ul').css({left:0})
        })
    }
    setInterval(slide, 3000)
    
})