/* global document innerWidth window */
// const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');
// const support = document.querySelector('.support h3');
// const about = document.querySelector('.about_us h3');
// const dropdownSupp = document.querySelector('.support ul');
// const dropdownAbout = document.querySelector('.about_us ul');
// const checkWindowWidth = 768;
// const hideElement = 'disp-none';
// const hideEl = (el) => {
//   el.classList.add(hideElement);
// };

// const showEl = (el) => {
//   el.classList.remove(hideElement);
// };

// video.pause();

// playVideo.onclick = () => {
//   if (video.paused) {
//     hideEl(continueVideo);
//     showEl(pauseVideo);
//     video.play();
//   } else {
//     showEl(continueVideo);
//     hideEl(pauseVideo);
//     video.pause();
//   }
// };

// if (innerWidth <= checkWindowWidth) {
//   hideEl(dropdownAbout);
//   hideEl(dropdownSupp);
// }

// window.onresize = () => {
//   if (innerWidth <= checkWindowWidth) {
//     hideEl(dropdownAbout);
//     hideEl(dropdownSupp);
//   } else {
//     showEl(dropdownAbout);
//     showEl(dropdownSupp);
//   }
// };

// support.onclick = () => {
//   dropdownSupp.classList.contains(hideElement)
//     ? showEl(dropdownSupp)
//     : hideEl(dropdownSupp);
// };


// support.onmouseleave = () => {
//   if (innerWidth <= checkWindowWidth) {
//     hideEl(dropdownSupp);
//   }
// };
// about.onclick = () => {
//   dropdownAbout.classList.contains(hideElement)
//   ? showEl(dropdownAbout)
//   : hideEl(dropdownAbout);
// };

// about.onmouseleave = (e) => {
//   if (innerWidth <= checkWindowWidth) {
//     hideEl(dropdownAbout);
//   }
// };

// form

const subscribeFrom = document.querySelector('form');
const formSubmit = subscribeFrom.querySelector('button');
const inputValidClass = 'border-success';
const inputInvalidClass = 'border-error';
const toolTipClass = 'show-tooltip';
const buttonDisableClass = 'disabled';

subscribeFrom.addEventListener('keyup', function(e) {
  const clickedInput = e.target;
  const currentElPattern = new RegExp(clickedInput.getAttribute('pattern'));
  const inputs = [...subscribeFrom.querySelectorAll('input')];
  const allInputsValid = inputs.every((el) => el.classList.contains(inputValidClass));

  if (currentElPattern.test(clickedInput.value)) {
    clickedInput.classList.add(inputValidClass);
    clickedInput.classList.remove(inputInvalidClass, toolTipClass);
    clickedInput.parentNode.classList.remove(toolTipClass);
  } else {
    if (e.key !== 'Tab' && clickedInput.value.length >= 4) {
      clickedInput.classList.remove(inputValidClass);
      clickedInput.classList.add(inputInvalidClass, toolTipClass);
      clickedInput.parentNode.classList.add(toolTipClass);
    }
  }

  if (allInputsValid) {
    formSubmit.disabled = false;
    formSubmit.classList.remove(buttonDisableClass);
  } else {
    formSubmit.disabled = true;
    formSubmit.classList.add(buttonDisableClass);
  }
}, true);


