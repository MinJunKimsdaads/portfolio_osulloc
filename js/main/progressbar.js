
    $(window).scroll(function() {

        var wins = $(this).scrollTop();
        console.log(wins);
        var hei = $('body').outerHeight();
        var hei2 = $(window).outerHeight();
        var height = hei - hei2;
        var bar = wins/95;
        $('#progress_bar').css('width', bar + '%');

        if($('#parallax').position().left==0){
            $('#progress_bar').css('background-color','gray');
        } else{
            $('#progress_bar').css('background-color','black');
        }
      });

