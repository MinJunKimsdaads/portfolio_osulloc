var controller1 = new ScrollMagic.Controller();
var animation1 =  new TimelineMax();
                    animation1
                    .to('#parallax',1,{ left:'0', height:'100%'})
                    .to('#section_container',10,{left:'-330%'})
                    // .to('#section2',3,{left:'0'})

var scene1 = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    duration: '2000%'
})
.setPin('body')
.setTween(animation1)
.addTo(controller1)
// .addIndicators();

$('#menubtn').click

    