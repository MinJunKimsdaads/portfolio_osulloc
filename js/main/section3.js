$('image').hover(function(){
    $('.test1').stop().animate({'y':'10.5%'},700);
    $('.test2').stop().animate({'y':'5%'},700);
    $('.test3').stop().animate({'y':'16%'},700);
    $('.test4').stop().animate({'y':'10.5%'},700);
    $(this).removeClass('gray');
}, function(){
    $('.test1').stop().animate({'y':'5%'},700);
    $('.test2').stop().animate({'y':'15.5%'},700);
    $('.test3').stop().animate({'y':'15.5%'},700);
    $('.test4').stop().animate({'y':'26%'},700);
    $(this).addClass('gray');
})

var section3img1=document.getElementById('section3img1');
var svgmask1=document.getElementById('svgmask1');
var section3description1=document.getElementById('section3description1')


section3img1.addEventListener('mousemove',function (e) {
    // const circle = document.querySelector(".circle2");
    // circle.style.display='block'
    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // circle.style.left = (mouseX + 120) +'px';
    // circle.style.top = (mouseY + 120) + 'px';

    // let ctx=circle.getContext('2d');
    // ctx.arc(100,100,90,0,2*Math.PI);
    // ctx.strokeStyle='rgba(244,244,244,1)'
    // ctx.lineWidth=0.1;
    // ctx.font = '100 30px gothic';
    // ctx.fillStyle = 'rgba(244,244,244,1)';
    // ctx.textAlign = "center";
    // ctx.fillText('more',100,100);
    // ctx.stroke();
    
    // for(var i=0;i<300;i++){
    //     draw(i);
    //     // ctx.clearRect(0,0,200,200);
    // };
    // function draw(delay){
    //     let drawing = setTimeout(function(){
    //         ctx.clearRect(0,0,200,200);
    //         ctx.beginPath();
    //         ctx.arc(100,100,100,0,2*Math.PI/100*delay);
    //         ctx.strokeStyle='gray'
    //         ctx.stroke();
    //     },delay*10);
    //     // clearTimeout(drawing);
    // }

    section3img1.addEventListener('click',function(){
        svgmask1.style.display='none';
        section3img1.style.opacity=0.3;
        section3description1.style.display='block'
    })

    section3img1.addEventListener('mouseout',function(){
        // circle.style.display='none';
        svgmask1.style.display='block';
        section3img1.style.opacity=1;
        section3description1.style.display='none'
    })
})

var section3img2=document.getElementById('section3img2');
var svgmask2=document.getElementById('svgmask2');
var section3description2=document.getElementById('section3description2')
// var circle=document.getElementById('circle');

// const circle = document.querySelector(".circle");
//     circle.style.display='block'
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     circle.style.left = (mouseX + 120) +'px';
//     circle.style.top = (mouseY + 120) + 'px';

section3img2.addEventListener('mousemove',function (e) {
    // const circle = document.querySelector(".circle");
    // circle.style.display='block'
    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // circle.style.left = (mouseX + 120) +'px';
    // circle.style.top = (mouseY + 120) + 'px';

    // let ctx=circle.getContext('2d');
    // ctx.arc(100,100,90,0,2*Math.PI);
    // ctx.strokeStyle='rgba(244,244,244,1)'
    // ctx.lineWidth=0.1;
    // ctx.font = '100 30px gothic';
    // ctx.fillStyle = 'rgba(244,244,244,1)';
    // ctx.textAlign = "center";
    // ctx.fillText('more',100,100);
    // ctx.stroke();
    
    // for(var i=0;i<300;i++){
    //     draw(i);
    //     // ctx.clearRect(0,0,200,200);
    // };
    // function draw(delay){
    //     let drawing = setTimeout(function(){
    //         ctx.clearRect(0,0,200,200);
    //         ctx.beginPath();
    //         ctx.arc(100,100,100,0,2*Math.PI/100*delay);
    //         ctx.strokeStyle='gray'
    //         ctx.stroke();
    //     },delay*10);
    //     // clearTimeout(drawing);
    // }

    section3img2.addEventListener('click',function(){
        svgmask2.style.display='none';
        section3img2.style.opacity=0.3;
        section3description2.style.display='block'
    })

    section3img2.addEventListener('mouseout',function(){
        // circle.style.display='none';
        svgmask2.style.display='block';
        section3img2.style.opacity=1;
        section3description2.style.display='none'
    })
})

var section3img3=document.getElementById('section3img3');
var svgmask3=document.getElementById('svgmask3');
var section3description3=document.getElementById('section3description3')
// var circle=document.getElementById('circle');

// const circle = document.querySelector(".circle");
//     circle.style.display='block'
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     circle.style.left = (mouseX + 120) +'px';
//     circle.style.top = (mouseY + 120) + 'px';

section3img3.addEventListener('mousemove',function (e) {
    // const circle = document.querySelector(".circle");
    // circle.style.display='block'
    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // circle.style.left = (mouseX + 120) +'px';
    // circle.style.top = (mouseY + 120) + 'px';

    // let ctx=circle.getContext('2d');
    // ctx.arc(100,100,90,0,2*Math.PI);
    // ctx.strokeStyle='rgba(244,244,244,1)'
    // ctx.lineWidth='0.5px';
    // ctx.font = 'normal 30px sans-serif';
    // ctx.fillStyle = 'rgba(244,244,244,1)';
    // ctx.textAlign = "center";
    // ctx.fillText('more',100,100);
    // ctx.stroke();
    
    // for(var i=0;i<300;i++){
    //     draw(i);
    //     // ctx.clearRect(0,0,200,200);
    // };
    // function draw(delay){
    //     let drawing = setTimeout(function(){
    //         ctx.clearRect(0,0,200,200);
    //         ctx.beginPath();
    //         ctx.arc(100,100,100,0,2*Math.PI/100*delay);
    //         ctx.strokeStyle='gray'
    //         ctx.stroke();
    //     },delay*10);
    //     // clearTimeout(drawing);
    // }

    section3img3.addEventListener('click',function(){
        svgmask3.style.display='none';
        section3img3.style.opacity=0.3;
        section3description3.style.display='block'
    })

    section3img3.addEventListener('mouseout',function(){
        // circle.style.display='none';
        svgmask3.style.display='block';
        section3img3.style.opacity=1;
        section3description3.style.display='none'
    })
})


