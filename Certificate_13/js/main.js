$(document).ready(function(){
    $('header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeOut()
        $(this).find("ul.depth2").stop().fadeIn()
    })
    $('header nav').on('mouseleave', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeOut()
    })
    $('header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav > ul.depth1 > li').removeClass('active')
        $('header nav > ul.depth1 > li > ul.depth2').stop().fadeOut()
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
})