"use strict";

domReady(function () {
  var modalScroll = document.querySelector(".modal__scroll");
  var scrollbarModal = Scrollbar.init(modalScroll, {
    damping: 0.1,
    syncCallbacks: true
  });
  var modalGallerySlider = document.querySelector(".modal-gallery-slider");

  if (modalGallerySlider) {
    var modalGallerySliderInstance = new Swiper(modalGallerySlider, {
      speed: 500,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      spaceBetween: 10,
      slidesPerView: "auto",
      observer: true,
      navigation: {
        nextEl: ".modal-section.-gallery .swiper-button-next-custom",
        prevEl: ".modal-section.-gallery .swiper-button-prev-custom"
      },
      breakpoints: {
        760: {
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
          spaceBetween: 24
        },
        992: {
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
          spaceBetween: 20
        }
      }
    });
  }

  var modalRecommendSlider = document.querySelector(".modal-recommend-slider");

  if (modalRecommendSlider) {
    var modalRecommendSliderInstance = new Swiper(modalRecommendSlider, {
      speed: 500,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
      spaceBetween: 10,
      slidesPerView: "auto",
      observer: true,
      navigation: {
        nextEl: ".modal-section.-recommend .swiper-button-next-custom",
        prevEl: ".modal-section.-recommend .swiper-button-prev-custom"
      },
      breakpoints: {
        768: {
          slidesOffsetBefore: 24,
          slidesOffsetAfter: 24,
          spaceBetween: 20
        }
      }
    });
  }
});