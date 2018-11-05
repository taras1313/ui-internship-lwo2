(function () {
  const color = document.querySelector('#color');
  const span = document.querySelector('#color-span');
  const hiddenColor = document.querySelector('#hiddenColor');

  color.onclick = (e) => {
    hiddenColor.classList.contains('d-none') ? hiddenColor.classList.remove('d-none') : hiddenColor.classList.add('d-none');
    if (e.target !== color && e.target.tagName !== 'I') {
      span.innerHTML = e.target.innerText;
    }
  };

  color.onmouseleave = () => {
    hiddenColor.classList.add('d-none');
  }

  const size = document.querySelector('#size');
  const spanSize = document.querySelector('#size-span');
  const hiddenSize = document.querySelector('#hiddenSize');

  size.onclick = (e) => {
    hiddenSize.classList.contains('d-none') ? hiddenSize.classList.remove('d-none') : hiddenSize.classList.add('d-none');
    if (e.target !== size && e.target.tagName !== 'I') {
      spanSize.innerHTML = e.target.innerText;
    }

  };

  size.onmouseleave = () => {
    hiddenSize.classList.add('d-none');
  }

  const count = document.querySelector('#counter');
  const up = document.querySelector('#up');
  const down = document.querySelector('#down');

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

  const burger = document.querySelector('#burger');
  const menu = document.querySelector('.burger-menu');

  burger.onclick = () => {
    if (innerWidth < 960) {
      menu.classList.contains('d-none') ? menu.classList.remove('d-none') : menu.classList.add('d-none');
    }
  };

  const cancel = document.querySelector('.cancel');
  const slogan = document.querySelector('.slogan');

  cancel.onclick = () => {
    slogan.classList.add('d-none');
  };

  const clear = document.querySelector('.small');

  clear.onclick = () => {
    span.innerText = 'Select Color';
    spanSize.innerText = 'Select Size';
    count.innerText = '1';
  }

  const star = document.querySelectorAll('.fa-star');
  const review = document.querySelector('.review');
  const modal = document.querySelector('.modal');

  const popup = () => {
    modal.classList.remove('d-none')
  }

  star.forEach((e) => {
    e.onclick = () => {
      popup();
    }
  })

  review.onclick = () => {
    popup();
  }

  const closer = document.querySelector('.closer');
  closer.onclick = () => {
    modal.classList.add('d-none')
  }

  modal.onclick = (e) => {
    const log = document.querySelector('.login-page')
    if (!log.contains(e.target)) {
      modal.classList.add('d-none')
      console.log(log.contains(e.target))
    }
  }

  const smallPic = document.querySelectorAll('.small-one>img');
  const holder = document.querySelector('.big-pic')

  for (let i = 0; i < smallPic.length; i++) {
    smallPic[i].onclick = () => {
      const bigPic = document.querySelector('.big-pic>img');
      const copy = smallPic[i].cloneNode(true);
      holder.replaceChild(copy, bigPic);
    }
  }

})();
