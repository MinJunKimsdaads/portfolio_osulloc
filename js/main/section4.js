let section4=document.getElementById('section4');
const circle = document.querySelector('.circle');

window.addEventListener('mousemove',function(){
    let test5=document.getElementById('test5')
    if(section4.getBoundingClientRect().left<=0){
        section4.addEventListener('mousemove', function nextCircle(e){
            const circle = document.querySelector('.circle');
            circle.style.display='block';
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            circle.style.left = mouseX +50+ 'px';
            circle.style.top = mouseY +50+ 'px';
            section4.addEventListener('click', otherpage);
        })
    } else if(section4.getBoundingClientRect().left>=0){
        circle.style.display='none';
    }
});

function otherpage(){
    $('#test55').css('display','none');
    $('#test66').css('display','none');
    $('#test77').css('display','none');
    $('#test88').css('display','none');
    $('#svgmask4').css('display','none');
    $('.wrap4').css('width','100%');
    $('.wrap4').css('height','100%');
    $('.section4_video').animate({
        'width':'100%',
        'height':'100%',
        'top':'0',
        'left':'0'
    })
    setTimeout(function(){
        location.href='sub.html'

    },1500)
}

