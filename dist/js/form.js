"use strict";

domReady(function () {
  var $rentForm = $(".rent-form ");

  if ($rentForm.length) {
    $rentForm.parsley().on("form:error", function () {
      var scrollbar = Scrollbar.get(document.querySelector(".wrapper"));
      var wrapperRect = document.querySelector(".wrapper .scroll-content").getBoundingClientRect();
      var errorRect = document.querySelector(".parsley-error").getBoundingClientRect();
      var offset = errorRect.top - wrapperRect.top - 104;
      scrollbar.scrollTo(0, offset, 1000);
    });
  }

  var dropzone = new Dropzone("div#dropzone", {
    url: "/file/post"
  });
  dropzone.element.classList.add("dropzone");
});