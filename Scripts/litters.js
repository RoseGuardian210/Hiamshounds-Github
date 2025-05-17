(function() {
  $(document).ready(function() {
    $(document).on('click', function() {
      $('img').removeClass('enlarged');
    });

    $('img').on('click', function(e) {
      e.stopPropagation();
      $('img').not(this).removeClass('enlarged');
      $(this).toggleClass('enlarged');
    });

    $('.toggle-btn').on('click', function() {
      const $btn = $(this);
      const targetSelector = $btn.data('target');
      const $panel = $(targetSelector);
      const $arrow = $btn.find('.arrow-icon');
      const isVisible = $panel.is(':visible');

      if (isVisible) {
        $arrow.removeClass('rotated').addClass('rotating');
      } else {
        $arrow.removeClass('rotating').addClass('rotated');
      }

      $panel.slideToggle(500);
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.puppy').forEach(puppy => {
      const available = puppy.querySelector('.pups-avaible');
      if (available && getComputedStyle(available).display !== 'none') {
        puppy.classList.add('is-available');
      }
    });
  });

  function moveButtonLitters(containerClass, imgContainerClass) {
    const buttonLink = document.querySelector('.EnquireBTN')?.parentElement;
    const container = document.querySelector(containerClass);
    const imgContainer = document.querySelector(imgContainerClass);

    if (!buttonLink || !container || !imgContainer) return;

    const isMobileOrTablet = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobileOrTablet && buttonLink.parentElement === imgContainer) {
      container.insertBefore(buttonLink, container.firstChild);
    } else if (!isMobileOrTablet && buttonLink.parentElement === container) {
      imgContainer.appendChild(buttonLink);
    }
  }

  window.addEventListener('DOMContentLoaded', () => moveButtonLitters('.no-puppies', '.noPups-imgContainer'));
  window.addEventListener('DOMContentLoaded', () => moveButtonLitters('.no-litters', '.noLitters-imgContainer'));
  window.addEventListener('resize', () => {
    moveButtonLitters('.no-puppies', '.noPups-imgContainer');
    moveButtonLitters('.no-litters', '.noLitters-imgContainer');
  });
})();
