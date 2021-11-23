gsap.registerPlugin(ScrollTrigger);

const requestFullScreen = () => {
  const googleSlide = $('#js_googleSlide')[0];
  const isEnableFullScreen =
    document.fullscreenEnabled    ||
    document.mozFullScreenEnabled ||
    document.webkitFullscreenEnabled;
    console.log(isEnableFullScreen)

  if (isEnableFullScreen) {
    if (googleSlide.requestFullScreen) { googleSlide.requestFullScreen(); }
    else if (googleSlide.webkitRequestFullscreen) { googleSlide.webkitRequestFullscreen(); }
    else if (googleSlide.mozRequestFullScreen) { googleSlide.mozRequestFullScreen(); }
  }
}
$(document).ready(function() {
  // Open Slide
  const fullScreenButton = $('#js_toggleFullScreen');
  fullScreenButton.on('click', function() {
    requestFullScreen();
  })

  // Toggle Hamburger
  const toggleHamburger = $('#js_toggleHamburger');
  const hamburgerModal = $('#js_hamburgerModal');
  const menuDownload = $('.menu_download')
  toggleHamburger.on('click', function() {
    const hamburgerLink = hamburgerModal.find('a');
    hamburgerLink.on('click', function() {
      toggleHamburger.removeClass('open');
      hamburgerModal.removeClass('open');
      $('body').removeClass('disableScroll');
      if (menuDownload.hasClass('open')) {
        menuDownload.removeClass('open');
      }
    })
    if (toggleHamburger.hasClass('open')) {
      toggleHamburger.removeClass('open');
      hamburgerModal.removeClass('open');
      $('body').removeClass('disableScroll');
      if (menuDownload.hasClass('open')) {
        menuDownload.removeClass('open');
      }
    }
    else {
      toggleHamburger.addClass('open');
      hamburgerModal.addClass('open');
      $('body').addClass('disableScroll');
      if (!menuDownload.hasClass('open')) {
        menuDownload.addClass('open');
      }
    }
  })

  // Smooth Scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = this.hash;
    const atarget = $(target);
    console.log(atarget);
    $('html, body').stop().animate({
      'scrollTop': atarget.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  })
  // const applyBTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerApplyB',
  //     start: 'top 20%',
  //     end: '300% 66',
  //     scrub: true,
  //     pin: true,
  //   }
  // });
  // const elementTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerElement',
  //     start: 'top 80%',
  //     end: 'top 66',
  //     scrub: true,
  //   }
  // });
  // const downloadTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerDownload',
  //     start: 'top 50%',
  //     end: '20% 40%',
  //     scrub: true,
  //   }
  // });
  // const newsTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerNews',
  //     start: 'top 16%',
  //     end: '100% 66',
  //     scrub: true,
  //     pin: true,
  //   }
  // });
  // const contactTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerContact',
  //     start: 'top 10%',
  //     end: '80% 66',
  //     scrub: true,
  //     pin: true,
  //     // markers: true,
  //   }
  // });
  // Hero, About, Mou
  const saveStyled = `
    .arrow1,
    .TW,
    .circleR5,
    .circleR4,
    .circleR3,
    .circleR2,
    .circleR1,
    .line1,
    .line2,
    .triangle3,
    .arrow2,
    #aboutTitle,
    #aboutCard,
    #applyTitle,
    #applyLargeCardA,
    #applyMediumCardA,
    #applyTaiwan
  `
  gsap.set(saveStyled, {clearProps: "all"});
  ScrollTrigger.saveStyles(saveStyled);
  ScrollTrigger.matchMedia({
    // Hero, ApplyA
    '(min-width: 921px)': function() {
      const heroTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top 66',
          end: '+=10%',
          scrub: true,
          pin: true,
        }
      });
      heroTrigger
        .from(".arrow1", { x: -500 }, 0)
        .from(".TW", { x: 500 }, 0)
        .from(".halfCircle", { rotate: -180 }, 0)
        .from(".circleR5", { y: -41 }, 0)
        .from(".circleR4", { y: -62 }, 0)
        .from(".circleR3", { y: -81 }, 0)
        .from(".circleR2", { y: -98 }, 0)
        .from(".circleR1", { y: -123 }, 0)
        .from(".line1", { rotate: -360 }, 0)
        .from(".line2", { rotate: -360 }, 0)
        .to(".triangle3", { xPercent: 700 }, 0)
        .to(".arrow2", { y: 176 }, 0)
      const applyATrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyA',
          start: 'top 20%',
          end: '+=100% 66',
          scrub: true,
          pin: true,
          markers: true,
          anticipatePin: 1,
        }
      });
      applyATrigger
        .from("#applyTitle", { x: 500 }, 0)
        // .from("#applyLargeCardA", { y: 1000, delay: .1 }, 0)
        // .from("#applyMediumCardA", { y: 1000 }, 1)
        // .from("#applyTaiwan", { x: -1500 }, 1)
    },
    '(max-width: 920px)': function() {
      const heroTriggerRWD = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top-=1px 66',
          end: '+=10% 66',
          scrub: true,
          pin: true,
        }
      });
      heroTriggerRWD
        .from(".arrow1", { x: -500 }, 0)
        .from(".TW", { x: 500 }, 0)
        .from(".halfCircle", { rotate: -180 }, 0)
        .from(".circleR5", { y: -41 }, 0)
        .from(".circleR4", { y: -62 }, 0)
        .from(".circleR3", { y: -81 }, 0)
        .from(".circleR2", { y: -98 }, 0)
        .from(".circleR1", { y: -123 }, 0)
        .from(".line1", { rotate: -360 }, 0)
        .from(".line2", { rotate: -360 }, 0)
        .to(".triangle3", { xPercent: 700 }, 0)
        .to(".arrow2", { y: 100 }, 0)

        // applyATrigger
        //   .from("#applyTitle", { x: 500 }, 0)
        //   .from("#applyLargeCardA", { y: 1000 , delay: .1 }, 0)
        //   .from("#applyMediumCardA", { y: 1000 }, 1)
        //   .from("#applyTaiwan", { x: -1500 }, 2)
        // applyBTrigger
        //   .from("#applyArrow", { y: -200, opacity: 0 })
    },
    // Mou
    '(min-width: 769px)': function() {
      const MOUTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '40% 40%',
          end: '+=100% 66',
          scrub: true,
          // pin: true,
          // markers: true,
        }
      });
      MOUTrigger.from("#aboutCard", { y: 1000 }, 0)
    },
    '(max-width: 768px)': function() {
      const MOUTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '20% 70%',
          end: '+=80% 70%',
          scrub: true,
        }
      });
      MOUTrigger.from("#aboutCard", { y: 1000 }, 0)
    },
    // About
    'all': function() {
      const aboutTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerAbout',
          start: 'top 100%',
          end: '+=20% 60%',
          scrub: true,
        }
      });
      aboutTrigger.from("#aboutTitle", { x: 1000 }, 0)
    }
  })
  // ScrollTrigger.matchMedia({
  //   '(min-width: 921px)': function() {
  //     const criteriaTrigger = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#js_triggerCriteria',
  //         start: 'top 16%',
  //         end: '200% 66',
  //         scrub: true,
  //         pin: true,
  //       }
  //     });
  //     criteriaTrigger
  //       .from("#criteriaTitle", { x: 500 }, 0)
  //       .from("#criteriaC5", { y: -100 }, 0)
  //       .from("#criteriaC4", { y: -120 }, 0)
  //       .from("#criteriaC3", { y: -140 }, 0)
  //       .from("#criteriaC2", { y: -165 }, 0)
  //       .from("#criteriaC1", { y: -190 }, 0)
  //       .from("#criteriaCard1", { y: 800 }, 1)
  //       .from("#criteriaCard2", { y: 800 }, 1)
  //     downloadTrigger
  //       .from("#downloadButton1", { y: 400 }, 0)
  //       .from("#downloadButton2", { y: 400, delay: .3 }, 0)
  //   },
  //   '(min-width: 0px) and (max-width: 920px)': function() {
  //     applyBTrigger
  //       .from("#applyArrow", { y: -500, opacity: 0, delay: 2 })
  //     const criteriaTriggerRWD = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#js_triggerCriteria',
  //         start: 'top 80%',
  //         end: '20% 66',
  //         scrub: true,
  //         markers: true,
  //       }
  //     });
  //     criteriaTriggerRWD
  //       .from("#criteriaTitle", { x: 500 }, 0)
  //       .from("#criteriaC5", { y: -100 }, 1)
  //       .from("#criteriaC4", { y: -120 }, 1)
  //       .from("#criteriaC3", { y: -140 }, 1)
  //       .from("#criteriaC2", { y: -165 }, 1)
  //       .from("#criteriaC1", { y: -190 }, 1)
  //       .from("#criteriaCard1", { y: 800 , duration: 2.5 }, 2)
  //       .from("#criteriaCard2", { y: 800 , duration: 3.5 }, 3)
  //     downloadTrigger
  //       .from("#downloadButton1", { x: 800 }, 0)
  //       .from("#downloadButton2", { x: 800, delay: .3 }, 0)
  //   },
  //   'all': function () {
  //     applyBTrigger
  //       .from("#applyLargeCardB", { y: 1000 })
  //       .from("#applyMediumCardB", { y: 1000 })

  //     elementTrigger
  //       .from("#elementIcon", { y: -200 }, 0)
  //       .from("#elementTitle", { x: 500 }, 0)

  //     downloadTrigger
  //       .from("#downloadArrow", { x: 500, delay: .3 }, 0)
  //   }
  // })
});
