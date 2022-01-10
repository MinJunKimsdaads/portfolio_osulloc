$('.menutitle3').click(function(){
    $('#menu3').css('display','block');
})

$('#menu3exit i').click(function(){
    $('#menu3').css('display','none');
})

let number=1;
$('.fa-chevron-right').click(function(){
    number++;
    if(number==4){
        number=1;
    }
    $('#menu3video video').attr('src','./image/sub/menu3Option'+number+'.mp4');
    // console.log($('#menu3video video').attr())
    // alert('adsasd')
})

$('.fa-chevron-left').click(function(){
    number--;
    if(number==0){
        number=3;
    }
    $('#menu3video video').attr('src','./image/sub/menu3Option'+number+'.mp4');
    // console.log($('#menu3video video').attr())
    // alert('adsasd')
})
