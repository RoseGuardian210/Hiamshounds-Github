$(document).ready(function() {
  $("#OurBeliefsInformation").slideDown(1200).css("opacity", 1);
});

$(window).on("scroll", function scrollFunctionPage() {
  const triggerElement = $("#OurBeliefsInformation");
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const triggerPoint = triggerElement.offset().top + triggerElement.outerHeight();

  if (scrollTop + windowHeight >= triggerPoint) {
    // Trigger animation once
    $("#our-standarts").slideDown(1200).css("opacity", 1);

    // Optional: unbind scroll to avoid repeat animation
    $(window).off("scroll");
  }
});