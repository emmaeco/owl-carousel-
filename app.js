$('.hero-slider').owlCarousel({
    loop: true,
    responsiveClass:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:100,
    smartSpeed:700,
    autoplayHoverPause:true,
    
 
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})