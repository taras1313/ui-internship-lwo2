/* global document, innerWidth, window */
const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');
const support = document.querySelector('.support h3');
const about = document.querySelector('.about_us h3');
const dropdownSupp = document.querySelector('.support ul');
const dropdownAbout = document.querySelector('.about_us ul');
const dNone = 'disp-none';
const width768 = 768;
const hideEl = (el) => {
  el.classList.add(dNone);
};

const showEl = (el) => {
  el.classList.remove(dNone);
};

video.pause();

playVideo.onclick = () => {
  if (video.paused) {
    hideEl(continueVideo);
    showEl(pauseVideo);
    video.play();
  } else {
    showEl(continueVideo);
    hideEl(pauseVideo);
    video.pause();
  }
};

if (innerWidth <= width768) {
  hideEl(dropdownAbout);
  hideEl(dropdownSupp);
}

window.onresize = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
    hideEl(dropdownSupp);
  } else {
    showEl(dropdownAbout);
    showEl(dropdownSupp);
  }
};

support.onclick = () => {
  dropdownSupp.classList.contains(dNone)
    ? showEl(dropdownSupp)
    : hideEl(dropdownSupp);
};


support.onmouseleave = () => {
  if (innerWidth <= width768) {
    hideEl(dropdownSupp);
  }
};
about.onclick = () => {
  dropdownAbout.classList.contains(dNone)
  ? showEl(dropdownAbout)
  : hideEl(dropdownAbout);
};

about.onmouseleave = (e) => {
  if (innerWidth <= width768) {
    hideEl(dropdownAbout);
  }
};

// form

const subscribeFrom = document.querySelector('form');
const formSubmit = subscribeFrom.querySelector('button');

subscribeFrom.addEventListener('keyup', function(e) {
  const currentElPattern = new RegExp(e.target.getAttribute('pattern'));
  const inputs = [...subscribeFrom.querySelectorAll('input')];
  if (currentElPattern.test(e.target.value)) {
    e.target.classList.add('border-success');
    e.target.classList.remove('border-error', 'show-tooltip');
    e.target.parentNode.classList.remove('show-tooltip');
  } else {
    if (e.key !== 'Tab') {
      e.target.classList.remove('border-success');
      e.target.classList.add('border-error', 'show-tooltip');
      e.target.parentNode.classList.add('show-tooltip');
    }
  }

  if (inputs.every((el) => el.classList.contains('border-success'))) {
    formSubmit.disabled = false;
    formSubmit.classList.remove('disabled');
  } else {
    formSubmit.disabled = true;
    formSubmit.classList.add('disabled');
  }
}, true);


