$(document).ready(function(){
    $('header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeIn()
        $('header .menu_bg').stop().fadeIn()
    })
    $('header nav').on('mouseleave', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeOut()
        $('header .menu_bg').stop().fadeOut()
    })
    $('header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeOut()
        $('header .menu_bg').stop().fadeOut()
    })
    
    let idx = 0
        function slide(){
            if(idx < 2){
                idx++
            }else{
                idx = 0
            }
            $('.content .cont01 .slide ul li').fadeOut()
            $('.content .cont01 .slide ul li').eq(idx).fadeIn()
        }
        setInterval(slide, 3000)

        $('.pop_open').on('click', function(){
            $('.popup').show()
        })
        $('.popup .close button').on('click', function(){
            $('.popup').hide()
        })
})