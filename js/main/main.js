var controller = new ScrollMagic.Controller();   

var animation1 =  new TimelineMax();
                    animation1
                        .to('#parallax',10,{ left:'0', height:'100%'})
                        .to('#menubtn',0.01,{color:'white'})
                        .to('#section_container',10,{left:'5%'})
                        .to('#menubtn',0.01,{color:'white'})
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
                        .to('#teaground_teabox,#teaground_arrow ',5,{opacity:'0'})
                        .to('#teaground_description ',5,{opacity:'1'})
                        .to('#section_container',10,{left:'-330%'})



var scene1 = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    // offset:150,
    duration: '3000%'
})
.setPin('body')
.setTween(animation1)
.addTo(controller)

// var scene2 = new ScrollMagic.Scene({
//     triggerElement: 'body',
//     triggerHook: 0,
//     // offset:150,
//     duration: '100%'
// })
// .setPin('#parallax')
// .setTween(animation2)
// .addTo(controller)






    