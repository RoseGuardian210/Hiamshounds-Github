(function() {
  $(document).ready(function() {
    $("#OurBeliefsInformation").slideDown(600).css("opacity", 1);
  });

  function onScrollAboutPage() {
    const triggerElement = $("#OurBeliefsInformation");
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const triggerPoint = triggerElement.offset().top + triggerElement.outerHeight();

    if (scrollTop + windowHeight >= triggerPoint) {
      $("#our-standarts").slideDown(600).css("opacity", 1);
      $(window).off("scroll", onScrollAboutPage);
    }
  }

  $(window).on("scroll", onScrollAboutPage);
})();
