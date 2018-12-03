/* global document */

/* this object is here to close a tab,
that was opened before without using a loop; */

const prevEvent = {
  el: document.querySelector('.descr'),
};

/* eslint-disable-next-line */
/* eslint-disable-next-line */
const imgInAccordion = document.querySelector('.work-description > .img-holder img');

const accordeonContainer = document.querySelector('.workflow-info');
const contentToggler = function(currTabContent, currentTab) {
  if (prevEvent.el !== currTabContent) {
    prevEvent.el.classList.remove('show-block');
    /* eslint-disable-next-line  */
    prevEvent.el.parentElement.querySelector('i').classList.remove('rotate-180');
    prevEvent.el = currTabContent;
    imgInAccordion.setAttribute('src', currentTab.getAttribute('data-img'));
  }

  currTabContent.classList.toggle('show-block');
  currentTab.querySelector('i').classList.toggle('rotate-180');
};

accordeonContainer.addEventListener('click', function(e) {
  /* i need to check 'el.classList' to avoid errors,
   becouse if we click on paragraph we will bubble to body,
   that hasn't a classList */

  /* eslint-disable-next-line  */
  const currentTab = e.path.find((el) => el.classList && el.classList.contains('activity'));
  if (!currentTab) return;
  const content = currentTab.nextElementSibling;
  contentToggler(content, currentTab);
});
