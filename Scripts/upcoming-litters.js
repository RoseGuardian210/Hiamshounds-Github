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

// no litters button movement

function moveButton() {
    const buttonLink = document.querySelector('.EnquireBTN')?.parentElement;
    const nolittersContainer = document.querySelector('.no-litters');
    const imgContainer = document.querySelector('.noLitters-imgContainer');

    if (!buttonLink || !nolittersContainer || !imgContainer) return;

    const isMobileOrTablet = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobileOrTablet && buttonLink.parentElement === imgContainer) {
      nolittersContainer.insertBefore(buttonLink, nolittersContainer.firstChild);
    } else if (!isMobileOrTablet && buttonLink.parentElement === nolittersContainer) {
      imgContainer.appendChild(buttonLink);
    }
  }

  window.addEventListener('DOMContentLoaded', moveButton);
  window.addEventListener('resize', moveButton);