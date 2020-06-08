'use strict';

  (function() {
    const breakpoint = window.matchMedia( '(min-width:768px)' );
    let mySwiper;
    const breakpointChecker = function() {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
      }
    };
      
    const enableSwiper = function() {
      mySwiper = new Swiper ('.swiper-container', {
        loop: true, 
        loopedSlides: 3,
        width: 240, 
        spaceBetween: 16,
        slidesOffsetBefore: 16,
        
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        }
      });
    };
  
  // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
  
  })(); /* IIFE end */