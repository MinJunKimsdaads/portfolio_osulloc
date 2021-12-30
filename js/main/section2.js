$('.section2_content1').hover(function(){
    // $('.bg').not('.bg1').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content1 p').css('display','none');
    $('.section2_content1 p:first-of-type').text('클릭')

    // $('.section2_content1').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })
    // circle2.style.display='none';

    $('.section2_content1').click(function(){
        $('.section2_content').not('.section2_content1').css('opacity','0');
        $('.section2_content').not('.section2_content1').css('display','none');
        $('.section2_content1').css({
            'width':'100%',
            'height':'100%'
        });
        $('.bg').not('.bg1').after().css('opacity','0.5');
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })

},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content1').css('display','flex');
    $('.section2_content1').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg1').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content1').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content1 p:first-of-type').html('최대 공극률 75%</br>화산희토')
    // circle2.style.display='none';
    // ctx.clearRect(0,0,200,200);
    // ctx.beginPath();
})

$('.section2_content2').hover(function(){
    
    $('.section2_content p').not('.section2_content2 p').css('display','none');
    $('.section2_content2 p:first-of-type').text('클릭')

    // $('.section2_content2').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content2').click(function(){
        $('.section2_content').not('.section2_content2').css('opacity','0');
        $('.section2_content').not('.section2_content2').css('display','none');
        $('.section2_content2').css({
            'width':'100%',
            'height':'100%'
        });
        $('.bg').not('.bg2').after().css('opacity','0.5');
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content2').css('display','flex');
    $('.section2_content2').css({
        'width':'31%',
        'height':'30%'
    });
    $('.section2_content2 p:first-of-type').html('129,600분<br>녹차 싹이 녹차로 자라는 시간')
    $('.bg').not('.bg2').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content2').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    // circle2.style.display='none';
})

$('.section2_content3').hover(function(){
    
    $('.section2_content p').not('.section2_content3 p').css('display','none');
    $('.section2_content3 p:first-of-type').text('클릭')

    // $('.section2_content3').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content3').click(function(){
        $('.section2_content').not('.section2_content3').css('opacity','0');
        $('.section2_content').not('.section2_content3').css('display','none');
        $('.section2_content3').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content3').css('display','flex');
    $('.section2_content3').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg3').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content3').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content3 p:first-of-type').html('394,200시간<br>아름다운 집념')
    // circle2.style.display='none';
})

$('.section2_content4').hover(function(){
    $('.section2_content p').not('.section2_content4 p').css('display','none');
    $('.section2_content4 p:first-of-type').text('클릭')

    // $('.section2_content4').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content4').click(function(){
        $('.section2_content').not('.section2_content4').css('opacity','0');
        $('.section2_content').not('.section2_content4').css('display','none');
        $('.section2_content4').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content4').css('display','flex');
    $('.section2_content4').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg4').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content4').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content4 p:first-of-type').html('150여만명<br>티뮤지엄 연간 관람객')
    // circle2.style.display='none';
})

$('.section2_content5').hover(function(){

    $('.section2_content p').not('.section2_content5 p').css('display','none');
    $('.section2_content5 p:first-of-type').text('클릭')

    // $('.section2_content5').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content5').click(function(){
        $('.section2_content').not('.section2_content5').css('opacity','0');
        $('.section2_content').not('.section2_content5').css('display','none');
        $('.section2_content5').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content5').css('display','flex');
    $('.section2_content5').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg5').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content5').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content5 p:first-of-type').html('60초<br>차를 기다리는 잠깐의 여유')
    // circle2.style.display='none';
})

$('.section2_content6').hover(function(){
    
    $('.section2_content p').not('.section2_content6 p').css('display','none');
    $('.section2_content6 p:first-of-type').text('클릭')

    // $('.section2_content6').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content6').click(function(){
        $('.section2_content').not('.section2_content6').css('opacity','0');
        $('.section2_content').not('.section2_content6').css('display','none');
        $('.section2_content6').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content6').css('display','flex');
    $('.section2_content6').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg6').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content6').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content6 p:first-of-type').html('연평균 해무 발생일수 25일<br>지혜롭게 거리두기')
    // circle2.style.display='none';
})

$('.section2_content7').hover(function(){
    $('.section2_content p').not('.section2_content7 p').css('display','none');
    $('.section2_content7 p:first-of-type').text('클릭')

    // $('.section2_content7').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content7').click(function(){
        $('.section2_content').not('.section2_content7').css('opacity','0');
        $('.section2_content').not('.section2_content7').css('display','none');
        $('.section2_content7').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content7').css('display','flex');
    $('.section2_content7').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg7').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content7').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content7 p:first-of-type').html('연평균 초속 4~7m<br>바람의 섬')
    // circle2.style.display='none';
})

$('.section2_content8').hover(function(){
    
    $('.section2_content p').not('.section2_content8 p').css('display','none');
    $('.section2_content8 p:first-of-type').text('클릭')

    // $('.section2_content8').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content8').click(function(){
        $('.section2_content').not('.section2_content8').css('opacity','0');
        $('.section2_content').not('.section2_content8').css('display','none');
        $('.section2_content8').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content8').css('display','flex');
    $('.section2_content8').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg8').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content8').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content8 p:first-of-type').html('연평균 기온 16도<br>명품 녹차 탄생 온도')
    // circle2.style.display='none';
})

$('.section2_content9').hover(function(){
    $('.section2_content p').not('.section2_content9 p').css('display','none');
    $('.section2_content9 p:first-of-type').text('클릭')

    // $('.section2_content9').mousemove(function(e){
    //     const circle2 = document.querySelector(".circle2");
    //     circle2.style.display='block'
    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;
    //     circle2.style.left = (mouseX + 120) +'px';
    //     circle2.style.top = (mouseY + 120) + 'px';
    // })


    $('.section2_content9').click(function(){
        $('.section2_content').not('.section2_content9').css('opacity','0');
        $('.section2_content').not('.section2_content9').css('display','none');
        $('.section2_content9').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content9').css('display','flex');
    $('.section2_content9').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg9').after().css('opacity','0.1');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content9').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    $('.section2_content9 p:first-of-type').html('200m<br>오설록 차밭의 해발 높이')
    // circle2.style.display='none';
})
