gsap.registerPlugin(ScrollTrigger);

const NEWS_COUNT_SHOWING = 5;
const PLANS_COUNT_SHOWING = 2;

const requestFullScreen = () => {
  const googleSlide = $('#js_googleSlide')[0];
  const isEnableFullScreen =
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.webkitFullscreenEnabled;
  console.log(isEnableFullScreen);

  if (isEnableFullScreen) {
    if (googleSlide.requestFullScreen) {
      googleSlide.requestFullScreen();
    } else if (googleSlide.webkitRequestFullscreen) {
      googleSlide.webkitRequestFullscreen();
    } else if (googleSlide.mozRequestFullScreen) {
      googleSlide.mozRequestFullScreen();
    }
  }
};

const handleNews = (news, variable) => {
  switch (variable) {
    case 'hide':
      news.each(function (index) {
        if (index >= NEWS_COUNT_SHOWING) {
          $(this).hide();
        }
      });
      break;
    case 'show':
      news.each(function (index) {
        if (index >= NEWS_COUNT_SHOWING) {
          $(this).show();
        }
      });
    default:
      break;
  }
};

const handlePlans = (plans, variable) => {
  switch (variable) {
    case 'hide':
      plans.each(function (index) {
        if (index >= PLANS_COUNT_SHOWING) {
          $(this).hide();
        }
      });
      break;
    case 'show':
      plans.each(function (index) {
        if (index >= PLANS_COUNT_SHOWING) {
          $(this).show();
        }
      });
    default:
      break;
  }
};

const toggleLockBody = () => {
  const body = $('body');
  const isLock = body.hasClass('disableScroll');
  if (isLock) {
    body.removeClass('disableScroll');
  }
  if (!isLock) {
    body.addClass('disableScroll');
  }
};

$(document).ready(function () {
  // Open Slide
  // const fullScreenButton = $('#js_toggleFullScreen');
  // fullScreenButton.on('click', function() {
  //   requestFullScreen();
  // })

  // const readMoreButton = $('.container_news').find('.readMoreButton');
  // readMoreButton.on('click', function () {
  //   const readMoreText = readMoreButton.find('.text');
  //   const isOff = readMoreText.text() === 'Read More';
  //   if (isOff) {
  //     $('.news.hide').css('display', 'flex');
  //     readMoreText.text('Read Less');
  //   }
  //   if (!isOff) {
  //     $('.news.hide').css('display', 'none');
  //     readMoreText.text('Read More');
  //   }
  // });

  // News ShowMore Button
  const newsCount = $('.container_news').find('.newsBox').find('li');
  const newsReadLessButton = $('.container_news').find(
    '.readMoreButton.showLess'
  );
  const newsReadMoreButton = $('.container_news').find(
    '.readMoreButton.showMore'
  );

  // 超過數量才顯示按鈕
  if (newsCount.length > NEWS_COUNT_SHOWING) {
    if (!newsReadMoreButton.hasClass('active')) {
      newsReadMoreButton.addClass('active');
    }
  }
  handleNews(newsCount, 'hide');

  newsReadMoreButton.on('click', function () {
    $(newsReadMoreButton).removeClass('active');
    $(newsReadLessButton).addClass('active');
    handleNews(newsCount, 'show');
  });
  newsReadLessButton.on('click', function () {
    $(newsReadLessButton).removeClass('active');
    $(newsReadMoreButton).addClass('active');
    handleNews(newsCount, 'hide');
  });

  // Plans ShowMore Button
  const plansList = $('#js_plansList').find('li');
  const plansReadLessButton = $('.container_plans').find(
    '.readMoreButton.showLess'
  );
  const plansReadMoreButton = $('.container_plans').find(
    '.readMoreButton.showMore'
  );

  // 超過數量才顯示按鈕
  if (plansList.length > PLANS_COUNT_SHOWING) {
    if (!plansReadMoreButton.hasClass('active')) {
      plansReadMoreButton.addClass('active');
    }
  }
  handlePlans(plansList, 'hide');

  plansReadMoreButton.on('click', function () {
    $(plansReadMoreButton).removeClass('active');
    $(plansReadLessButton).addClass('active');
    handlePlans(plansList, 'show');
  });
  plansReadLessButton.on('click', function () {
    $(plansReadLessButton).removeClass('active');
    $(plansReadMoreButton).addClass('active');
    handlePlans(plansList, 'hide');
  });

  // Plan Modal Popup
  const planModalOpen = $('#js_plansList').find('.planTitle, .plan_footer');
  planModalOpen.on('click', function () {
    toggleLockBody();
    const mask = $('#js_mask');
    mask.removeClass('hidden');
    const currentPlan = $(this).parents('.plan');
    const planDate = currentPlan.find('.planDate').text();
    const planTitle = currentPlan.find('.planTitle').text();
    const planContent = currentPlan.find('.plan_content').text();
    mask.find('.planDate').text(planDate);
    mask.find('.planTitle').text(planTitle);
    mask.find('.plan_content').text(planContent);
  });

  const modalCloseButton = $('#js_mask').find('.close_button');
  modalCloseButton.on('click', function () {
    toggleLockBody();
    const mask = $('#js_mask');
    mask.addClass('hidden');
  });

  // Slide with Fancy Box
  const iframeWidth = Math.ceil(($(window).width() * 80) / 100);
  const iframeHeight = (iframeWidth * 400) / 541;
  $('#js_toggleFullScreen').fancybox({
    width: iframeWidth,
    height: iframeHeight,
    autoScale: false,
    autoSize: false,
    type: 'iframe',
    iframe: {
      scrolling: 'no',
    },
  });

  // Toggle Hamburger
  const toggleHamburger = $('#js_toggleHamburger');
  const hamburgerModal = $('#js_hamburgerModal');
  const menuDownload = $('.menu_download');
  toggleHamburger.on('click', function () {
    const hamburgerLink = hamburgerModal.find('a');
    hamburgerLink.on('click', function () {
      toggleHamburger.removeClass('open');
      hamburgerModal.removeClass('open');
      $('body').removeClass('disableScroll');
      if (menuDownload.hasClass('open')) {
        menuDownload.removeClass('open');
      }
    });
    if (toggleHamburger.hasClass('open')) {
      toggleHamburger.removeClass('open');
      hamburgerModal.removeClass('open');
      $('body').removeClass('disableScroll');
      if (menuDownload.hasClass('open')) {
        menuDownload.removeClass('open');
      }
    } else {
      toggleHamburger.addClass('open');
      hamburgerModal.addClass('open');
      $('body').addClass('disableScroll');
      if (!menuDownload.hasClass('open')) {
        menuDownload.addClass('open');
      }
    }
  });

  // Smooth Scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = this.hash;
    const atarget = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: atarget.offset().top,
        },
        900,
        'swing',
        function () {
          window.location.hash = target;
        }
      );
  });

  // Active Header
  const headerLink = $('.menu_items > a');
  $(headerLink).on('click', function () {
    headerLink.removeClass('active');
    $(this).addClass('active');
  });
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
    #contactCircle4,
    #contactCircle3,
    #contactCircle2,
    #contactCircle1,
    #contactArrow,
    #contactCircleBlank,
    #contactTaicca
  `;
  gsap.set(saveStyled, { clearProps: 'all' });
  ScrollTrigger.saveStyles(saveStyled);
  ScrollTrigger.matchMedia({
    // Hero,
    '(min-width: 921px)': function () {
      const heroTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top 66',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        },
      });
      heroTrigger
        .from('.arrow1', { x: -500 }, 0)
        .from('.TW', { x: 500 }, 0)
        .from('.halfCircle', { rotate: -180 }, 0)
        .from('.circleR5', { y: -41 }, 0)
        .from('.circleR4', { y: -62 }, 0)
        .from('.circleR3', { y: -81 }, 0)
        .from('.circleR2', { y: -98 }, 0)
        .from('.circleR1', { y: -123 }, 0)
        .from('.line1', { rotate: -360 }, 0)
        .from('.line2', { rotate: -360 }, 0)
        .to('.triangle3', { xPercent: 700 }, 0)
        .to('.arrow2', { y: 100 }, 0);
      const MOUTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '40% 40%',
          end: '+=200% 66',
          scrub: true,
          pin: true,
        },
      });
      MOUTrigger.from('#mouCard1', { y: 500 }, 0);
      MOUTrigger.from('#mouCard2', { y: 500 }, 0.2);
      const aboutTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerAbout',
          start: 'top 100%',
          end: '+=20% 60%',
          scrub: true,
        },
      });
      aboutTrigger.from('#aboutTitle', { x: 1000 }, 0);
      const applyATrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyA',
          start: 'top 20%',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        },
      });
      applyATrigger
        .from('#applyTitle', { x: 500 }, 0)
        .from('#applyLargeCardA', { y: 1000, delay: 0.1 }, 0)
        .from('#applyMediumCardA', { y: 1000 }, 1)
        .from('#applyTaiwan', { x: -1500 }, 1);

      // const applyBTrigger = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '#js_triggerApplyB',
      //     start: 'top 20%',
      //     end: '300% 66',
      //     scrub: true,
      //     pin: true,
      //   },
      // });
      // applyBTrigger
      //   .from('#applyLargeCardB', { y: 1000 })
      //   .from('#applyMediumCardB', { y: 1000 });

      const criteriaTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerCriteria',
          start: 'top 16%',
          end: '200% 66',
          scrub: true,
          pin: true,
        },
      });
      criteriaTrigger
        .from('#criteriaTitle', { x: 500 }, 0)
        .from('#criteriaC5', { y: -100 }, 0)
        .from('#criteriaC4', { y: -120 }, 0)
        .from('#criteriaC3', { y: -140 }, 0)
        .from('#criteriaC2', { y: -165 }, 0)
        .from('#criteriaC1', { y: -190 }, 0)
        .from('#criteriaCard1', { y: 800 }, 1)
        .from('#criteriaCard2', { y: 800 }, 1);
      const elementTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerElement',
          start: 'top center',
          end: 'top 66',
          scrub: true,
        },
      });
      elementTrigger
        .from('#elementIcon', { y: -200 }, 0)
        .from('#elementTitle', { x: 500 }, 0);
      const downloadTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerDownload',
          start: 'top 40%',
          end: '20% 30%',
          scrub: true,
        },
      });
      downloadTrigger
        .from('#downloadButton1', { y: 400 }, 0)
        .from('#downloadButton2', { y: 400 }, 0.3)
        .from('#downloadArrow', { x: 500 }, 0.3);
      const newsTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#newsBlurCircle',
          start: 'top 60%',
          end: '100% 66',
          scrub: true,
        },
      });
      newsTrigger.from('#newsBlurCircle', { scale: 0.5 }, 0);
      const contactTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerContact',
          start: 'top 80%',
          end: '100% bottom',
          scrub: true,
        },
      });
      contactTrigger
        .from('#contactCircle4', { x: -470 }, 0)
        .from('#contactCircle3', { x: -485 }, 0)
        .from('#contactCircle2', { x: -505 }, 0)
        .from('#contactCircle1', { x: -520 }, 0)
        .from('#contactArrow', { x: -300 }, 0)
        .from('#contactCircleBlank', { scale: 0.5 }, 1)
        .from('#contactTaicca', { scale: 0.5 }, 1);
    },
    '(max-width: 920px)': function () {
      const heroTriggerRWD = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerHero',
          start: 'top 66',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        },
      });
      heroTriggerRWD
        .from('.arrow1', { x: -500 }, 0)
        .from('.TW', { x: 500 }, 0)
        .from('.halfCircle', { rotate: -180 }, 0)
        .from('.circleR5', { y: -41 }, 0)
        .from('.circleR4', { y: -62 }, 0)
        .from('.circleR3', { y: -81 }, 0)
        .from('.circleR2', { y: -98 }, 0)
        .from('.circleR1', { y: -123 }, 0)
        .from('.line1', { rotate: -360 }, 0)
        .from('.line2', { rotate: -360 }, 0)
        .to('.triangle3', { xPercent: 700 }, 0)
        .to('.arrow2', { y: 100 }, 0);
      const MOUTriggerRWD = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerMOU',
          start: '50% 70%',
          end: '+=200% 70%',
          scrub: true,
        },
      });
      MOUTriggerRWD.from('#mouCard1', { y: 800 }, 0);
      MOUTriggerRWD.from('#mouCard2', { y: 800 }, 0.5);
      const aboutTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerAbout',
          start: 'top 100%',
          end: '+=20% 60%',
          scrub: true,
        },
      });
      aboutTrigger.from('#aboutTitle', { x: 1000 }, 0);
      const applyATrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerApplyA',
          start: 'top 10%',
          end: '+=100% 66',
          scrub: true,
          pin: true,
        },
      });
      applyATrigger
        .from('#applyTitle', { x: 500 }, 0)
        .from('#applyLargeCardA', { y: 1000, delay: 0.1 }, 0)
        .from('#applyMediumCardA', { y: 1000 }, 1)
        .from('#applyTaiwan', { x: -1500 }, 1);

      // const applyBTrigger = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '#js_triggerApplyB',
      //     start: 'top 10%',
      //     end: '300% 66',
      //     scrub: true,
      //     pin: true,
      //   },
      // });
      // applyBTrigger
      //   .from('#applyLargeCardB', { y: 1000 })
      //   .from('#applyMediumCardB', { y: 1000 });

      const criteriaTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerCriteria',
          start: 'top 10%',
          end: '200% 66',
          scrub: true,
          pin: true,
        },
      });
      criteriaTrigger
        .from('#criteriaTitle', { x: 500 }, 0)
        .from('#criteriaC5', { y: -100 }, 0)
        .from('#criteriaC4', { y: -120 }, 0)
        .from('#criteriaC3', { y: -140 }, 0)
        .from('#criteriaC2', { y: -165 }, 0)
        .from('#criteriaC1', { y: -190 }, 0)
        .from('#criteriaCard1', { y: 800 }, 1)
        .from('#criteriaCard2', { y: 800 }, 1);
      const elementTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerElement',
          start: 'top 80%',
          end: 'top 66',
          scrub: true,
        },
      });
      elementTrigger
        .from('#elementIcon', { y: -200 }, 0)
        .from('#elementTitle', { x: 500 }, 0);
      const downloadTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerDownload',
          start: 'top 40%',
          end: '20% 30%',
          scrub: true,
        },
      });
      downloadTrigger
        .from('#downloadButton1', { y: 400 }, 0)
        .from('#downloadButton2', { y: 400 }, 0.3)
        .from('#downloadArrow', { x: 500 }, 0.3);
      const newsTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerNews',
          start: 'top 16%',
          end: '100% 66',
          scrub: true,
        },
      });
      newsTrigger.from('#newsBlurCircle', { scale: 0.5 }, 0);
      const contactTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: '#js_triggerContact',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      });
      contactTrigger
        .from('#contactCircle4', { x: -470 }, 0)
        .from('#contactCircle3', { x: -485 }, 0)
        .from('#contactCircle2', { x: -505 }, 0)
        .from('#contactCircle1', { x: -520 }, 0)
        .from('#contactArrow', { x: -300 }, 0)
        .from('#contactCircleBlank', { scale: 0.5 }, 1)
        .from('#contactTaicca', { scale: 0.5 }, 1);
    },
  });
});
