// $(document).ready(function() {
//     When an image is clicked
//     $('img').on('click', function(e) {
//         e.stopPropagation(); 
//         $('img').not(this).removeClass('enlarged'); 
//         $(this).toggleClass('enlarged'); 
//     });

//     When clicking anywhere else on the document
//     $(document).on('click', function() {
//         $('img').removeClass('enlarged'); 
//     });
// });

// $(document).ready(function() {
//     $('.toggle-btn').on('click', function() {
//         const $btn = $(this);
//         const targetSelector = $btn.data('target');
//         const $panel = $(targetSelector);
//         const $arrow = $btn.find('.arrow-icon');
//         const isVisible = $panel.is(':visible');

//         if (isVisible) {
//             $arrow.removeClass('rotated').addClass('rotating');
//         } else {
//             $arrow.removeClass('rotating').addClass('rotated');
//         }

//         $panel.slideToggle(500);
//     });
// });

// animated border

// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.puppy').forEach(puppy => {
//       const available = puppy.querySelector('.pups-avaible');
//       if (available && getComputedStyle(available).display !== 'none') {
//         puppy.classList.add('is-available');
//       }
//     });
//   });


// no puppies button movement

// function moveButton() {
//     const buttonLink = document.querySelector('.EnquireBTN')?.parentElement;
//     const noPuppiesContainer = document.querySelector('.no-puppies');
//     const imgContainer = document.querySelector('.noPups-imgContainer');

//     if (!buttonLink || !noPuppiesContainer || !imgContainer) return;

//     const isMobileOrTablet = window.matchMedia("(max-width: 1100px)").matches;

//     if (isMobileOrTablet && buttonLink.parentElement === imgContainer) {
//       noPuppiesContainer.insertBefore(buttonLink, noPuppiesContainer.firstChild);
//     } else if (!isMobileOrTablet && buttonLink.parentElement === noPuppiesContainer) {
//       imgContainer.appendChild(buttonLink);
//     }
//   }

//   window.addEventListener('DOMContentLoaded', moveButton);
//   window.addEventListener('resize', moveButton);


(function() {
  $(document).ready(function() {
    $('img').on('click', function(e) {
      e.stopPropagation();
      $('img').not(this).removeClass('enlarged');
      $(this).toggleClass('enlarged');
    });

    $(document).on('click', function() {
      $('img').removeClass('enlarged');
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

  function moveButton() {
    const buttonLink = document.querySelector('.EnquireBTN')?.parentElement;
    const noPuppiesContainer = document.querySelector('.no-puppies');
    const imgContainer = document.querySelector('.noPups-imgContainer');

    if (!buttonLink || !noPuppiesContainer || !imgContainer) return;

    const isMobileOrTablet = window.matchMedia("(max-width: 1100px)").matches;

    if (isMobileOrTablet && buttonLink.parentElement === imgContainer) {
      noPuppiesContainer.insertBefore(buttonLink, noPuppiesContainer.firstChild);
    } else if (!isMobileOrTablet && buttonLink.parentElement === noPuppiesContainer) {
      imgContainer.appendChild(buttonLink);
    }
  }

  window.addEventListener('DOMContentLoaded', moveButton);
  window.addEventListener('resize', moveButton);
})();