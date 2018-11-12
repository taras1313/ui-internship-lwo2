const video = document.querySelector('video');
const playVideo = document.querySelector('.video-player');
const continueVideo = document.querySelector('.fa-play-circle');
const pauseVideo = document.querySelector('.fa-pause-circle');
const support = document.querySelector('.support h3');
const about = document.querySelector('.about_us h3');
const dropdownSupp = document.querySelector('.support ul');
const dropdownAbout = document.querySelector('.about_us ul');

video.pause();

playVideo.onclick = () => {
  if (video.paused) {
    continueVideo.classList.add('disp-none');
    pauseVideo.classList.remove('disp-none')
    video.play();
  } else {
    continueVideo.classList.remove('disp-none');
    pauseVideo.classList.add('disp-none')
    video.pause();
  }
}

if (innerWidth <= 768) {
  dropdownAbout.classList.add('disp-none');
  dropdownSupp.classList.add('disp-none');
}

window.onresize = () => {
  if (innerWidth <= 768) {
    dropdownAbout.classList.add('disp-none');
    dropdownSupp.classList.add('disp-none');
  } else {
    dropdownAbout.classList.remove('disp-none');
    dropdownSupp.classList.remove('disp-none');
  }
}

support.onclick = () => {
  dropdownSupp.classList.contains('disp-none') ? dropdownSupp.classList.remove('disp-none') : dropdownSupp.classList.add('disp-none');
}

support.onmouseleave = () => {
  if (innerWidth <= 768) {
    dropdownSupp.classList.add('disp-none');
  }
}
about.onclick = () => {
  dropdownAbout.classList.contains('disp-none') ? dropdownAbout.classList.remove('disp-none') : dropdownAbout.classList.add('disp-none');
}

about.onmouseleave = (e) => {
  if (innerWidth <= 768) {
    dropdownAbout.classList.add('disp-none');
  }
}