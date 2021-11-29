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
  // const fullScreenButton = $('#js_toggleFullScreen');
  // fullScreenButton.on('click', function() {
  //   requestFullScreen();
  // })

  const newsCount = $('.container_news').find('.news');
  if (newsCount.length > 5) {
    const readMoreButton = $('.container_news').find('.readMoreButton');
    if (!readMoreButton.hasClass('active')) {
      readMoreButton.addClass('active');
    }
  }
  // Slide with Fancy Box
  const iframeWidth = Math.ceil($(window).width() * 80 / 100)
  const iframeHeight = iframeWidth * 400 / 541;
  $('#js_toggleFullScreen').fancybox({
    'width': iframeWidth,
    'height': iframeHeight,
    'autoScale': false,
    'autoSize' : false,
    type : 'iframe',
    iframe : {
        scrolling : 'no'
    }
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

  $('#downloadPrepareDocument').on('click', function() {
    window.open('https://drive.google.com/uc?export=download&id=10l8poy0fiuRAWiSKZ42qfrmpVVz-P-h-');
    window.open('https://drive.google.com/uc?export=download&id=1lx3IkA3wjUAQdgC5TWK4GRU_Xbqu43G_');
    window.open('https://drive.google.com/uc?export=download&id=17H9zyBpusM27xc2-jGqX2oe0X7v-Zl-3');
    window.open('https://drive.google.com/uc?export=download&id=1ceV5WMzg2ZapBbGRHl_Hiol6bOEHsoBF');
  });
  $('#downloadButton2').on('click', function() {
    window.open('https://drive.google.com/uc?export=download&id=1aZgAtB_w23iNTk50zg0wZet2ADbfQF14');
    window.open('https://drive.google.com/uc?export=download&id=1HOJPvivRyQ0JVKrKuf_53aNKZsjRNhwS');
    window.open('https://drive.google.com/uc?export=download&id=1paPFSdlQnt33sr1XdOGWQiDM6aA1znEs');
    window.open('https://drive.google.com/uc?export=download&id=1H5lafs2LV-4Wmt6Mlw5gNM1AtrFNO9Rf');
  });
  // Smooth Scroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = this.hash;
    const atarget = $(target);
    $('html, body').stop().animate({
      'scrollTop': atarget.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  })

  // Active Header
  const headerLink = $('.menu_items > a');
  $(headerLink).on('click', function() {
    headerLink.removeClass('active');
    $(this).addClass('active');
  })
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
    #mouCard1,
    #mouCard2,
    #applyTitle,
    #applyLargeCardA,
    #applyMediumCardA,
    #applyTaiwan,
    #applyLargeCardB,
    #applyMediumCardB,
    #criteriaTitle,
    #criteriaC5,
    #criteriaC4,
    #criteriaC3,
    #criteriaC2,
    #criteriaC1,
    #criteriaCard1,
    #criteriaCard2,
    #elementIcon,
    #elementTitle,
    #downloadButton1,
    #downloadButton2,
    #downloadArrow,
    #newsBlurCircle,
    #contactCircle4,
    #contactCircle3,
    #contactCircle2,
    #contactCircle1,
    #contactArrow,
    #contactCircleBlank,
    #contactTaicca
  `
  gsap.set(saveStyled, {clearProps: "all"});
  ScrollTrigger.saveStyles(saveStyled);
  ScrollTrigger.matchMedia({
    // Hero,
    '(min-width: 921px)': function() {
      const heroTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top 66',
          end: '+=100% 66',
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
        .to(".arrow2", { y: 100 }, 0);
      const MOUTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '40% 40%',
          end: '+=200% 66',
          scrub: true,
          pin: true,
        }
      });
      MOUTrigger.from("#mouCard1", { y: 500 }, 0);
      MOUTrigger.from("#mouCard2", { y: 500 }, 0.2);
      const aboutTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerAbout',
          start: 'top 100%',
          end: '+=20% 60%',
          scrub: true,
        }
      });
      aboutTrigger.from("#aboutTitle", { x: 1000 }, 0);
      const applyATrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyA',
          start: 'top 20%',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        }
      });
      applyATrigger
        .from("#applyTitle", { x: 500 }, 0)
        .from("#applyLargeCardA", { y: 1000, delay: .1 }, 0)
        .from("#applyMediumCardA", { y: 1000 }, 1)
        .from("#applyTaiwan", { x: -1500 }, 1);

      const applyBTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyB',
          start: 'top 20%',
          end: '300% 66',
          scrub: true,
          pin: true,
        }
      });
      applyBTrigger
        .from("#applyLargeCardB", { y: 1000 })
        .from("#applyMediumCardB", { y: 1000 });

      const criteriaTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerCriteria',
          start: 'top 16%',
          end: '200% 66',
          scrub: true,
          pin: true,
        }
      });
      criteriaTrigger
        .from("#criteriaTitle", { x: 500 }, 0)
        .from("#criteriaC5", { y: -100 }, 0)
        .from("#criteriaC4", { y: -120 }, 0)
        .from("#criteriaC3", { y: -140 }, 0)
        .from("#criteriaC2", { y: -165 }, 0)
        .from("#criteriaC1", { y: -190 }, 0)
        .from("#criteriaCard1", { y: 800 }, 1)
        .from("#criteriaCard2", { y: 800 }, 1);
      const elementTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerElement',
          start: 'top center',
          end: 'top 66',
          scrub: true,
        }
      });
      elementTrigger
        .from("#elementIcon", { y: -200 }, 0)
        .from("#elementTitle", { x: 500 }, 0);
      const downloadTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerDownload',
          start: 'top 40%',
          end: '20% 30%',
          scrub: true,
        }
      });
      downloadTrigger
        .from("#downloadButton1", { y: 400 }, 0)
        .from("#downloadButton2", { y: 400 }, 0.3)
        .from("#downloadArrow", { x: 500 }, 0.3);
      const newsTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerNews',
          start: 'top 16%',
          end: '100% 66',
          scrub: true,
          pin: true,
        }
      });
      newsTrigger.from("#newsBlurCircle", { scale: 0.5 }, 0)
      const contactTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerContact',
          start: 'top 80%',
          end: '100% bottom',
          scrub: true,
        }
      });
      contactTrigger
        .from("#contactCircle4", { x: -470 }, 0)
        .from("#contactCircle3", { x: -485 }, 0)
        .from("#contactCircle2", { x: -505 }, 0)
        .from("#contactCircle1", { x: -520 }, 0)
        .from("#contactArrow", { x: -300 }, 0)
        .from("#contactCircleBlank", { scale: 0.5 }, 1)
        .from("#contactTaicca", { scale: 0.5 }, 1);
    },
    '(max-width: 920px)': function() {
      const heroTriggerRWD = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top 66',
          end: '+=100% 66',
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
        .to(".arrow2", { y: 100 }, 0);
      const MOUTriggerRWD = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '50% 70%',
          end: '+=200% 70%',
          scrub: true,
        }
      });
      MOUTriggerRWD.from("#mouCard1", { y: 800 }, 0);
      MOUTriggerRWD.from("#mouCard2", { y: 800 }, 0.5);
      const aboutTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerAbout',
          start: 'top 100%',
          end: '+=20% 60%',
          scrub: true,
        }
      });
      aboutTrigger.from("#aboutTitle", { x: 1000 }, 0);
      const applyATrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyA',
          start: 'top 10%',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        }
      });
      applyATrigger
        .from("#applyTitle", { x: 500 }, 0)
        .from("#applyLargeCardA", { y: 1000, delay: .1 }, 0)
        .from("#applyMediumCardA", { y: 1000 }, 1)
        .from("#applyTaiwan", { x: -1500 }, 1);

      const applyBTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyB',
          start: 'top 10%',
          end: '300% 66',
          scrub: true,
          pin: true,
        }
      });
      applyBTrigger
        .from("#applyLargeCardB", { y: 1000 })
        .from("#applyMediumCardB", { y: 1000 });

      const criteriaTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerCriteria',
          start: 'top 10%',
          end: '200% 66',
          scrub: true,
          pin: true,
        }
      });
      criteriaTrigger
        .from("#criteriaTitle", { x: 500 }, 0)
        .from("#criteriaC5", { y: -100 }, 0)
        .from("#criteriaC4", { y: -120 }, 0)
        .from("#criteriaC3", { y: -140 }, 0)
        .from("#criteriaC2", { y: -165 }, 0)
        .from("#criteriaC1", { y: -190 }, 0)
        .from("#criteriaCard1", { y: 800 }, 1)
        .from("#criteriaCard2", { y: 800 }, 1);
      const elementTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerElement',
          start: 'top 80%',
          end: 'top 66',
          scrub: true,
        }
      });
      elementTrigger
        .from("#elementIcon", { y: -200 }, 0)
        .from("#elementTitle", { x: 500 }, 0);
      const downloadTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerDownload',
          start: 'top 40%',
          end: '20% 30%',
          scrub: true,
        }
      });
      downloadTrigger
        .from("#downloadButton1", { y: 400 }, 0)
        .from("#downloadButton2", { y: 400 }, 0.3)
        .from("#downloadArrow", { x: 500 }, 0.3);
      const newsTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerNews',
          start: 'top 16%',
          end: '100% 66',
          scrub: true,
          pin: true,
        }
      });
      newsTrigger.from("#newsBlurCircle", { scale: 0.5 }, 0)
      const contactTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerContact',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        }
      });
      contactTrigger
        .from("#contactCircle4", { x: -470 }, 0)
        .from("#contactCircle3", { x: -485 }, 0)
        .from("#contactCircle2", { x: -505 }, 0)
        .from("#contactCircle1", { x: -520 }, 0)
        .from("#contactArrow", { x: -300 }, 0)
        .from("#contactCircleBlank", { scale: 0.5 }, 1)
        .from("#contactTaicca", { scale: 0.5 }, 1);
    },
  })
});
