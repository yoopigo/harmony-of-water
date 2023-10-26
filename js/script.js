let currentVisibleIndex = 0;
let maxVisibleSlides = window.innerWidth <= 375 ? 1 : 4;
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
    sliderElements[0].style.flex = '0 0 100%'; // Set the flex property to '0 0 100%'
  } else {
    sliderLine.style.justifyContent = 'space-between';
    sliderLine.style.flex = ''; // Reset the flex property
  }
}
checkViewport();
window.addEventListener('resize', function () {
  maxVisibleSlides = window.innerWidth <= 375 ? 1 : 4;
  checkViewport();
});

function showNextSlide() {
  // Скрываем текущий видимый элемент
  sliderElements[currentVisibleIndex].style.display = 'none';

  // Вычисляем индекс следующего элемента
  currentVisibleIndex = (currentVisibleIndex + 1) % sliderElements.length;

  // Проверяем разрешение экрана
  if (window.innerWidth <= 375) {
    // Устанавливаем свойство flex для нового текущего элемента
    sliderElements[currentVisibleIndex].style.flex = '0 0 100%';
    sliderElements[currentVisibleIndex].style.justifyContent = 'center';
  }

  // Отображаем новый текущий элемент
  sliderElements[currentVisibleIndex].style.display = 'flex';

  // Пересчитываем отображение остальных элементов
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
