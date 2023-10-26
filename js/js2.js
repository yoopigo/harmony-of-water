let currentVisibleIndex = 0;
const maxVisibleSlides = 4;
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
    sliderElements[indexToShow].style.display = 'block';
  }
  sliderLine.style.justifyContent = 'space-between';
}

checkViewport();
window.addEventListener('resize', checkViewport);

function showNextSlide() {
  currentVisibleIndex = (currentVisibleIndex + 1) % sliderElements.length;
  checkViewport();
}

function showPreviousSlide() {
  currentVisibleIndex =
    (currentVisibleIndex - 1 + sliderElements.length) % sliderElements.length;
  checkViewport();
}

const leftArrow = document.querySelector('.slider__arrow-left');
const rightArrow = document.querySelector('.slider__arrow-right');

// Обработчик события для кнопки "slider__arrow-left"
leftArrow.addEventListener('click', showPreviousSlide);

// Обработчик события для кнопки "slider__arrow-right"
rightArrow.addEventListener('click', showNextSlide);
