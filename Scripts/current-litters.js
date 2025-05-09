$(document).ready(function() {
    // When an image is clicked
    $('img').on('click', function(e) {
        e.stopPropagation(); // Prevent the document click from firing
        $('img').not(this).removeClass('enlarged'); // Remove from others
        $(this).toggleClass('enlarged'); // Toggle on clicked
    });

    // When clicking anywhere else on the document
    $(document).on('click', function() {
        $('img').removeClass('enlarged'); // Remove from all
    });
});

$(document).ready(function() {
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

// animated border

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.puppy').forEach(puppy => {
      const available = puppy.querySelector('.pups-avaible');
      if (available && getComputedStyle(available).display !== 'none') {
        puppy.classList.add('is-available');
      }
    });
  });