/* global document */
const video = document.querySelector('video');
const continueVideoButton = document.querySelector('.fa-play-circle');
const pauseVideoButton = document.querySelector('.fa-pause-circle');
// const videoHandler = document.querySelector('.video-player');
const hideElement = 'disp-none';

const hideEl = (el) => {
  el.classList.add(hideElement);
};

const showEl = (el) => {
  el.classList.remove(hideElement);
};

const videoPlay = () => {
  hideEl(continueVideoButton);
  showEl(pauseVideoButton);
  video.play();
};

const videoPause = () => {
  showEl(continueVideoButton);
  hideEl(pauseVideoButton);
  video.pause();
};

video.pause();

const test = {
  videoHandler: () => {
    if (video.paused) {
      videoPlay();
    } else {
      videoPause();
    }
  },
};

export default test;
