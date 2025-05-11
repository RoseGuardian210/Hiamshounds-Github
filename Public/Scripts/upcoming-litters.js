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