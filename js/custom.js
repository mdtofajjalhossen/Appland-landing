(function($){
"use strict" 
    /*====== onpage scrolling js ========*/
    $("#nav").onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 1050,
    });
    /*====== End onpage scrolling js ========*/
    /*---------------scroll-top-js--------*/
    var scrT= $("a[href='#'].scroll-t");
    scrT.on("click", function(e){
        e.preventDefault();
        $("body,html").animate({ scrollTop: $(document).height() }, 1200);
    });
    /*--------------- End scroll-top-js--------*/
    
    /*===========Start screenshot_carousel js ===========*/
    function screenshotSlider(){
        var screenshot = $("#screen-shot,#screen-shot2");
        if( screenshot.length ){
            screenshot.owlCarousel({
                loop:true,
                margin:0,
                items: 3,
                nav:true,
                dots:false,
                autoplay: true,
                navContainer:".screenshot_area",
                smartSpeed: 2000,
                navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    400:{
                        items:2, 
                    },
                    500:{
                        items:3, 
                    }, 
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    screenshotSlider();
    /*===========End screenshot_carousel js ===========*/

    /*=========== screenshots slider js ===========*/
    function screenShot(){
        var screenshots_slider = $(".screenshots-slider");
        if( screenshots_slider.length){
            screenshots_slider.owlCarousel({
                loop:true,
                margin:30,
                items:3,
                autoplay:true,
                nav:false,
                smartSpeed:700,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:2, 
                    },
                    500:{
                        items:3, 
                    }, 
                    768:{
                        items:3,   
                    },
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    screenShot();
   
    /*===========Start testimonial_carousel js ===========*/
    function testimonialSlider(){
        var testslider = $("#testimonial_carousel");
        if( testslider.length ){
            testslider.owlCarousel({
                loop:true,
                margin:30,
                items: 1,
                nav:true,
                dots:false,
                autoplay: true,
                navContainer:".testimonial_carousel",
                smartSpeed: 2000,
                navText: ['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>']
            })
        }
    }
    testimonialSlider();
    /*===========End testimonial_carousel js ===========*/
    
    
    /*===========Start testimonial_carousel js ===========*/
    function testimonialSliderthree(){
        var testsliderthree = $(".test-carousel-three");
        if( testsliderthree.length ){
            testsliderthree.owlCarousel({
                loop:true,
                margin:30,
                items: 1,
                nav:false,
                dots:true,
                autoplay: true,
                smartSpeed: 2000,
            })
        }
    }
    testimonialSliderthree();
    /*===========End testimonial_carousel js ===========*/
    
    /*===========Start screenshot_carousel js ===========*/
    function testSlidersix(){
        var testslider_6 = $("#test_c_six");
        if( testslider_6.length ){
            testslider_6.owlCarousel({
                loop:true,
                margin:0,
                items: 2,
                nav:true,
                autoplay: true,
                navContainer: '.testimonial_area_two',
                smartSpeed: 2000,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    680:{
                        items:2, 
                    }, 
                },
            })
        }
    }
    testSlidersix();
    /*===========End screenshot_carousel js ===========*/
    
    /*===========Start clients logo js ===========*/
    function clientsSlider(){
        var clientslg_slider = $(".clients-lg-slider");
        if( clientslg_slider.length){
            clientslg_slider.owlCarousel({
                loop:true,
                margin:0,
                items:4,
                autoplay:true,
                smartSpeed:1000,
                nav: false,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:2, 
                    },
                    550:{
                        items:3, 
                    }, 
                    992:{
                        items:4,   
                    }
                },
            })
        }
    }
    clientsSlider();
    /*===========End clients logo js ===========*/
    
    /*===========Start team-carousel js ===========*/
    function teamslider(){
        var teamS = $(".team-carousel");
        if( teamS.length ){
            teamS.owlCarousel({
                loop:true,
                margin:30,
                items: 3,
                nav:false,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    420:{
                        items:2, 
                    },
                    768:{
                        items:3, 
                    }, 
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    teamslider();
    /*===========End team-carousel js ===========*/
    
    /*===========Start blog-slider js ===========*/
    function blogslider(){
        var blogS = $("#blog-slider");
        if( blogS.length ){
            blogS.owlCarousel({
                loop:true,
                margin:30,
                items: 3,
                nav:false,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1, 
                    },
                    550:{
                        items:2, 
                    },
                    768:{
                        items:2, 
                    }, 
                    992:{
                        items:3,   
                    }
                },
            })
        }
    }
    blogslider();
    /*===========End blog-slider js ===========*/
    
    /*---------Start Counter-----------*/
    function counting_data(){
        var counter = $(".counter");
        if( counter.length){
            counter.counterUp({
                delay:10,
                time:1000
            })
        }
    } 
    counting_data();
    /*---------End Counter-----------*/
    
     /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    $('.work-popup,.popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    
    // video Popup
    if ($("#video-item,#video-items,.video_icon").length > 0){
        $("#video-item,#video-items,.video_icon").magnificPopup({
            type: "iframe"
        });
    }
    
    /*-------------------------------
        GALLERY SLIDER 
    --------------------------------*/
    function getSlide() {
        var wW = $(window).width();
        if (wW < 601) {
            return 1;
        }
        return 3;
    }
    var mySwiper = $('.swiper-container').swiper({
        mode: 'horizontal',
        autoplay: 3000,
        loop: true,
        speed: 400,
        slidesPerView: 1,
        effect: 'coverflow',
        slidesPerView: getSlide(),
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        keyboardControl: true,
        pagination:'.swiper-pagination',
        paginationClickable: true,
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false
        }
    });
    
   $('#feel-the-wave').wavify({
      height: 60,
      bones: 7,
      amplitude: 90,
      color: 'rgba(255, 255, 255, 0.06)',
      speed: .21
    });

    $('#feel-the-wave-two').wavify({
      height: 150,
      bones: 8,
      amplitude: 70,
      color: 'rgba(255, 255, 255, 0.06)',
      speed: .24
    });

    $('#feel-the-wave-three').wavify({
      height: 10,
      bones: 5,
      amplitude: 80,
      color: 'rgba(255, 255, 255, 0.06)',
      speed: 0.26
    });
    
    /*===========Start clients logo js ===========*/    
    
    /*==========Start player js ===========*/
    // poster frame click event
    $(".js-videoPoster").on('click',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
    });

    // play the targeted video (and hide the poster frame)
    function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
    }
    // stop the targeted/all videos (and re-instate the poster frames)
    $(".play-btn").on("click",function(ev){
        var $wrapper = $('.js-videoWrapper');
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src'); 
        if( $wrapper.hasClass('videoWrapperActive')){
            $wrapper.removeClass('videoWrapperActive');
            $iframe.attr('src','');
        }
        else{
            $wrapper.addClass('videoWrapperActive');
            $iframe.attr('src',src);
        }
        return false;
    });
    /*==========End player js ===========*/
    
    /*---------------Portfolio isotope js--------*/
    function blogmasonry(){
        var blogitems = $(".blog-masonry");
        if( blogitems.length ){
            blogitems.imagesLoaded( function() {
                $(blogitems).isotope({
                    layoutMode: 'masonry',
                });
            })
        }
    }
    blogmasonry();
})(jQuery);

 
	