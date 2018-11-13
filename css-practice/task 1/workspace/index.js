(function() {
  const colorElement = document.querySelector('#color');
  const span = document.querySelector('#color-span');
  const hiddenColor = document.querySelector('#hiddenColor');
  const smallPic = document.querySelectorAll('.small-one>img');
  const holder = document.querySelector('.big-pic');
  const size = document.querySelector('#size');
  const spanSize = document.querySelector('#size-span');
  const hiddenSize = document.querySelector('#hiddenSize');
  const count = document.querySelector('#counter');
  const up = document.querySelector('#up');
  const down = document.querySelector('#down');
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('.burger-menu');
  const cancel = document.querySelector('.cancel');
  const slogan = document.querySelector('.slogan');
  const clear = document.querySelector('.small');
  const star = document.querySelectorAll('.fa-star');
  const review = document.querySelector('.review');
  const loginPageEl = document.querySelector('.modal');
  const closer = document.querySelector('.closer');
  
  colorElement.onclick = (e) => {
    hiddenColor.classList.contains('d-none') ? hiddenColor.classList.remove('d-none') : hiddenColor.classList.add('d-none');
    if (e.target !== colorElement && e.target.tagName !== 'I') {
      span.innerHTML = e.target.innerText;
    }
  };

  colorElement.onmouseleave = () => {
    hiddenColor.classList.add('d-none');
  }

  size.onclick = (e) => {
    hiddenSize.classList.contains('d-none') ? hiddenSize.classList.remove('d-none') : hiddenSize.classList.add('d-none');
    if (e.target !== size && e.target.tagName !== 'I') {
      spanSize.innerHTML = e.target.innerText;
    }
  };

  size.onmouseleave = () => {
    hiddenSize.classList.add('d-none');
  }

  up.onclick = () => {
    let curr = parseInt(count.innerText) + 1;
    count.innerText = curr;
  };
  
  down.onclick = () => {
    let curr = parseInt(count.innerText) - 1;
    if (curr > 0) {
      count.innerText = curr;
    }
  }

  burger.onclick = () => {
    if (innerWidth < 960) {
      menu.classList.contains('d-none') ? menu.classList.remove('d-none') : menu.classList.add('d-none');
    }
  };

  window.onresize = () => {
    if (innerWidth >= 960) {
      menu.classList.add('d-none');
    }
  }

  cancel.onclick = () => {
    slogan.classList.add('d-none');
  };

  clear.onclick = () => {
    span.innerText = 'Select Color';
    spanSize.innerText = 'Select Size';
    count.innerText = '1';
  }

  const openPopup = () => {
    loginPageEl.classList.remove('d-none')
  }

  star.forEach((e) => {
    e.onclick = () => {
      openPopup();
    }
  })

  review.onclick = () => {
    openPopup();
  }

  closer.onclick = () => {
    loginPageEl.classList.add('d-none')
  }

  loginPageEl.onclick = (e) => {
    const log = document.querySelector('.login-page')
    if (!log.contains(e.target)) {
      loginPageEl.classList.add('d-none')
    }
  }

  for (let i = 0; i < smallPic.length; i++) {
    smallPic[i].onclick = () => {
      const bigPic = document.querySelector('.big-pic>img');
      const copy = smallPic[i].cloneNode(true);
      holder.replaceChild(copy, bigPic);
    }
  }

})();
