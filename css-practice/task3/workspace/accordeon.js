/* global document */

/* this object is here to close a tab,
that was opened before without using a loop; */

const prevEvent = {
  el: document.querySelector('.descr'),
};

const accordeonContainer = document.querySelector('.workflow-info');
const contentToggler = function(currTabContent, currentTab) {

  if (prevEvent.el !== currTabContent) {
    prevEvent.el.classList.remove('show-block');
    prevEvent.el.parentElement.querySelector('i').classList.remove('rotate-180');
    prevEvent.el = currTabContent;
  }

  currTabContent.classList.toggle('show-block');
  currentTab.querySelector('i').classList.toggle('rotate-180');
};

accordeonContainer.addEventListener('click', function(e) {

  /* i need to check 'el.classList' to avoid errors,
   becouse if we click on paragraph we will bubble to body, that hasn't a classList */

  const currentTab = e.path.find((el) => el.classList && el.classList.contains('activity'));
  if (!currentTab) return;
  const content = currentTab.nextElementSibling;
  contentToggler(content, currentTab);
});
