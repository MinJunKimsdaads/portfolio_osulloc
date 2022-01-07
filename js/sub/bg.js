


let sectionimg=document.getElementById('sectionimg');
let section1=document.getElementById('section1');
window.addEventListener('scroll',function(){
    const section1title=document.getElementById('section1title').getBoundingClientRect().top;
    const section1des1=document.getElementById('section1des1').getBoundingClientRect().top;
    const section1des2=document.getElementById('section1des2').getBoundingClientRect().top;
    const section1des3=document.getElementById('section1des3').getBoundingClientRect().top;
    // console.log(section1des1);
    // console.log(section1des2);
    // console.log(section1des3);

    // console.log(window.innerHeight);
    if(section1des1>=window.innerHeight&&section1des2>=window.innerHeight&&section1des3>=window.innerHeight){
        sectionimg.style.backgroundImage='url("./image/sub/bg0.png")';
        section1.style.backgroundColor='#CACBCD'
    }else if(section1title<=0&&section1des2>=window.innerHeight&&section1des3>=window.innerHeight){
        sectionimg.style.backgroundImage='url("./image/sub/bg1.png")';
        section1.style.backgroundColor='#7D4D35';
    }else if(section1title<=0&&section1des1<=0&&section1des3>=window.innerHeight){
        sectionimg.style.backgroundImage='url("./image/sub/bg2.png")';
        section1.style.backgroundColor='#0C0D0A';
    }else if(section1title<=0&&section1des1<=0&&section1des2<=0){
        sectionimg.style.backgroundImage='url("./image/sub/bg3.png")';
        section1.style.backgroundColor='#061818';
    }

})