$('#burger').click(function(){
    $('#menu').toggle('.is-active');
});
$('#close').click(function(){
    $('#menu').toggle('.is-active');
});
$('.events-share').hide();


$( document ).ready(function(){
    $('.maraphon').mouseenter(function(){
        $('.emj').hide(100);
        $('.events-share').show(500);
    });
    $('.maraphon').mouseleave(function(){
        $('.emj').show(500);
        $('.events-share').hide(100);
    });
});
