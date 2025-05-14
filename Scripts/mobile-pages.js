function setFullHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set on load
setFullHeight();
// And update on resize
window.addEventListener('resize', setFullHeight);

$(document).ready(function() {
  $(".background-container").css("opacity", 1);
  $(".paragraph1").animate({left: 0, opacity: 1}, 800, 'swing');
  $(".image-containerSCH").animate({right: 0, opacity: 1}, 800, 'swing');
  $(".paragraphSCH").animate({left: 0, opacity: 1}, 800, 'swing');
  $(".image-containerGER").animate({left: 0, opacity: 1}, 800, 'swing');
  $(".paragraphGER").animate({right: 0, opacity: 1}, 800, 'swing');
});
$(window).on("scroll", function scrollFunctionPage() {
  const triggerElement = $(".paragraph1");
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const triggerPoint = triggerElement.offset().top + triggerElement.outerHeight();

  if (scrollTop + windowHeight >= triggerPoint) {
    // Trigger animation once
    $(".paragraph2").animate({right: 0, opacity:1 }, 800, 'swing');
    setTimeout(() => {
      $(".paragraph3").animate({left: 0, opacity:1 }, 800, 'swing');
    }, 600);

    // Optional: unbind scroll to avoid repeat animation
    $(window).off("scroll");
  }
});