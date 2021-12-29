let section4=document.getElementById('section4');
// let test5=document.getElementById('test5')
// document.addEventListener('scroll',function(){
//     console.log(section4.getBoundingClientRect().left);
// })

// function resize() {
//     let test5=document.getElementById('test5')
//     if(section4.getBoundingClientRect().left<=0){
//         test5.style.display='none';
//     }
// }

window.addEventListener('scroll',function(){
    // console.log(section4.getBoundingClientRect().left)
    let test5=document.getElementById('test5')
    if(section4.getBoundingClientRect().left<=0){
        // alert('가로스크롤 시 위치값 반환 확인')
    }
});

