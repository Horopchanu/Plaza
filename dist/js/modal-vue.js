"use strict";

domReady(function () {
  var modal = new Vue({
    el: "#modal",
    props: {
      modalId: Number
    },
    data: function data() {
      return {
        code: "",
        type: "",
        modalHeaderBg: {
          url: "",
          alt: ""
        },
        modalHeaderLogo: {
          url: "",
          alt: ""
        },
        likesOnLoad: null,
        likes: null,
        places: null,
        tenantTitle: "",
        tenantDescription: "",
        tenantUrl: "",
        tenantMapUrl: "",
        tenantTelFormatted: "",
        tenantTelLink: "",
        tenantWorktime: "",
        tenantSocial: {
          vk: "",
          fb: "",
          twitter: "",
          inst: ""
        },
        modalTitle: "",
        modalSubtitle: "",
        modalSubtitleBold: "",
        date: "",
        modalAnnouncement: "",
        modalText: "",
        gallery: {
          title: "",
          slides: [{
            img: {
              url: "",
              alt: ""
            },
            text: ""
          }]
        },
        recommend: {
          title: "",
          slides: []
        },
        saleShop: {}
      };
    },
    watch: {
      modalId: function modalId(id) {
        if (id) {
          this.updateModal(id);
        }
      }
    },
    methods: {
      updateModal: function updateModal(id) {
        var _this = this;

        var url = "https://pavplaza.ru/local/modal/?ID=".concat(id);
        var modalObject = {};
        fetch(url).then(function (response) {
          response.text().then(function (text) {
            var _modalObject$recommen, _modalObject$recommen2;

            modalObject = JSON.parse(text); // console.log(modalObject);

            _this.type = modalObject.type;
            _this.code = modalObject.code || "";
            _this.additionalType = modalObject.additionalType || "";
            _this.modalHeaderBg.url = modalObject.modalHeaderBg.url || "";
            _this.modalHeaderBg.alt = modalObject.modalHeaderBg.alt || "";
            _this.modalHeaderLogo.url = modalObject.modalHeaderLogo.url || "";
            _this.modalHeaderLogo.alt = modalObject.modalHeaderLogo.alt || "";
            _this.likesOnLoad = modalObject.likes || 0;
            _this.likes = Number(modalObject.likes) || 0;
            _this.places = modalObject.places || "";
            _this.tenantTitle = modalObject.tenantTitle || "";
            _this.tenantDescription = modalObject.tenantDescription || "";
            _this.tenantUrl = modalObject.tenantUrl || "";
            _this.tenantMapUrl = modalObject.tenantMapUrl || "";
            _this.tenantTelFormatted = modalObject.tenantTelFormatted || "";
            _this.tenantTelLink = modalObject.tenantTelLink || "";
            _this.tenantWorktime = modalObject.tenantWorktime || "";
            _this.tenantSocial.vk = modalObject.tenantSocial.vk || "";
            _this.tenantSocial.fb = modalObject.tenantSocial.fb || "";
            _this.tenantSocial.twitter = modalObject.tenantSocial.twitter || "";
            _this.tenantSocial.twitter = modalObject.tenantSocial.instagram || "";
            _this.modalTitle = modalObject.modalTitle || "";
            _this.modalSubtitle = modalObject.modalSubtitle || "";
            _this.modalSubtitleBold = modalObject.modalSubtitleBold || "";
            _this.date = modalObject.date || "";
            _this.modalAnnouncement = modalObject.modalAnnouncement || "";
            _this.modalText = modalObject.modalText || "";
            _this.saleShop = modalObject.saleShop && modalObject.saleShop[0] ? modalObject.saleShop[0] : {};
            _this.gallery.title = modalObject.gallery.title || "";
            _this.gallery.slides = modalObject.gallery.slides || [];
            _this.recommend.title = ((_modalObject$recommen = modalObject.recommend) === null || _modalObject$recommen === void 0 ? void 0 : _modalObject$recommen.title) || "";
            _this.recommend.slides = ((_modalObject$recommen2 = modalObject.recommend) === null || _modalObject$recommen2 === void 0 ? void 0 : _modalObject$recommen2.slides) || [];
            var modalScroll = document.querySelector(".modal__scroll");
            var scrollbarModal = Scrollbar.init(modalScroll, {
              damping: 0.1,
              syncCallbacks: true
            });
            scrollbarModal.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
            gsap.to(_this.$el, {
              opacity: 1,
              visibility: "visible",
              duration: 0.2,
              onComplete: function onComplete() {
                var modalGallerySlider = document.querySelector(".modal-gallery-slider");
                var modalGallerySliderInstance;

                if (modalGallerySlider) {
                  modalGallerySliderInstance = new Swiper(modalGallerySlider, {
                    speed: 500,
                    slidesOffsetBefore: 10,
                    slidesOffsetAfter: 10,
                    spaceBetween: 10,
                    slidesPerView: "auto",
                    observer: true,
                    observerParents: true,
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
                      992: {
                        slidesOffsetBefore: 24,
                        slidesOffsetAfter: 24,
                        spaceBetween: 20
                      }
                    }
                  });
                }
              }
            });
            gsap.fromTo(_this.$el.querySelector(".modal__body"), {
              opacity: 0,
              visibility: "hidden",
              y: 500
            }, {
              opacity: 1,
              visibility: "visible",
              y: 0,
              delay: 0.2,
              duration: 0.3
            });
            history.replaceState("", "", "/".concat(_this.additionalType, "?ID=").concat(_this.code ? _this.code : id));
          });
        });
      },
      closeModal: function closeModal(event) {
        if (event.target.closest(".modal__close") || !event.target.closest(".modal__body")) {
          document.body.style.overflow = "auto";
          gsap.fromTo(this.$el.querySelector(".modal__body"), {
            opacity: 1,
            visibility: "visible",
            y: 0
          }, {
            opacity: 0,
            visibility: "hidden",
            y: 500,
            duration: 0.3
          });
          gsap.to(this.$el, {
            opacity: 0,
            delay: 0.3,
            duration: 0.2
          });
          gsap.to(this.$el, {
            visibility: "hidden",
            delay: 0.5,
            duration: 0
          });
          this.modalId = null;
        }
      },
      like: function like() {
        var _this2 = this;

        fetch("http://dev.pavplaza.ru/local/modal/like.php?id=".concat(this.modalId, "&action=add"), {
          method: "POST"
        }).then(function (response) {
          console.log(response);

          if (response.status === "success") {
            _this2.likes += 1;
          }
        });
      }
    },
    mounted: function mounted() {
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var id = urlParams.get("ID");

      if (id) {
        this.updateModal(id);
      }
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.closest(".tenant-item")) {
      var modalId = event.target.closest(".tenant-item").dataset.modalId;
      modal.modalId = modalId;
    } else if (event.target.closest(".varied-card")) {
      var _modalId = event.target.closest(".varied-card").dataset.modalId;
      modal.modalId = _modalId;
    } else if (event.target.closest(".ticker__item-link")) {
      var _modalId2 = event.target.closest(".ticker__item-link").dataset.modalId;
      modal.modalId = _modalId2;
    } else if (event.target.closest(".tenants-alphabet__tenant-sale")) {
      var _modalId3 = event.target.closest("button").dataset.modalId;
      modal.modalId = _modalId3;
    } else if (event.target.closest(".tenants-alphabet__line")) {
      var _modalId4 = event.target.closest(".tenants-alphabet__line").dataset.modalId;
      modal.modalId = _modalId4;
    }
  });
});