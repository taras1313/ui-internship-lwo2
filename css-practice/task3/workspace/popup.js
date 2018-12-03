/* global document window*/

const imgContainer = document.querySelector('.gallery');
const parentWithCurrentImg = (node) => {
  while (node.parentElement) {
    if (node.classList.contains('layered')) {
      return node;
    }
    node = node.parentElement;
  }
};

const overlayHandler = function(e) {
  const rightParent = parentWithCurrentImg(e.target);
  /* eslint-disable-next-line  */
  const clickedImgSrc = rightParent.querySelector('.layered>img').getAttribute('src');
  const galleryImgsSrcs = [...document.querySelectorAll('.layered > img')]
      .map((el) => el.getAttribute('src'));

  const overlay = document.createElement('div');
  overlay.classList.add('overlay', 'd-block');
  overlay.innerHTML = `
    <i class="fas fa-chevron-circle-left prev"></i>
    <div class="cont">
      <img class="overay-img" src="${clickedImgSrc}"/>
    </div>
    <i class="fas fa-chevron-circle-right next"></i>`;

  document.body.appendChild(overlay);

  const clickedImgIndex = galleryImgsSrcs.indexOf(clickedImgSrc);
  const prev = overlay.querySelector('.prev');
  const next = overlay.querySelector('.next');
  const overayImg = overlay.querySelector('.overay-img');
  let counter = clickedImgIndex;


  prev.onclick = function() {
    const firstImgInArr = counter === 0;
    if (firstImgInArr) {
      counter = galleryImgsSrcs.length - 1;
      overayImg.setAttribute('src', galleryImgsSrcs[counter]);
    } else {
      overayImg.setAttribute('src', galleryImgsSrcs[--counter]);
    }
  };

  next.onclick = function() {
    const lastImgInArr = counter === galleryImgsSrcs.length - 1;
    if (lastImgInArr) {
      counter = 0;
      overayImg.setAttribute('src', galleryImgsSrcs[counter]);
    } else {
      overayImg.setAttribute('src', galleryImgsSrcs[++counter]);
    }
  };
};

window.onclick = function(e) {
  if (e.target.classList.contains('overlay')) {
    document.body.removeChild(e.target);
  }
};

imgContainer.addEventListener('click', overlayHandler);
