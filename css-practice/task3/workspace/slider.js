/* global document, console */
const sliders = [...document.querySelectorAll('.comment')];

let translateX = 0;
const handleSliderClick = function(e) {
  
  const allComents = e.currentTarget.querySelector('.overflowed');
  const commentLength = allComents.querySelectorAll('.slide-items').length;
  const pressedNext = e.path.indexOf(e.currentTarget.querySelector('.next')) !== -1;
  const pressedPrev = e.path.indexOf(e.currentTarget.querySelector('.back')) !== -1;
  const lastElemOfSlider = translateX === -33.33333 * (commentLength - 1);
  const firstElemOfSlider = translateX * commentLength === 0;
  
  if (pressedNext) {
    lastElemOfSlider ? translateX = 0 : translateX -= 33.33333;
  } else if (pressedPrev) {
    firstElemOfSlider ? translateX = (commentLength - 1) * -33.33333 : translateX += 33.33333;
  }
    allComents.style.transform = `translateX(${translateX}%)`;
};

sliders.forEach((el) => {
  el.addEventListener('click', handleSliderClick);
});
