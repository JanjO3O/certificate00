$(document).ready(function(){
    $('.top header nav > ul.depth1 > li').on('mouseenter focusin', function(){
        $('.top header nav > ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('.top header nav > ul.depth1 > li > ul.depth2').stop().slideUp()
        $(this).find("ul.depth2").stop().slideDown()
    })
    $('.top header nav').on('mouseleave', function(){
        $('.top header nav > ul.depth1 > li').removeClass('active')
        $('.top header nav > ul.depth1 > li > ul.depth2').stop().slideUp()
    })
    $('.top header nav > ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('.top header nav > ul.depth1 > li').removeClass('active')
        $('.top header nav > ul.depth1 > li > ul.depth2').stop().slideUp()
    })

    function slide(){
        $('.top .content .slide ul').animate({top: "-400px"}, 1000, function(){
            $('.top .content .slide ul').append($('.top .content .slide ul li:first-child'))
            $('.top .content .slide ul').css({top:0})
        })
    }
    setInterval(slide, 3000)

    $('.top .content .bbs > ul > li').on('click', function(){
        $('.top .content .bbs > ul > li').removeClass('active')
        $(this).addClass('active')
    })
    
    $('.pop_open').on('click', function(){
        $('.popup').show()
    })
    $('.popup .close button').on('click', function(){
        $('.popup').hide()
    })
})