$('.btn-nav').on({
    'click':function(){
        $('.nav').toggleClass('active');                
    }
})
$('.main-nav>li').on({
    'click':function(){ 
        $('.main-nav>li').not($(this)).children('.sub-nav').slideUp(200);
        $(this).children('.sub-nav').slideToggle(200);
        $('.main-nav>li').not($(this)).removeClass('active');
        $(this).toggleClass('active');

    }
})

