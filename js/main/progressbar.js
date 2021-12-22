
    $(window).scroll(function() {

        var wins = $(this).scrollTop();
        // console.log(wins);
        var hei = $('body').outerHeight();
        var hei2 = $(window).outerHeight();
        var height = hei - hei2;
        var bar = wins/100;
        $('#progress_bar').css('width', wins/192.2 + '%');

        if($('#parallax').position().left==0){
            $('#progress_bar').css('background-color','gray');
            // $('#menubtn').css('color','white');
        } else{
            $('#progress_bar').css('background-color','black');
            // $('#menubtn').css('color','black');
        }
        console.log($('#section1').offset().left);
      });


    //   if($('#parallax').offset().left==0)
    // $('#menubtn').click(function(){
    //     $('.menu').stop().fadeIn();
    // })


