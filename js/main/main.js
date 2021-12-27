var controller1 = new ScrollMagic.Controller();
var animation1 =  new TimelineMax();
                    animation1
                    .to('#parallax',1.5,{ left:'0', height:'100%'})
                    .to('#menubtn',0.5,{color:'white'})
                    .to('#section_container',1.5,{left:'5%'})
                    .to('#menubtn',0.5,{color:'black'})
                    .to('#section_container',3,{left:'-80%'})
                    .to('#section_container',3,{left:'-90%'})
                    .to('#menubtn',0.5,{color:'white'})
                    .to('#section_container',3,{left:'-120%'})
                    .to('#menubtn',0.5,{color:'black'})
                    .to('#section_container',5,{left:'-140%'})
                    .to('#section_container',5,{left:'-180%'})
                    .to('#menubtn',0.5,{color:'white'})
                    .to('#section2',0.5,{backgroundColor:'rgba(22,22,22)'})
                    .to('#section_container',10,{left:'-230%'})
                    .to('.section3_box1',5,{left:'-91%'})
                    .to('.section3_box2',5,{left:'-88%'})
                    .to('.section3_box3',5,{left:'-85%'})
                    .to('.section3_box1,.section3_box2,.section3_box3',5,{left:'-94%'})
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

// $('#menubtn').click

    