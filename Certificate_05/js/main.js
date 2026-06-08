$(document).ready(function(){
    $('header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $("header nav > ul.depth1 > li > ul.depth2").stop().slideUp()
        $(this).find("ul.depth2").stop().slideDown()
    })
    $('header nav').on('mouseleave', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $("header nav > ul.depth1 > li > ul.depth2").stop().slideUp()
    })
    $('header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $("header nav > ul.depth1 > li > ul.depth2").stop().slideUp()
    })

    let idx = 0
    function slide(){
        if(idx < 2){
            idx++
        }else{
            idx = 0
        }
        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(idx).fadeIn()
    }
    setInterval(slide, 3000)

    $('.contents .bbs ul li').on('click', function(){
        $('.contents .bbs ul li').removeClass('active')
        $(this).addClass('active')
    })

    $('.pop_open').on('click', function(){
        $('.popup').show()
    })
    $('.popup .close button').on('click', function(){
        $('.popup').hide()
    })
})