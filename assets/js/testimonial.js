;(function ($) {
  "use strict"

  $(document).ready(function () {
    /*--------------------------------------
            testimonial-slider
        ---------------------------------------*/
    $("#testimonial-slider").AnimatedSlider({
      prevButton: "#btn_prev",
      nextButton: "#btn_next",
      visibleItems: 5,
      infiniteScroll: true,
      willChangeCallback: function (obj, item) {
        $("#statusText").text("Will change to " + item)
      },
      changedCallback: function (obj, item) {
        $("#statusText").text("Changed to " + item)
      },
    })
  })
})(jQuery)
