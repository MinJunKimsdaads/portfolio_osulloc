$('#menubtn').click(
    function(){
    var ss = $('#container').find('.menu');
    $('.menu').css('opacity','1');
    $('.menu').stop().animate({height:'100%'}, 1000);
})

$('#mymenubtn').click(
    function(){
    var dd = $('#container').find('.menu');
    $('.menu').css('opacity','0');
    $('.menu').stop().animate({height:'0'}, 1000);
})