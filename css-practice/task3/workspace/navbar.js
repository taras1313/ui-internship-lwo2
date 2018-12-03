let nav = document.querySelector('nav');
const header = document.querySelector('header');

window.addEventListener('scroll', function (e) {
  if (document.documentElement.scrollTop > 0) {
    nav.classList.add('nav-fixed');
    header.classList.add('padding-top-88');
    return;
  }

  nav.classList.remove('nav-fixed');
  header.classList.remove('padding-top-88');

})