$(document).ready(function(){
    AOS.init();
      // Hero typed
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });

    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });
});