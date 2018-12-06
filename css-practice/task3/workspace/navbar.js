/* global document window */

let nav = document.querySelector('nav');
const header = document.querySelector('header');
const classFixed = 'nav-fixed';
const paddingTopToHeader = 'padding-top-88';
let isFixed = false;


window.addEventListener('scroll', function(e) {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 0 && !isFixed) {
    isFixed = true;
    nav.classList.add(classFixed);
    header.classList.add(paddingTopToHeader);
    return;
  } else if (scrollTop === 0) {
    isFixed = false;
    nav.classList.remove(classFixed);
    header.classList.remove(paddingTopToHeader);
  }
});
