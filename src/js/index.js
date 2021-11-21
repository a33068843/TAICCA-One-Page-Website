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
  // $('html, body').animate({
  //   scrollTop: 10000
  // }, 1000, function() {});

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
      start: '30% 40%',
      end: '200% 66',
      scrub: true,
      pin: true,
    }
  });
  const applyATrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerApplyA',
      start: 'top 16%',
      end: '500% 66',
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
  const criteriaTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerCriteria',
      start: 'top 16%',
      end: '300% 66',
      scrub: true,
      pin: true,
    }
  });
  const elementTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerElement',
      start: 'top 16%',
      end: '100% 66',
      scrub: true,
      pin: true,
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
  const newsTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerNews',
      start: 'top 16%',
      end: '100% 66',
      scrub: true,
      pin: true,
    }
  });
  const contactTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: '#js_triggerContact',
      start: 'top 16%',
      end: '80% 66',
      scrub: true,
      pin: true,
    }
  });
  ScrollTrigger.matchMedia({
    '(min-width: 100px)': function() {
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
        .to(".triangle3", { x: 240 }, 0)
        .to(".arrow2", { y: 176 }, 0)

      aboutTrigger.from("#aboutTitle", { x: 1000 }, 0)

      MOUTrigger.from("#aboutCard", { y: 1000 }, 0)

      applyATrigger
        .from("#applyTitle", { x: 500 }, 0)
        .from("#applyLargeCardA", { y: 1000 , delay: .3 }, 0)
        .from("#applyMediumCardA", { y: 1000 }, 1)
        .from("#applyTaiwan", { x: -1500 }, 2)

      applyBTrigger
        .from("#applyLargeCardB", { y: 1000 })
        .from("#applyMediumCardB", { y: 1000 })
        .from("#applyArrow", { y: -200, opacity: 0 })

      criteriaTrigger
        .from("#criteriaTitle", { x: 500 })
        .from("#criteriaC5", { y: -100 }, 1)
        .from("#criteriaC4", { y: -120 }, 1)
        .from("#criteriaC3", { y: -140 }, 1)
        .from("#criteriaC2", { y: -165 }, 1)
        .from("#criteriaC1", { y: -190 }, 1)
        .from("#criteriaCard", { y: 800 })

      elementTrigger
        .from("#elementIcon", { y: -200 }, 0)
        .from("#elementTitle", { x: 500 }, 0)

      downloadTrigger
        .from("#downloadButton1", { y: 400 }, 0)
        .from("#downloadButton2", { y: 400, delay: .3 }, 0)
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
    },
    'all': function () {
    }
  })
});
