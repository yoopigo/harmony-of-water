let currentVisibleIndex = 0;
let maxVisibleSlides = window.innerWidth <= 1024 ? 1 : 4;
let sliderElements = document.querySelectorAll('.slider__element');
let sliderLine = document.querySelector('.slider__elements');

function checkViewport() {
  for (let i = 0; i < sliderElements.length; i++) {
    sliderElements[i].style.display = 'none';
  }

  for (
    let i = currentVisibleIndex;
    i < currentVisibleIndex + maxVisibleSlides;
    i++
  ) {
    const indexToShow = i % sliderElements.length;
    sliderElements[indexToShow].style.display = 'flex';
  }

  if (maxVisibleSlides === 1) {
    sliderElements[0].style.justifyContent = 'center';
    sliderElements[0].style.flex = '0 0 100%';
  } else {
    sliderLine.style.justifyContent = 'space-between';
    sliderLine.style.flex = '';
  }
}
checkViewport();
window.addEventListener('resize', function () {
  maxVisibleSlides = window.innerWidth <= 1024 ? 1 : 4;
  checkViewport();
});

function showNextSlide() {
  sliderElements[currentVisibleIndex].style.display = 'none';

  currentVisibleIndex = (currentVisibleIndex + 1) % sliderElements.length;

  if (window.innerWidth <= 1024) {
    sliderElements[currentVisibleIndex].style.flex = '0 0 100%';
    sliderElements[currentVisibleIndex].style.justifyContent = 'center';
  }

  sliderElements[currentVisibleIndex].style.display = 'flex';

  checkViewport();
}

function showPreviousSlide() {
  currentVisibleIndex =
    (currentVisibleIndex - 1 + sliderElements.length) % sliderElements.length;
  checkViewport();
}

const leftArrow = document.querySelector('.slider__arrow-left');
const rightArrow = document.querySelector('.slider__arrow-right');

leftArrow.addEventListener('click', showPreviousSlide);
rightArrow.addEventListener('click', showNextSlide);
