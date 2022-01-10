$('.menutitle1').click(function(){
    $('#menu1').css('display','block');
    $('#menu2').css('display','none');
    $('#menu3').css('display','none');
    $('#menu').addClass('menubg')
    $('.menutitle1').css('color','#74a767');
    $('.menutitle2').css('color','black');
    $('.menutitle3').css('color','black');
})

$('#arrow_right').click(function(){
    $('#menu1OptionList > div:last').prependTo('#menu1OptionList');
    $('#menu1OptionList').css('left','-66.66%');
    $('#menu1OptionList').stop().animate({left:'-33.33%'},500);
})

$('#arrow_left').click(function(){
    $('#menu1OptionList > div:first').appendTo('#menu1OptionList');
    $('#menu1OptionList').css('left','0');
    $('#menu1OptionList').stop().animate({left:'-33.33%'},500);
})