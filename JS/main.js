$(document).ready(function(){
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        showCursor: false
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".navbar").addClass('change');
            $(".nav-link").addClass('change');
        }else{
            $(".navbar").removeClass('change');
            $(".nav-link").removeClass('change');
        }
    });
    
    // when projwct is hovered
    $(".project__sunny").mouseover(function(){
        $(".project__sunny a").addClass("show");
    }),$(".project__sunny").mouseout(function(){
        $(".project__sunny a").removeClass("show");
    });
    $(".project__rubi").mouseover(function(){
        $(".project__rubi a").addClass("show");
    }),$(".project__rubi").mouseout(function(){
        $(".project__rubi a").removeClass("show");
    });
    $(".project__bachem").mouseover(function(){
        $(".project__bachem a").addClass("show");
    }),$(".project__bachem").mouseout(function(){
        $(".project__bachem a").removeClass("show");
    });
});


