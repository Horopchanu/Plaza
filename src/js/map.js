/* eslint-disable prefer-arrow-callback */
$(() => {
  if ($(".map").length) {
    const map = $(".map").mapplic({
      source: "mall.json",
      height: 846,
      maxheight: 846,
      minimap: false,
      sidebar: true,
      hovertip: true,
      mapfill: true,
      thumbholder: true,
      portrait: false,
      mousewheel: false,
      maxscale: 1.5,
      highlight: false,
      styles: {
        hover: {
          fill: "red",
        },
      },
    });
    map.on("mapstart ", (e, self) => {
      $(".mapplic-search-input").attr("placeholder", "Что будем искать?");
      if ($(window).width() < 1299 && $(window).width() >= 1200) {
        map.data("mapplic").o.height = 746;
      } else if ($(window).width() < 1199 && $(window).width() >= 992) {
        map.data("mapplic").o.height = 574;
      } else if ($(window).width() < 992) {
        map.data("mapplic").o.height = 606;
      }
    });
    map.on("locationopened", (e, location) => {
      const currentCategoriesFilter = [];
      $(".mapplic-tag").each(function () {
        currentCategoriesFilter.push($(this).data("id"));
      });
      if (!currentCategoriesFilter.includes(location.category)) {
        $(".mapplic-tag").trigger("click");
      }
      $(".mapplic-list-container").hide();
      $(".mapplic-external").css(
        "margin-top",
        $(".mapplic-filter-tags").innerHeight()
      );
      $(".mapplic-external").show();
      $(".mapplic-clickable").removeClass("-focused");
      $(`#${location.id}`).addClass("-focused");
      $(".mapplic-map").removeClass("mapplic-filtered");
      if (location.id !== "accessibility") {
        $(".mapplic-external__close").removeClass("-hidden");
      }
    });
    map.on("locationclosed", (e, self) => {
      // $(".mapplic-list-container").show();
      $(".mapplic-external__close").addClass("-hidden");
      $(".mapplic-clickable").removeClass("-focused");
    });
    $(document).on("input focus", ".mapplic-search-input", () => {
      $(".mapplic-list-container").show();
      $(".mapplic-external").hide();
    });
    $(window).on("resize", () => {
      if ($(window).width() < 1299 && $(window).width() >= 1200) {
        map.data("mapplic").o.height = 746;
      } else if ($(window).width() < 1199 && $(window).width() >= 992) {
        map.data("mapplic").o.height = 574;
      } else if ($(window).width() < 992) {
        map.data("mapplic").o.height = 606;
      } else {
        map.data("mapplic").o.height = 846;
      }
    });
    map.on("mapready", function (e, self) {
      setTimeout(function () {
        const hideItems = self.data.elements_hide || [];
        if (hideItems.length) {
          hideItems.forEach(function (element) {
            $(
              '.mapplic-list-container [data-location="' + element + '"]'
            ).addClass("-hide-forever");
          });
        }
        $(".mapplic-list-container").wrap(
          '<div class="mapplic-list-container-outer"></div>'
        );

        const scrollbar = Scrollbar.getAll();
        $(".mapplic-list-container").on("wheel", function (event) {
          if (event.originalEvent.deltaY !== 0) {
            if (event.originalEvent.deltaY < 0) {
              const hasVerticalScrollbar =
                $(this).get(0).scrollHeight > $(this).get(0).clientHeight;
              if (hasVerticalScrollbar) {
                event.preventDefault();
                $(this).scrollTop(
                  $(this).scrollTop() + event.originalEvent.deltaY
                );
              }
            } else {
              event.preventDefault();
              const hasVerticalScrollbar =
                $(this).get(0).scrollHeight > $(this).get(0).clientHeight;
              if (hasVerticalScrollbar) {
                event.preventDefault();
                $(this).scrollTop(
                  $(this).scrollTop() + event.originalEvent.deltaY
                );
              }
            }
          }
        });
      }, 500);

      $(".mapplic-clickable").each(function () {
        let id = $(this).attr("id");
        if (
          id.indexOf("ELEVATOR") >= 0 ||
          id.indexOf("STAIRS") >= 0 ||
          id.indexOf("TOILET") >= 0 ||
          id.indexOf("INVALID") >= 0 ||
          id.indexOf("MOTHER") >= 0 ||
          id.indexOf("ESCALATOR") >= 0 ||
          id.indexOf("CHRISTMAS") >= 0
        ) {
          $(this).addClass("map-additional-icons");
        }
      });
    });
    $(".mapplic-external__close").on("click", () => {
      map.data("mapplic").hideLocation();
      $(this).addClass("-hidden");
      $(".mapplic-tag").trigger("click");
    });
  }

  let yellowTimer;
  $(document).on("mouseenter", ".map-additional-icons", function () {
    clearTimeout(yellowTimer);
    $(".mapplic-tooltip-wrap").addClass("-yellow");
  });
  $(document).on("mouseleave ", ".map-additional-icons", function () {
    yellowTimer = setTimeout(function () {
      $(".mapplic-tooltip-wrap").removeClass("-yellow");
    }, 600);
  });

  $(document).on("input", ".mapplic-search-input", function () {
    if ($(this).val()) {
      $(".mapplic-list-container").addClass("-show");
      $(".mapplic-list-container").removeClass("-hide");
    } else {
      $(".mapplic-list-container").removeClass("-show");
    }
  });
  $(document).on("click", ".mapplic-search-input", function () {
    $(".mapplic-list-container").removeClass("-show");
  });

  function repeatOften() {
    $(".mapplic-dir-item").removeClass("-no-margin-top");
    $(".mapplic-dir-item:visible:first").addClass("-no-margin-top");
    requestAnimationFrame(repeatOften);
  }
  requestAnimationFrame(repeatOften);
});
