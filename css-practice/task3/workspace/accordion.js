/* global document */
let prevClickedTab = document.querySelector('.descr');
/* eslint-disable-next-line */
const imgInAccordion = document.querySelector('.work-description > .img-holder img');
const showBlock = 'show-block';
const rotateIcon = 'rotate-180';

const contentToggler = function(clickedTabContent, clickedTab) {
  if (prevClickedTab !== clickedTabContent) {
    closePrevTab(clickedTabContent);
    imgInAccordion.setAttribute('src', clickedTab.getAttribute('data-img'));
  }
  toggleTab(clickedTabContent, clickedTab);
};

function closePrevTab(clicked) {
  prevClickedTab.classList.remove(showBlock);
  prevClickedTab.parentElement.querySelector('i').classList.remove(rotateIcon);
  prevClickedTab = clicked;
}

function toggleTab(clickedTabContent, clickedTab) {
  clickedTabContent.classList.toggle(showBlock);
  clickedTab.querySelector('i').classList.toggle(rotateIcon);
}

const allTabs = [...document.querySelectorAll('.activity')];
allTabs.forEach((el) => {
  el.addEventListener('click', function(e) {
    const clickedTab = e.currentTarget;
    const content = clickedTab.nextElementSibling;
    contentToggler(content, clickedTab);
  });
});

