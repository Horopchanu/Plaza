/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
function domReady(cb) {
  document.addEventListener("DOMContentLoaded", cb);
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    cb();
  }
}

domReady(function () {
  objectFitImages();

  const aboutGallerySlider = document.querySelector(".about-gallery__slider");
  if (aboutGallerySlider) {
    const aboutGallerySliderInstance = new Swiper(aboutGallerySlider, {
      speed: 500,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".about-gallery__arrows .swiper-button-next-custom",
        prevEl: ".about-gallery__arrows .swiper-button-prev-custom",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 48,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const heroTabBtnsList = document.querySelector(".hero__tab-btns-list");
  if (heroTabBtnsList) {
    const heroTabBtnsListInstance = new Swiper(heroTabBtnsList, {
      slidesPerView: "auto",
      spaceBetween: 10,
      watchOverflow: true,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      freeMode: {
        enabled: true,
      },
      breakpoints: {
        760: {
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
    });
  }

  const errorLinksList = document.querySelector(".error-links__list");
  if (errorLinksList) {
    const errorLinksListInstance = new Swiper(errorLinksList, {
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      slidesOffsetBefore: 24,
      slidesOffsetAfter: 24,
      freeMode: {
        enabled: true,
      },
      breakpoints: {
        760: {
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
    });
  }

  // карта
  const mapEl = document.querySelector("#map");
  if (mapEl) {
    ymaps.ready(function () {
      const map = new ymaps.Map(mapEl, {
        center: [55.730878995137395, 37.63884199960926],
        zoom: 18,
        controls: ["routePanelControl", "zoomControl"],
      });

      map.behaviors.disable("scrollZoom");
      map.behaviors.disable("dblClickZoom");
      map.behaviors.disable("multiTouch");

      if (window.innerWidth < 760) {
        map.behaviors.disable("drag");
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth < 760) {
          if (map.behaviors.isEnabled("drag")) {
            map.behaviors.disable("drag");
          }
        } else if (window.innerWidth >= 760) {
          if (!map.behaviors.isEnabled("drag")) {
            map.behaviors.enable("drag");
          }
        }
      });

      const control = map.controls.get("routePanelControl");
      const zoom = map.controls.get("zoomControl");

      control.routePanel.state.set({
        type: "masstransit",
        fromEnabled: true,
        toEnabled: false,
        to: "Москва, Павелецкая площадь",
      });

      zoom.options.set({
        position: {
          left: "auto",
          right: 10,
          top: 10,
        },
      });
    });
  }

  const selects = document.querySelectorAll(".ui-form__select");
  if (selects.length) {
    selects.forEach(function (select) {
      $(select).select2({
        dropdownParent: ".page-wrap",
        minimumResultsForSearch: Infinity,
        width: "100%",
      });
    });
  }

  const telInputs = document.querySelectorAll(".ui-form__input.-tel");
  if (telInputs.length) {
    telInputs.forEach(function (input) {
      const phoneMask = IMask(input, {
        mask: "+{7} (000) 000-00-00",
      });
    });
  }

  const numberInputs = document.querySelectorAll(
    ".ui-form__input.-number, textarea.-number"
  );
  if (numberInputs.length) {
    numberInputs.forEach(function (input) {
      const numberMask = IMask(input, {
        mask: Number,
        min: 0,
        max: 1000000000,
        thousandsSeparator: " ",
      });
    });
  }

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMapPage = window.location.href.indexOf("map") > -1;
  const isSafariAndMapPage = isSafari && isMapPage;

  const footerMain = document.querySelector(".footer-main");
  let footerHeight;
  if (footerMain) {
    footerHeight = footerMain.offsetHeight;
  }
  const wrapper = document.querySelector(".wrapper");
  const { Scrollbar } = window;
  let scrollbar;
  if (window.innerWidth > 1199 && !isSafariAndMapPage) {
    scrollbar = Scrollbar.init(document.querySelector(".wrapper"), {
      damping: 0.1,
      syncCallbacks: true,
    });
  }

  const scrollHeigth =
    window.innerWidth > 1199 && !isSafariAndMapPage
      ? document.querySelector(".scroll-content").scrollHeight
      : document.querySelector(".page-wrap").scrollHeight;
  const viewportHeight = window.innerHeight;
  if (window.innerWidth > 1199 && !isSafariAndMapPage) {
    if (footerMain) {
      if (viewportHeight > footerHeight) {
        document.querySelector(
          ".scroll-content"
        ).style.paddingBottom = `${footerHeight}px`;
      } else {
        footerMain.style.position = "static";
      }
    }
  } else if (footerMain) {
    if (viewportHeight > footerHeight) {
      document.querySelector("body").style.paddingBottom = `${footerHeight}px`;
    } else {
      footerMain.style.position = "static";
    }
  }

  const header = document.querySelector(".header");
  const headerTop = document.querySelector(".header-top");
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    document.body.classList.add("is-ie-11");
  }

  if (window.innerWidth > 1199 && !isSafariAndMapPage) {
    scrollbar.addListener(function (offset) {
      if (footerMain) {
        const footerTop = offset.offset.y + viewportHeight - footerHeight;
        footerMain.style.top = footerTop >= 0 ? `${footerTop}px` : 0;
        footerMain.style.left = `${offset.offset.x}px`;
      }

      if (!isIE11) {
        headerTop.style.top = `${offset.offset.y}px`;
      } else if (footerMain) {
        footerMain.style.position = "static";
      }
    });
  }
  window.addEventListener("resize", function () {
    if (footerMain) {
      footerHeight = footerMain.offsetHeight;
      if (viewportHeight > footerHeight) {
        document.querySelector(
          ".scroll-content"
        ).style.paddingBottom = `${footerHeight}px`;
        footerMain.style.position = "fixed";
      } else {
        document.querySelector(".scroll-content").style.paddingBottom = 0;
        footerMain.style.position = "static";
      }
    }
  });

  const mobileMenuBtn = document.querySelector(".header-top__menu-btn");
  mobileMenuBtn.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("js-open");
    document.querySelector(".header").classList.toggle("-mobile-menu-open");
    if (document.querySelector(".mobile-menu").classList.contains("js-open")) {
      document.querySelector(".scrollbar-track-y").style.opacity = 0;
      bodyScrollLock.disableBodyScroll(document.querySelector(".mobile-menu"));
    } else {
      document
        .querySelector(".scrollbar-track-y")
        .style.removeProperty("opacity");
      bodyScrollLock.enableBodyScroll(document.querySelector(".mobile-menu"));
    }
  });

  if (window.innerWidth > 1199 && !isSafariAndMapPage) {
    ScrollTrigger.scrollerProxy(document.querySelector("body"), {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    scrollbar.addListener(ScrollTrigger.update);
  }

  let logoGsap = gsap.fromTo(
    ".header-top__col.-logo",

    {
      "max-width": function () {
        if (window.innerWidth >= 760 && window.innerWidth < 992) {
          return 280;
        }
        if (window.innerWidth < 760) {
          return 200;
        }
        return 390;
      },
    },
    {
      "max-width": function () {
        if (window.innerWidth >= 992 && window.innerWidth < 1200) {
          return "334px";
        }
        if (window.innerWidth >= 760 && window.innerWidth < 992) {
          return "228px";
        }
        if (window.innerWidth < 760) {
          return "200px";
        }
        return "390px";
      },
      delay: 0.3,
      repeatRefresh: true,
      scrollTrigger: {
        start: 200,
        toggleActions: "play play  reverse reset",
      },
    }
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      start: 200,
      toggleActions: "play play reset reverse",
    },
  });
  tl.to(".header-top__actions-list", {
    opacity: 0,
    duration: 0.2,
  });
  tl.to(".-scroll-menu", {
    x: 0,
    opacity: 1,
    visibility: "visible",
    delay: 0.1,
    duration: 0.2,
  });

  window.addEventListener("resize", function () {
    logoGsap.kill();
    logoGsap = gsap.fromTo(
      ".header-top__col.-logo",
      {
        "max-width": function () {
          if (window.innerWidth >= 760 && window.innerWidth < 992) {
            return "280px";
          }
          if (window.innerWidth < 760) {
            return "200px";
          }
          return "390px";
        },
      },
      {
        "max-width": function () {
          if (window.innerWidth >= 992 && window.innerWidth < 1200) {
            return "334px";
          }
          if (window.innerWidth >= 760 && window.innerWidth < 992) {
            return "228px";
          }
          if (window.innerWidth < 760) {
            return "200px";
          }
          return "390px";
        },
        delay: 0.3,
        scrollTrigger: {
          start: 200,
          toggleActions: "play play play reverse",
          // end: 350,
          // scrub: 0.3,
        },
      }
    );
  });

  const mainBannerSlider = document.querySelector(".main-banner__slider");
  let mainBannerBulletAnimation;
  if (mainBannerSlider) {
    const mainBannerSliderInstance = new Swiper(mainBannerSlider, {
      speed: 1000,
      loop: true,
      preventInteractionOnTransition: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet(index, className) {
          return '<span class="swiper-pagination-bullet"><span class="swiper-pagination-bullet-fill"></span></span>';
        },
      },
      on: {
        afterInit(swiper) {
          const { delay } = swiper.params.autoplay;
          const activeBulletFill = swiper.pagination.el.querySelector(
            ".swiper-pagination-bullet-active .swiper-pagination-bullet-fill"
          );
          mainBannerBulletAnimation = gsap.to(activeBulletFill, {
            startAt: {
              x: "-100%",
            },
            x: 0,
            duration: delay / 1000,
            ease: "linear",
          });
        },

        slideChangeTransitionEnd(swiper) {
          const { delay } = swiper.params.autoplay;
          if (swiper.pagination.el) {
            const bulletFills = swiper.pagination.el.querySelectorAll(
              ".swiper-pagination-bullet-fill"
            );
            bulletFills.forEach(function (element) {
              element.style.transform = "translate3d(-300px,0,0)";
            });
            const activeBulletFill = swiper.pagination.el.querySelector(
              ".swiper-pagination-bullet-active .swiper-pagination-bullet-fill"
            );
            mainBannerBulletAnimation.kill();
            mainBannerBulletAnimation = gsap.to(activeBulletFill, {
              startAt: {
                x: "-100%",
              },
              x: 0,
              duration: delay / 1000,
              ease: "linear",
            });
          }
        },
      },
    });
  }

  const variedCardEventInfoTitles = document.querySelectorAll(
    ".varied-card__event-info-title"
  );
  if (variedCardEventInfoTitles.length) {
    variedCardEventInfoTitles.forEach(function (element) {
      shave(element, 44, { character: "..." });
    });
    window.addEventListener("resize", function () {
      variedCardEventInfoTitles.forEach(function (element) {
        shave(element, 44, { character: "..." });
      });
    });
  }

  const tickerLines = document.querySelectorAll(".ticker__line");

  function getTranslateX(myElement) {
    const style = window.getComputedStyle(myElement);
    const matrix = window.WebKitCSSMatrix
      ? new WebKitCSSMatrix(style.transform)
      : CSSMatrix(style.transform);
    return matrix.m41;
  }

  function checkOffset() {
    tickerLines.forEach(function (element) {
      const tickerList = element.lastElementChild;
      const translateX = getTranslateX(tickerList);
      const tickerListWidth = tickerList.offsetWidth;
      if (
        (!element.classList.contains("-reverse") &&
          translateX < window.innerWidth - tickerListWidth) ||
        (element.classList.contains("-reverse") && translateX > 0)
      ) {
        const clone = tickerList.cloneNode(true);
        element.append(clone);
        element.removeChild(element.firstChild);
      }
    });
    window.requestAnimationFrame(checkOffset);
  }

  if (tickerLines.length && !isIE11) {
    window.requestAnimationFrame(checkOffset);
    const tickerItemLinks = document.querySelectorAll(".ticker__item-link");
    document.addEventListener("mouseover", function (event) {
      if (event.target.closest(".ticker__item-link")) {
        event.target.closest(".ticker__line").classList.add("js-hover");
      }
    });
    document.addEventListener("mouseout", function (event) {
      if (event.target.closest(".ticker__item-link")) {
        event.target.closest(".ticker__line").classList.remove("js-hover");
      }
    });
    document.querySelectorAll(".ticker__line").forEach(function (element) {
      element.classList.add("js-hover");
      setTimeout(function () {
        element.classList.remove("js-hover");
      });
    });
  }

  const galleryInfoSlider = document.querySelector(".gallery__info-slider");
  let galleryInfoSliderAnimation;
  if (galleryInfoSlider) {
    const galleryImgSlider = document.querySelector(".gallery__img-slider");
    const galleryImgSliderInstance = new Swiper(galleryImgSlider, {
      effect: "fade",
      loop: true,
      speed: 500,
    });

    const galleryInfoSliderInstance = new Swiper(galleryInfoSlider, {
      speed: 500,
      loop: true,
      effect: "fade",
      preventInteractionOnTransition: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: galleryImgSliderInstance,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet(index, className) {
          return '<span class="swiper-pagination-bullet"><span class="swiper-pagination-bullet-fill"></span></span>';
        },
      },
      on: {
        afterInit(swiper) {
          const { delay } = swiper.params.autoplay;
          const activeBulletFill = swiper.pagination.el.querySelector(
            ".swiper-pagination-bullet-active .swiper-pagination-bullet-fill"
          );
          galleryInfoSliderAnimation = gsap.to(activeBulletFill, {
            startAt: {
              x: "-100%",
            },
            x: 0,
            duration: delay / 1000,
            ease: "linear",
          });
        },
        slideChangeTransitionEnd(swiper) {
          const { delay } = swiper.params.autoplay;
          if (swiper.pagination.el) {
            const bulletFills = swiper.pagination.el.querySelectorAll(
              ".swiper-pagination-bullet-fill"
            );
            bulletFills.forEach(function (element) {
              element.style.transform = "translate3d(-300px,0,0)";
            });
            const activeBulletFill = swiper.pagination.el.querySelector(
              ".swiper-pagination-bullet-active .swiper-pagination-bullet-fill"
            );
            galleryInfoSliderAnimation.kill();
            galleryInfoSliderAnimation = gsap.to(activeBulletFill, {
              startAt: {
                x: "-100%",
              },
              x: 0,
              duration: delay / 1000,
              ease: "linear",
            });
          }
        },
      },
    });
  }

  const searchModal = document.querySelector(".search-modal");

  function openSearchModal() {
    searchModal.classList.add("js-open");
    setTimeout(() => {
      document.querySelector(".search-modal__form-input").focus();
    }, 300);
  }

  function closeSearchModal() {
    searchModal.classList.remove("js-open");
  }

  const headerTopActionSearch = document.querySelectorAll(
    ".header-top__action.-search"
  );
  if (headerTopActionSearch.length) {
    headerTopActionSearch.forEach(function (element) {
      element.addEventListener("click", openSearchModal);
    });
  }
  const mobileMenuSearch = document.querySelector(".mobile-menu__link.-search");
  if (mobileMenuSearch) {
    mobileMenuSearch.addEventListener("click", openSearchModal);
  }

  const searchModalCloseBtn = document.querySelector(
    ".search-modal__form-close"
  );
  if (searchModalCloseBtn) {
    searchModalCloseBtn.addEventListener("click", closeSearchModal);
  }

  const searchModalOverlay = document.querySelector(".search-modal__overlay");
  if (searchModalOverlay) {
    searchModalOverlay.addEventListener("click", closeSearchModal);
  }

  setTimeout(function () {
    document.querySelector(".preloader").classList.add("js-hidden");
  }, 2000);

  const tenantsSectionSlider = document.querySelector(
    ".tenants-section__slider"
  );
  if (tenantsSectionSlider) {
    const tenantsSectionSliderInstance = new Swiper(tenantsSectionSlider, {
      slidesPerView: "auto",
      spaceBetween: 8,
      watchOverflow: true,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      freeMode: {
        enabled: true,
      },
      breakpoints: {
        760: {
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          spaceBetween: 16,
        },
      },
    });
  }

  const tenantsMobileFilterDropdowns = document.querySelectorAll(
    ".tenants-mobile-filter__dropdown"
  );
  if (tenantsMobileFilterDropdowns.length) {
    tenantsMobileFilterDropdowns.forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.target
          .closest(".tenants-mobile-filter__dropdown")
          .classList.toggle("-active");
        event.target
          .closest(".tenants-categories")
          .querySelector(".tenants-categories__list-wrap")
          .classList.toggle("-active");

        const tenantsActiveMobileFilterViewBtns = document.querySelectorAll(
          ".tenants-mobile-filter__view-btn.-active"
        );
        if (tenantsActiveMobileFilterViewBtns.length) {
          tenantsActiveMobileFilterViewBtns.forEach(function (btn) {
            btn.classList.remove("-active");
          });
        }

        const tenantsActiveViewMobileCollection = document.querySelectorAll(
          ".tenants-view.-mobile.-active"
        );
        if (tenantsActiveViewMobileCollection.length)
          tenantsActiveViewMobileCollection.forEach(function (el) {
            el.classList.remove("-active");
          });
      });
    });
  }
  const tenantsMobileFilterViewBtns = document.querySelectorAll(
    ".tenants-mobile-filter__view-btn"
  );
  if (tenantsMobileFilterViewBtns.length) {
    tenantsMobileFilterViewBtns.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.target
          .closest(".tenants-mobile-filter__view-btn")
          .classList.toggle("-active");
        event.target
          .closest(".tenants-categories")
          .querySelector(".tenants-view.-mobile")
          .classList.toggle("-active");

        const tenantsActiveMobileFilterDropdownCollection =
          document.querySelectorAll(".tenants-mobile-filter__dropdown.-active");
        if (tenantsActiveMobileFilterDropdownCollection.length) {
          tenantsActiveMobileFilterDropdownCollection.forEach(function (btn) {
            btn.classList.remove("-active");
          });
        }

        const tenantsCategoriesListWrapCollection = document.querySelectorAll(
          ".tenants-categories__list-wrap.-active"
        );
        if (tenantsCategoriesListWrapCollection.length) {
          tenantsCategoriesListWrapCollection.forEach(function (element) {
            element.classList.remove("-active");
          });
        }
      });
    });
  }

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".tenants-mobile-filter__dropdown") &&
      !event.target.closest(".tenants-categories__list-wrap") &&
      document.querySelector(".tenants-mobile-filter__dropdown.-active")
    ) {
      document
        .querySelector(".tenants-mobile-filter__dropdown.-active")
        .classList.remove("-active");
      document
        .querySelector(".tenants-categories__list-wrap.-active")
        .classList.remove("-active");
    }
  });
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".tenants-mobile-filter__view-btn") &&
      !event.target.closest(".tenants-view.-mobile") &&
      document.querySelector(".tenants-mobile-filter__view-btn.-active")
    ) {
      document
        .querySelector(".tenants-mobile-filter__view-btn.-active")
        .classList.remove("-active");
      document
        .querySelector(".tenants-view.-mobile.-active")
        .classList.remove("-active");
    }
  });

  const coockieOkBtn = document.querySelector(".coockie__ok-btn");
  if (coockieOkBtn) {
    coockieOkBtn.addEventListener("click", function () {
      this.closest(".coockie").classList.remove("js-visible");
    });
  }

  const footerSubscribeForm = document.querySelector(".footer-subscribe__form");
  if (footerSubscribeForm) {
    $(footerSubscribeForm)
      .parsley()
      .on("form:error", () => {
        $(footerSubscribeForm).addClass("-invalid");
      })
      .on("field:success", function () {
        $(footerSubscribeForm).removeClass("-invalid");
      });
  }
  const contactsCallbackForm = document.querySelector(
    ".contacts-callback__form"
  );
  if (contactsCallbackForm) {
    $(contactsCallbackForm).parsley();
  }
});
