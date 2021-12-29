$('.section2_content1').hover(function(){
    $('.bg').not('.bg1').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content1 p').css('display','none');

    $('.section2_content1').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
        // ctx.clearRect(0,0,200,200);
    })

    $('.section2_content1').click(function(){
        $('.section2_content').not('.section2_content1').css('opacity','0');
        $('.section2_content').not('.section2_content1').css('display','none');
        $('.section2_content1').css({
            'width':'100%',
            'height':'100%'
        });
        $('.section2_content i').css('fontSize','100px')
        $('.section2_content p:first-of-type').css('display','none');
        $('.section2_content .detail').css('display','block');
        ctx.clearRect(0,0,200,200);
        circle2.style.display='none';
    })
},function(){
    // $('.section2_content').not('.section2_content2').css('display','block');
    $('.section2_content').not('.section2_content1').css('display','flex');
    $('.section2_content1').css({
        'width':'31%',
        'height':'30%'
    });
    $('.bg').not('.bg1').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content1').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
    ctx.clearRect(0,0,200,200);
    circle2.style.display='none';
})

$('.section2_content2').hover(function(){
    $('.bg').not('.bg2').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content2 p').css('display','none');

    $('.section2_content2').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
        
    })

    $('.section2_content2').click(function(){
        $('.section2_content').not('.section2_content2').css('opacity','0');
        $('.section2_content').not('.section2_content2').css('display','none');
        $('.section2_content2').css({
            'width':'100%',
            'height':'100%'
        });
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
    $('.bg').not('.bg2').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content2').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content3').hover(function(){
    $('.bg').not('.bg3').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content3 p').css('display','none');

    $('.section2_content3').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg3').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content3').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content4').hover(function(){
    $('.bg').not('.bg4').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content4 p').css('display','none');

    $('.section2_content4').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg4').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content4').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content5').hover(function(){
    $('.bg').not('.bg5').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content5 p').css('display','none');

    $('.section2_content5').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg5').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content5').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content6').hover(function(){
    $('.bg').not('.bg6').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content6 p').css('display','none');

    $('.section2_content6').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg6').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content6').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content7').hover(function(){
    $('.bg').not('.bg7').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content7 p').css('display','none');

    $('.section2_content7').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg7').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content7').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content7').hover(function(){
    $('.bg').not('.bg7').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content7 p').css('display','none');

    $('.section2_content7').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg7').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content7').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content8').hover(function(){
    $('.bg').not('.bg8').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content8 p').css('display','none');

    $('.section2_content8').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg8').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content8').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

$('.section2_content9').hover(function(){
    $('.bg').not('.bg9').after().css('opacity','0.8');
    $('.section2_content p').not('.section2_content9 p').css('display','none');

    $('.section2_content9').mousemove(function(e){
        const circle2 = document.querySelector(".circle2");
        circle2.style.display='block'
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle2.style.left = (mouseX + 120) +'px';
        circle2.style.top = (mouseY + 120) + 'px';

        let ctx=circle2.getContext('2d');
        ctx.arc(100,100,45,0,2*Math.PI);
        ctx.strokeStyle='rgba(244,244,244,1)'
        ctx.lineWidth='0.5px';
        ctx.font = 'normal 20px sans-serif';
        ctx.fillStyle = 'rgba(244,244,244,1)';
        ctx.textAlign = "center";
        ctx.fillText('more',100,100);
        ctx.stroke();
    })

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
    $('.bg').not('.bg9').after().css('opacity','0.3');
    $('.section2_content i').css('fontSize','35px')
    $('.section2_content p:first-of-type').css('display','block');
    $('.section2_content').not('.section2_content9').css('opacity','1');
    $('.section2_content .detail').css('display','none');
    circle2.style.display='none';
})

// $('.section2_content3').hover(function(){
//     $('.bg').not('.bg3').after().css('opacity','0.8');
//     $('.section2_content p').not('.section2_content3 p').css('display','none');

//     $('.section2_content3').mousemove(function(e){
//         const circle = document.querySelector(".circle");
//         circle.style.display='block'
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;
//         circle.style.left = (mouseX + 120) +'px';
//         circle.style.top = (mouseY + 120) + 'px';

//         let ctx=circle.getContext('2d');
//         ctx.arc(100,100,45,0,2*Math.PI);
//         ctx.strokeStyle='rgba(244,244,244,1)'
//         ctx.lineWidth='0.5px';
//         ctx.font = 'normal 20px sans-serif';
//         ctx.fillStyle = 'rgba(244,244,244,1)';
//         ctx.textAlign = "center";
//         ctx.fillText('more',100,100);
//         ctx.stroke();
//     })

//     $('.section2_content3').click(function(){
//         $('.section2_content').not('.section2_content2').css('opacity','0');
//         $('.section2_content3').css({
//             'width':'100%',
//             'height':'100%'
//         });
//         $('.section2_content p:first-of-type').css('display','none');
//         $('.section2_content .detail').css('display','block');
//     })
// },function(){
//     $('.section2_content3').css({
//         'width':'31%',
//         'height':'30%'
//     });
//     $('.bg').not('.bg3').after().css('opacity','0.2');
//     $('.section2_content p:first-of-type').css('display','block');
//     $('.section2_content').not('.section2_content3').css('opacity','1');
//     $('.section2_content .detail').css('display','none');
//     circle.style.display='none';
// })

// $('.section2_content2').hover(function(){
//     $('.bg').not('.bg2').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg2').after().css('opacity','0.2');
// })

// $('.section2_content3').hover(function(){
//     $('.bg').not('.bg3').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg3').after().css('opacity','0.2');
// })

// $('.section2_content4').hover(function(){
//     $('.bg').not('.bg4').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg4').after().css('opacity','0.2');
// })

// $('.section2_content5').hover(function(){
//     $('.bg').not('.bg5').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg5').after().css('opacity','0.2');
// })

// $('.section2_content6').hover(function(){
//     $('.bg').not('.bg6').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg6').after().css('opacity','0.2');
// })

// $('.section2_content7').hover(function(){
//     $('.bg').not('.bg7').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg7').after().css('opacity','0.2');
// })

// $('.section2_content8').hover(function(){
//     $('.bg').not('.bg8').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg8').after().css('opacity','0.2');
// })

// $('.section2_content9').hover(function(){
//     $('.bg').not('.bg9').after().css('opacity','0.8');
// },function(){
//     $('.bg').not('.bg9').after().css('opacity','0.2');
// })

// // $('.section2_content1').click(function(){
// //     $('.section2_content').not('.section2_content1').css('opacity','0');
// //     // $('.section2_content').not('.section2_content1').css('display','none');
// //     $('.section2_content1').finish().animate({
// //         'width':'100%',
// //         'height':'100%'
// //     }, );
// //     $('.section2_content p:first-of-type').css('display','none');
// //     $('.section2_content .detail').css('display','block');
// // })

// $('.section2_content2').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content2').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content3').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content3').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content4').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content4').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content5').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content5').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content6').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content6').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content7').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content7').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content8').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content9').css('display','none');
//     $('.section2_content8').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })

// $('.section2_content9').click(function(){
//     $('.section2_content1').css('display','none');
//     $('.section2_content2').css('display','none');
//     $('.section2_content3').css('display','none');
//     $('.section2_content4').css('display','none');
//     $('.section2_content5').css('display','none');
//     $('.section2_content6').css('display','none');
//     $('.section2_content7').css('display','none');
//     $('.section2_content8').css('display','none');
//     $('.section2_content9').animate({
//         'width':'100%',
//         'height':'100%'
//     });
//     $('.section2_content p:first-of-type').css('display','none');
//     $('.section2_content .detail').css('display','block');
// })