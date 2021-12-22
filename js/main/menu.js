$('#menubtn').click(
    function(){
    var ss = $('#container').find('.menu');
    if(ss.height()==0){
        $('.menu').stop().animate({height:'100%'}, 1000);
        $('#menubtn').text('ClOSE');
        $('#menubtn').css('color','white');
    } else{
        $('.menu').stop().animate({height:'0%'}, 1000);
        $('#menubtn').text('MENU');
        $('#menubtn').css('color','black');
    }
})