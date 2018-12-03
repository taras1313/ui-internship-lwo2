/* global document */
import test from './videoplayer.js';
import validate from './form-validation.js';

const videoHandler = document.querySelector('.video-player');
const subscribeFrom = document.querySelector('form');

videoHandler.addEventListener('click', test.videoHandler);
subscribeFrom.addEventListener('keyup', validate, true);
