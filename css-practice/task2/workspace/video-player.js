/* global document */
const videoPlayer = (() => {
  const video = document.querySelector('video');
  const videoHandler = document.querySelector('.video-player');
  const continueVideoButton = document.querySelector('.fa-play-circle');
  const pauseVideoButton = document.querySelector('.fa-pause-circle');
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

  const playStopHandler = () => {
    if (video.paused) {
      videoPlay();
    } else {
      videoPause();
    }
  };

  return {
    init: function() {
      videoHandler.addEventListener('click', playStopHandler);
    },
  };
})();

videoPlayer.init();
