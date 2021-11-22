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
  const fullScreenButton = $('#js_toggleFullScreen');
  fullScreenButton.on('click', function() {
    requestFullScreen();
  })

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

  const heroTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerHero',
      start: 'top 66',
      end: '70%',
      scrub: true,
      pin: true,
    }
  });
  const aboutTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerAbout',
      start: 'top 80%',
      end: '20% 60%',
      scrub: true,
    }
  });
  const MOUTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerMOU',
      start: '40% 40%',
      end: '200% 66',
      scrub: true,
      pin: true,
      markers: true,
    }
  });
  const applyATrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerApplyA',
      start: 'top 12%',
      end: '300% 66',
      scrub: true,
      pin: true,
    }
  });
  const applyBTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerApplyB',
      start: 'top 20%',
      end: '300% 66',
      scrub: true,
      pin: true,
    }
  });
  const elementTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerElement',
      start: 'top 80%',
      end: 'top 66',
      scrub: true,
    }
  });
  const downloadTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerDownload',
      start: 'top 50%',
      end: '20% 40%',
      scrub: true,
    }
  });
  // const newsTrigger = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '#js_triggerNews',
  //     start: 'top 16%',
  //     end: '100% 66',
  //     scrub: true,
  //     pin: true,
  //   }
  // });
  const contactTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerContact',
      start: 'top 10%',
      end: '80% 66',
      scrub: true,
      pin: true,
      // markers: true,
    }
  });
  ScrollTrigger.matchMedia({
    '(min-width: 1025px)': function() {
      heroTrigger
        .to(".arrow2", { y: 176 }, 0)
    },
    '(min-width: 0px) and (max-width: 1024px)': function() {
      heroTrigger
        .to(".arrow2", { y: 100 }, 0)
    },
    // '(min-width: 921px)': function() {
    //   applyATrigger
    //     .from("#applyTitle", { x: 500 }, 0)
    //     .from("#applyLargeCardA", { y: 1000 , delay: .1 }, 0)
    //     .from("#applyMediumCardA", { y: 1000 }, 1)
    //     .from("#applyTaiwan", { x: -1500 }, 2)
    //   applyBTrigger
    //     .from("#applyArrow", { y: -200, opacity: 0 })

    //   const criteriaTrigger = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '#js_triggerCriteria',
    //       start: 'top 16%',
    //       end: '200% 66',
    //       scrub: true,
    //       pin: true,
    //     }
    //   });
    //   criteriaTrigger
    //     .from("#criteriaTitle", { x: 500 }, 0)
    //     .from("#criteriaC5", { y: -100 }, 0)
    //     .from("#criteriaC4", { y: -120 }, 0)
    //     .from("#criteriaC3", { y: -140 }, 0)
    //     .from("#criteriaC2", { y: -165 }, 0)
    //     .from("#criteriaC1", { y: -190 }, 0)
    //     .from("#criteriaCard1", { y: 800 }, 1)
    //     .from("#criteriaCard2", { y: 800 }, 1)
    //   downloadTrigger
    //     .from("#downloadButton1", { y: 400 }, 0)
    //     .from("#downloadButton2", { y: 400, delay: .3 }, 0)
    // },
    // '(min-width: 0px) and (max-width: 920px)': function() {
    //   applyATrigger
    //     .from("#applyTitle", { x: 500 }, 0)
    //     .from("#applyLargeCardA", { y: 1000, delay: .1 }, 0)
    //     .from("#applyMediumCardA", { y: 1000 }, 1)
    //     .from("#applyTaiwan", { x: -1500 }, 1)
    //   applyBTrigger
    //     .from("#applyArrow", { y: -500, opacity: 0, delay: 2 })
    //   const criteriaTriggerRWD = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '#js_triggerCriteria',
    //       start: 'top 80%',
    //       end: '20% 66',
    //       scrub: true,
    //       markers: true,
    //     }
    //   });
    //   criteriaTriggerRWD
    //     .from("#criteriaTitle", { x: 500 }, 0)
    //     .from("#criteriaC5", { y: -100 }, 1)
    //     .from("#criteriaC4", { y: -120 }, 1)
    //     .from("#criteriaC3", { y: -140 }, 1)
    //     .from("#criteriaC2", { y: -165 }, 1)
    //     .from("#criteriaC1", { y: -190 }, 1)
    //     .from("#criteriaCard1", { y: 800 , duration: 2.5 }, 2)
    //     .from("#criteriaCard2", { y: 800 , duration: 3.5 }, 3)
    //   downloadTrigger
    //     .from("#downloadButton1", { x: 800 }, 0)
    //     .from("#downloadButton2", { x: 800, delay: .3 }, 0)
    // },
    'all': function () {
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

      aboutTrigger.from("#aboutTitle", { x: 1000 }, 0)

      MOUTrigger.from("#aboutCard", { y: 1000 }, 0)

      applyBTrigger
        .from("#applyLargeCardB", { y: 1000 })
        .from("#applyMediumCardB", { y: 1000 })

      elementTrigger
        .from("#elementIcon", { y: -200 }, 0)
        .from("#elementTitle", { x: 500 }, 0)

      downloadTrigger
        .from("#downloadArrow", { x: 500, delay: .3 }, 0)

      newsTrigger
        .from("#newsBlurCircle", { scale: 0.5 }, 0)

      contactTrigger
        .from("#contactCircle4", { x: -470 }, 0)
        .from("#contactCircle3", { x: -485 }, 0)
        .from("#contactCircle2", { x: -505 }, 0)
        .from("#contactCircle1", { x: -520 }, 0)
        .from("#contactArrow", { x: -300 }, 0)
        .from("#contactCircleBlank", { scale: 0.5 }, 0)
        .from("#contactTaicca", { scale: 0.5 }, 0)
    }
  })
});
