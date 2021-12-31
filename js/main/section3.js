$('#image1').hover(function(){
    $('.test1').stop().animate({'y':'10.5%'},700);
    $('.test2').stop().animate({'y':'5%'},700);
    $('.test3').stop().animate({'y':'16%'},700);
    $('.test4').stop().animate({'y':'10.5%'},700);
    $(this).removeClass('gray');

    $('#image1').click(function(){
        click(svgmask1,section3img1,section3description1);
        $('.section3_description1 div').stop().animate({'top':'10%'},7000)
    })

}, function(){
    $('.test1').stop().animate({'y':'5%'},700);
    $('.test2').stop().animate({'y':'15.5%'},700);
    $('.test3').stop().animate({'y':'15.5%'},700);
    $('.test4').stop().animate({'y':'26%'},700);
    $(this).addClass('gray');
    clickout(svgmask1,section3img1,section3description1);
    $('.section3_description1 div').stop().animate({'top':'10%'},7000)
})

$('#image2').hover(function(){
    $('.test1').stop().animate({'y':'10.5%'},700);
    $('.test2').stop().animate({'y':'5%'},700);
    $('.test3').stop().animate({'y':'16%'},700);
    $('.test4').stop().animate({'y':'10.5%'},700);
    $(this).removeClass('gray');

    $('#image2').click(function(){
        click(svgmask2,section3img2,section3description2);
        $('.section3_description2 div').stop().animate({'top':'10%'},7000)
    })

}, function(){
    $('.test1').stop().animate({'y':'5%'},700);
    $('.test2').stop().animate({'y':'15.5%'},700);
    $('.test3').stop().animate({'y':'15.5%'},700);
    $('.test4').stop().animate({'y':'26%'},700);
    $(this).addClass('gray');
    clickout(svgmask2,section3img2,section3description2);
    $('.section3_description2 div').stop().animate({'top':'60%'})
})

$('#image3').hover(function(){
    $('.test1').stop().animate({'y':'10.5%'},700);
    $('.test2').stop().animate({'y':'5%'},700);
    $('.test3').stop().animate({'y':'16%'},700);
    $('.test4').stop().animate({'y':'10.5%'},700);
    $(this).removeClass('gray');
    $('#image3').click(function(){
        click(svgmask3,section3img3,section3description3);
        $('.section3_description3 div').stop().animate({'top':'10%'},7000)
    })

}, function(){
    $('.test1').stop().animate({'y':'5%'},700);
    $('.test2').stop().animate({'y':'15.5%'},700);
    $('.test3').stop().animate({'y':'15.5%'},700);
    $('.test4').stop().animate({'y':'26%'},700);
    $(this).addClass('gray');
    clickout(svgmask3,section3img3,section3description3);
    $('.section3_description3 div').stop().animate({'top':'60%'})
})

var section3img1=document.getElementById('section3img1');
var svgmask1=document.getElementById('svgmask1');
var section3description1=document.getElementById('section3description1')

var section3img2=document.getElementById('section3img2');
var svgmask2=document.getElementById('svgmask2');
var section3description2=document.getElementById('section3description2')

var section3img3=document.getElementById('section3img3');
var svgmask3=document.getElementById('svgmask3');
var section3description3=document.getElementById('section3description3')

function click(svgmask,section3img,section3description){
    svgmask.style.display='none';
    section3img.style.opacity=0.3;
    section3description.style.display='block';
    // section3description.style.zIndex='30';
}

function clickout(svgmask,section3img,section3description) {
    svgmask.style.display='block';
    section3img.style.opacity=1;
    section3description.style.display='none';
    // section3description.style.zIndex='1';
}

// function descriptionup(){
//     section3description.style.top
// }





