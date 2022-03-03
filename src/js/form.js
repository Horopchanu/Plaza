domReady(() => {
  const $rentForm = $(".rent-form ");
  if ($rentForm.length) {
    $rentForm.parsley().on("form:error", () => {
      const scrollbar = Scrollbar.get(document.querySelector(".wrapper"));
      const wrapperRect = document
        .querySelector(".wrapper .scroll-content")
        .getBoundingClientRect();
      const errorRect = document
        .querySelector(".parsley-error")
        .getBoundingClientRect();
      const offset = errorRect.top - wrapperRect.top - 104;
      scrollbar.scrollTo(0, offset, 1000);
    });
  }

  const dropzone = new Dropzone("div#dropzone", { url: "/file/post" });
  dropzone.element.classList.add("dropzone");
});
