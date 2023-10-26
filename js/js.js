let currentVisibleIndex = 0; // Текущий индекс первого видимого элемента
const maxVisibleSlides = 4; // Максимальное количество элементов, которые могут быть видимыми

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
    for (let i = 4; i < sliderElements.length; i++) {
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
      for (let i = 3; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
        sliderLine.style.justifyContent = 'center';
      }
    }
  }
}

checkViewport();
window.addEventListener('resize', checkViewport);

function showNextSlide() {
  let sliderElements = document.querySelectorAll('.slider__element');

  // Скрыть текущий видимый слайд
  sliderElements[currentVisibleIndex].style.display = 'none';

  // Увеличить индекс видимого слайда с циклической логикой
  currentVisibleIndex = (currentVisibleIndex + 1) % sliderElements.length;

  // Показать следующий слайд
  sliderElements[currentVisibleIndex].style.display = 'block';
}

function showPreviousSlide() {
  let sliderElements = document.querySelectorAll('.slider__element');

  // Скрыть текущий видимый слайд
  sliderElements[currentVisibleIndex].style.display = 'none';

  // Уменьшить индекс видимого слайда с циклической логикой
  currentVisibleIndex =
    (currentVisibleIndex - 1 + sliderElements.length) % sliderElements.length;

  // Показать предыдущий слайд
  sliderElements[currentVisibleIndex].style.display = 'block';
}

checkViewport();
window.addEventListener('resize', checkViewport);

const leftArrow = document.querySelector('.slider__arrow-left');
const rightArrow = document.querySelector('.slider__arrow-right');

// Обработчик события для кнопки "slider__arrow-left"
leftArrow.addEventListener('click', showPreviousSlide);

// Обработчик события для кнопки "slider__arrow-right"
rightArrow.addEventListener('click', showNextSlide);
