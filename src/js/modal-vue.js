domReady(() => {
  const modal = new Vue({
    el: "#modal",
    props: {
      modalId: Number,
    },
    data() {
      return {
        code: "",
        type: "",
        modalHeaderBg: {
          url: "",
          alt: "",
        },
        modalHeaderLogo: {
          url: "",
          alt: "",
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
          inst: "",
        },
        modalTitle: "",
        modalSubtitle: "",
        modalSubtitleBold: "",
        date: "",
        modalAnnouncement: "",
        modalText: "",
        gallery: {
          title: "",
          slides: [
            {
              img: {
                url: "",
                alt: "",
              },
              text: "",
            },
          ],
        },
        recommend: {
          title: "",
          slides: [],
        },
        saleShop: {},
      };
    },
    watch: {
      modalId(id) {
        if (id) {
          this.updateModal(id);
        }
      },
    },
    methods: {
      updateModal(id) {
        const url = `https://pavplaza.ru/local/modal/?ID=${id}`;
        let modalObject = {};
        fetch(url).then((response) => {
          response.text().then((text) => {
            modalObject = JSON.parse(text);
            // console.log(modalObject);
            this.type = modalObject.type;
            this.code = modalObject.code || "";
            this.additionalType = modalObject.additionalType || "";
            this.modalHeaderBg.url = modalObject.modalHeaderBg.url || "";
            this.modalHeaderBg.alt = modalObject.modalHeaderBg.alt || "";
            this.modalHeaderLogo.url = modalObject.modalHeaderLogo.url || "";
            this.modalHeaderLogo.alt = modalObject.modalHeaderLogo.alt || "";
            this.likesOnLoad = modalObject.likes || 0;
            this.likes = Number(modalObject.likes) || 0;
            this.places = modalObject.places || "";
            this.tenantTitle = modalObject.tenantTitle || "";
            this.tenantDescription = modalObject.tenantDescription || "";
            this.tenantUrl = modalObject.tenantUrl || "";
            this.tenantMapUrl = modalObject.tenantMapUrl || "";
            this.tenantTelFormatted = modalObject.tenantTelFormatted || "";
            this.tenantTelLink = modalObject.tenantTelLink || "";
            this.tenantWorktime = modalObject.tenantWorktime || "";
            this.tenantSocial.vk = modalObject.tenantSocial.vk || "";
            this.tenantSocial.fb = modalObject.tenantSocial.fb || "";
            this.tenantSocial.twitter = modalObject.tenantSocial.twitter || "";
            this.tenantSocial.twitter =
              modalObject.tenantSocial.instagram || "";
            this.modalTitle = modalObject.modalTitle || "";
            this.modalSubtitle = modalObject.modalSubtitle || "";
            this.modalSubtitleBold = modalObject.modalSubtitleBold || "";
            this.date = modalObject.date || "";
            this.modalAnnouncement = modalObject.modalAnnouncement || "";
            this.modalText = modalObject.modalText || "";
            this.saleShop =
              modalObject.saleShop && modalObject.saleShop[0]
                ? modalObject.saleShop[0]
                : {};
            this.gallery.title = modalObject.gallery.title || "";
            this.gallery.slides = modalObject.gallery.slides || [];
            this.recommend.title = modalObject.recommend?.title || "";
            this.recommend.slides = modalObject.recommend?.slides || [];
            const modalScroll = document.querySelector(".modal__scroll");

            const scrollbarModal = Scrollbar.init(modalScroll, {
              damping: 0.1,
              syncCallbacks: true,
            });
            scrollbarModal.scrollTo(0, 0);

            document.body.style.overflow = "hidden";

            gsap.to(this.$el, {
              opacity: 1,
              visibility: "visible",
              duration: 0.2,
              onComplete() {
                const modalGallerySlider = document.querySelector(
                  ".modal-gallery-slider"
                );
                let modalGallerySliderInstance;
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
                      nextEl:
                        ".modal-section.-gallery .swiper-button-next-custom",
                      prevEl:
                        ".modal-section.-gallery .swiper-button-prev-custom",
                    },
                    breakpoints: {
                      760: {
                        slidesOffsetBefore: 24,
                        slidesOffsetAfter: 24,
                        spaceBetween: 24,
                      },
                      992: {
                        slidesOffsetBefore: 24,
                        slidesOffsetAfter: 24,
                        spaceBetween: 20,
                      },
                    },
                  });
                }
                const modalRecommendSlider = document.querySelector(
                  ".modal-recommend-slider"
                );
                if (modalRecommendSlider) {
                  const modalRecommendSliderInstance = new Swiper(
                    modalRecommendSlider,
                    {
                      speed: 500,
                      slidesOffsetBefore: 10,
                      slidesOffsetAfter: 10,
                      spaceBetween: 10,
                      slidesPerView: "auto",
                      observer: true,
                      navigation: {
                        nextEl:
                          ".modal-section.-recommend .swiper-button-next-custom",
                        prevEl:
                          ".modal-section.-recommend .swiper-button-prev-custom",
                      },
                      breakpoints: {
                        992: {
                          slidesOffsetBefore: 24,
                          slidesOffsetAfter: 24,
                          spaceBetween: 20,
                        },
                      },
                    }
                  );
                }
              },
            });

            gsap.fromTo(
              this.$el.querySelector(".modal__body"),
              {
                opacity: 0,
                visibility: "hidden",
                y: 500,
              },
              {
                opacity: 1,
                visibility: "visible",
                y: 0,
                delay: 0.2,
                duration: 0.3,
              }
            );

            history.replaceState(
              "",
              "",
              `/${this.additionalType}?ID=${this.code ? this.code : id}`
            );
          });
        });
      },
      closeModal(event) {
        if (
          event.target.closest(".modal__close") ||
          !event.target.closest(".modal__body")
        ) {
          document.body.style.overflow = "auto";

          gsap.fromTo(
            this.$el.querySelector(".modal__body"),
            {
              opacity: 1,
              visibility: "visible",
              y: 0,
            },
            {
              opacity: 0,
              visibility: "hidden",
              y: 500,
              duration: 0.3,
            }
          );
          gsap.to(this.$el, {
            opacity: 0,
            delay: 0.3,
            duration: 0.2,
          });
          gsap.to(this.$el, {
            visibility: "hidden",
            delay: 0.5,
            duration: 0,
          });
          this.modalId = null;
        }
      },
      like() {
        fetch(
          `http://dev.pavplaza.ru/local/modal/like.php?id=${this.modalId}&action=add`,
          {
            method: "POST",
          }
        ).then((response) => {
          console.log(response);
          if (response.status === "success") {
            this.likes += 1;
          }
        });
      },
    },
    mounted() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const id = urlParams.get("ID");
      if (id) {
        this.updateModal(id);
      }
    },
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".tenant-item")) {
      const { modalId } = event.target.closest(".tenant-item").dataset;
      modal.modalId = modalId;
    } else if (event.target.closest(".varied-card")) {
      const { modalId } = event.target.closest(".varied-card").dataset;
      modal.modalId = modalId;
    } else if (event.target.closest(".ticker__item-link")) {
      const { modalId } = event.target.closest(".ticker__item-link").dataset;
      modal.modalId = modalId;
    } else if (event.target.closest(".tenants-alphabet__tenant-sale")) {
      const { modalId } = event.target.closest("button").dataset;
      modal.modalId = modalId;
    } else if (event.target.closest(".tenants-alphabet__line")) {
      const { modalId } = event.target.closest(
        ".tenants-alphabet__line"
      ).dataset;
      modal.modalId = modalId;
    }
  });
});
