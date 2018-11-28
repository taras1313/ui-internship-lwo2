/* global document */
const prevEvent = {
  prev: null,
};
const accordrionContainer = document.querySelector('.workflow-info');

accordrionContainer.addEventListener('click', function(e) {
  e.target.onclick = function() {
    const content = this.nextElementSibling;
    if (content.classList.contains('descr')) {
      if (!content.classList.contains('show-block')) {
        content.classList.add('show-block');
        if (prevEvent.prev) {
          prevEvent.prev.classList.remove('show-block');
        }
        prevEvent.prev = content;
      } else {
        content.classList.remove('show-block');
        prevEvent.prev = null;
      }
    }
  };
}, true);
