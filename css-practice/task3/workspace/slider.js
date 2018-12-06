/* global document */
const sliders = [...document.querySelectorAll('.comment')];
const oneSlideWidth = 33.3;
let translateX = 0;
const foundClick = function(target, currentTarget, className) {
  while (target !== currentTarget) {
    if (target.classList.contains(className)) {
      return true;
    }
    target = target.parentNode;
  }
  return false;
};

const handleSliderClick = function(e) {
  const allComents = e.currentTarget.querySelector('.overflowed');
  const commentLength = allComents.querySelectorAll('.slide-items').length;
  /* eslint-disable-next-line  */
  const pressedNext = foundClick(e.target, e.currentTarget, 'next');
  /* eslint-disable-next-line  */
  const pressedPrev = foundClick(e.target, e.currentTarget, 'back');
  const lastElemOfSlider = translateX === -oneSlideWidth * (commentLength - 1);
  const firstElemOfSlider = translateX * commentLength === 0;

  if (pressedNext) {
    translateX = lastElemOfSlider ? 0 : translateX -= oneSlideWidth;
  } else if (pressedPrev) {
    /* eslint-disable-next-line  */
    translateX = firstElemOfSlider ? (commentLength - 1) * -oneSlideWidth : translateX += oneSlideWidth;
  }
  allComents.style.transform = `translateX(${translateX}%)`;
};

sliders.forEach((el) => {
  el.addEventListener('click', handleSliderClick);
});
