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