function checkViewport() {
  let viewportWidth = window.innerWidth;
  let sliderElements = document.querySelectorAll('.slider__element');
  let sliderLine = document.querySelector('.slider__elements');

  if (viewportWidth <= 850) {
    if (sliderElements.length > 3) {
      for (let i = 3; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
        sliderLine.style.justifyContent = 'center';
      }
    }
  } else {
    for (let i = 0; i < sliderElements.length; i++) {
      sliderElements[i].style.display = 'block';
    }
  }

  if (viewportWidth <= 375) {
    if (sliderElements.length > 2) {
      for (let i = 1; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
      }
      sliderLine.style.justifyContent = 'center';
    } else {
      sliderLine.style.justifyContent = 'flex-start';
    }
  }
}

checkViewport();
window.addEventListener('resize', checkViewport);
