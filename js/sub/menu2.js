$('.menutitle2').click(function(){
    $('#menu2').css('display','block');
    $('#menu1').css('display','none');
    $('#menu3').css('display','none');
    $('#menu').removeClass('menubg')
    $('.menutitle2').css('color','#74a767');
    $('.menutitle1').css('color','black');
    $('.menutitle3').css('color','black');
})

$('.menu2btn1').click(function(){
    $(this).css('backgroundColor','black');
    $('.menu2btn2').css('backgroundColor','white');
    $('.menu2btn3').css('backgroundColor','white');
    $('#menu2').css('backgroundImage','url("./image/sub/menu2Option1.png")');
    $('#menu2title p').stop().animate({marginTop:'100px',opacity:'0'},900,function(){
        $('#menu2title p').text('티 팔미까레');
        $('#menu2title p').css('marginTop','0');
        $('#menu2title p').css('opacity','1');
    })
    $('#menu2des p').stop().animate({marginTop:'70px',opacity:'0'},900,function(){
        $('#menu2des p').html('풍부한 버터 풍미와 바삭한 식감의<br>팔미까레에 3가지 티 초콜릿을 디핑한 디저트');
        $('#menu2des p').css('marginTop','0');
        $('#menu2des p').css('opacity','1');
    })
})

$('.menu2btn2').click(function(){
    $(this).css('backgroundColor','black');
    $('.menu2btn1').css('backgroundColor','white');
    $('.menu2btn3').css('backgroundColor','white');
    $('#menu2').css('backgroundImage','url("./image/sub/menu2Option2.png")');
    $('#menu2title p').stop().animate({marginTop:'100px',opacity:'0'},900,function(){
        $('#menu2title p').text('북촌의 기와');
        $('#menu2title p').css('marginTop','0');
        $('#menu2title p').css('opacity','1');
    })
    $()
    $('#menu2des p').stop().animate({marginTop:'70px',opacity:'0'},900,function(){
        $('#menu2des p').html('북촌 한옥의 대표 볼거리인 "기와"를<br>형상화한 겉은 바삭하고 속은 쫀득한 녹차 와플');
        $('#menu2des p').css('marginTop','0');
        $('#menu2des p').css('opacity','1');
    })
})

$('.menu2btn3').click(function(){
    $(this).css('backgroundColor','black');
    $('.menu2btn1').css('backgroundColor','white');
    $('.menu2btn2').css('backgroundColor','white');
    $('#menu2').css('backgroundImage','url("./image/sub/menu2Option3.png")');
    $('#menu2title p').stop().animate({marginTop:'100px',opacity:'0'},900,function(){
        $('#menu2title p').text('북촌의 색동');
        $('#menu2title p').css('marginTop','0');
        $('#menu2title p').css('opacity','1');
    })
    $('#menu2des p').stop().animate({marginTop:'70px',opacity:'0'},900,function(){
        $('#menu2des p').html('고소하게 구워낸 4가지 떡 디저트와 한국의<br>아름다운 색동을 표현한 4색 디핑소스');
        $('#menu2des p').css('marginTop','0');
        $('#menu2des p').css('opacity','1');
    })
})
