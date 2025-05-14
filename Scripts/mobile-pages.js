function setFullHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Set on load
setFullHeight();
// And update on resize
window.addEventListener('resize', setFullHeight);