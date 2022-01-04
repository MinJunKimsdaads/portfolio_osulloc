let intro=document.getElementById('intro');
let wrap=document.getElementById('wrap');

setTimeout(function(){
    intro.style.webkitBackgroundClip='text';
    intro.style.webkitTextFillColor='transparent';
    intro.innerText='오설록';
    setTimeout(function(){
        intro.style.display='none';
        wrap.style.display='block';
    },1500)
},2000)