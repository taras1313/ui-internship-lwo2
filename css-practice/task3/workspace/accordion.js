/* global document */
let prevEvent = document.querySelector('.descr');
/* eslint-disable-next-line */
const imgInAccordion = document.querySelector('.work-description > .img-holder img');
const showBlock = 'show-block';
const rotateIcon = 'rotate-180';
const contentToggler = function(clickedTabContent, clickedTab) {
  if (prevEvent !== clickedTabContent) {
    prevEvent.classList.remove(showBlock);
    /* eslint-disable-next-line  */
    prevEvent.parentElement.querySelector('i').classList.remove(rotateIcon);
    prevEvent = clickedTabContent;
    imgInAccordion.setAttribute('src', clickedTab.getAttribute('data-img'));
  }

  clickedTabContent.classList.toggle(showBlock);
  clickedTab.querySelector('i').classList.toggle(rotateIcon);
};

const allTabs = [...document.querySelectorAll('.activity')];
allTabs.forEach((el) => {
  el.addEventListener('click', function(e) {
    const clickedTab = e.currentTarget;
    const content = clickedTab.nextElementSibling;
    contentToggler(content, clickedTab);
  });
});

