// header

let menuToggle = document.querySelector('.menuToggle');
let header     = document.querySelector('header');

menuToggle.onclick = function(event) {
  const wasActive = header.classList.contains('active');
  header.classList.toggle('active');
  event.stopPropagation();
  if (wasActive) {
    resetAllDropdowns();
  }
};

// clicking outside also closes + resets
document.onclick = function(event) {
  if (header.classList.contains('active')
      && !header.contains(event.target)
      && !menuToggle.contains(event.target)
  ) {
    header.classList.remove('active');
    resetAllDropdowns();
  }
};

// utility to clear *all* submenus
function resetAllDropdowns() {
  document.querySelectorAll('nav ul li a.open').forEach(link => {
    link.classList.remove('open');
    const sub = link.nextElementSibling;
    if (sub && sub.tagName === 'UL') {
      sub.style.display   = '';
      sub.style.maxHeight = '';
      sub.style.opacity   = '';
    }
  });
}

// mobile‐only double‑tap + animated height logic
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll("nav ul li > a + ul");
  items.forEach(submenu => {
    const link = submenu.previousElementSibling;
    link.addEventListener("click", function(e) {
      if (window.innerWidth <= 1100) {
        e.preventDefault();
        const isOpen = link.classList.contains("open");
        resetAllDropdowns();
        if (!isOpen) {
          // prep for animation
          submenu.style.display   = "block";
          submenu.style.maxHeight = "0";
          submenu.style.opacity   = "0";
          // force reflow
          submenu.offsetHeight;
          // animate open
          link.classList.add("open");
          submenu.style.maxHeight = submenu.scrollHeight + "px";
          submenu.style.opacity   = "1";
        }
      }
    });
  });
});

menuToggle.onclick = function (event) {
  header.classList.toggle('active');
  const expanded = header.classList.contains('active');
  this.setAttribute('aria-expanded', expanded);
  event.stopPropagation();
};
        
          
// footer

var footer = 0;
$('.footerPrev').click(function(){
    footer -= 1; 
  if(footer < 0)
    footer = $('.footer-div').length-1;
    
  animate(footer);
});
$('.footerNext').click(function(){
    footer += 1;
    if(footer >= $('.footer-div').length)
        footer = 0;

  animate(footer);
});

function animate(fade){
    $('.rail').animate({ left: fade*-100+'%' }, 1000);
}


// reviews

var slideIndex = 0;
showSlides();
var slides;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
        slides[slideIndex-1].style.display = "block";  
    }

function currentSlide(index) {
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
        slides[index-1].style.display = "block";  
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("myReview");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 10000);
}