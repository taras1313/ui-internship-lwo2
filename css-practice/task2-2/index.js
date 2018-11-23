/* eslint-disable */
(function() {

  const menu = document.querySelector('.menu-btn');
  const hiddenMenu = document.querySelector('.burger-menu');
  menu.onclick = () => {
    hiddenMenu.classList.contains('d-none') ? hiddenMenu.classList.remove('d-none') : hiddenMenu.classList.add('d-none');
  };
  window.onclick = (e) => {
    if (e.target !== menu) {
      hiddenMenu.classList.add('d-none');
    }
  };


  // !!!!code above was cloned with layout from A Kostyk. Below is my code.

  // tabs

  const tabsHeading = document.querySelector('.info-text-items h2');
  const tabsP = document.querySelector('.info-text-items p');
  const tabs = document.querySelectorAll('.btn-info');
  const tabsContent = {
    0: {
      heading: 'Tabs with soft transitioning effect.',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    },

    1: {
      heading: 'Lol',
      paragraph: 'This article is about the internet slang initalism. For other uses, see LOL (disambiguation). Laugh out loud redirects here. For the CBC Radio One radio show, see Laugh Out Loud (radio). For the ABS-CBN television show, see Laugh Out Loud (TV series).'
    },

    2: {
      heading: 'Kek',
      paragraph: 'Kek literally translates to lol on World of Warcraft. When someone from the Horde side types lol in /say, members of the alliance side see kek instead. Not specific to Orcs.'
    }
  }

  let prevActive = tabs[0];

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => {
      tabsHeading.classList.toggle('opacity-0');
      tabsP.classList.toggle('opacity-0');
      prevActive.classList.remove('current');
      tabs[i].classList.add('current');
      prevActive = tabs[i]

      setTimeout(() => {
        tabsHeading.innerText = tabsContent[i].heading;
        tabsP.innerText = tabsContent[i].paragraph;
        tabsHeading.classList.toggle('opacity-0');
        tabsP.classList.toggle('opacity-0');
      }, 200)
    }
  }



  const REGEXP = {
    user_name: {
      reg: /^[a-zA-Z ]{2,45}$/,
    },
    user_mail: {
      reg: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    user_password: {
      reg: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+-]).{6,20}/,
    },
    subject: {
      reg: /^[a-zA-Z ]{2,25}$/
    },
    message: {
      reg: /.{1,250}$/ 
      // /^[a-zA-Z ]{1,250}$/,
    }
  }

  const forms = Array.from(document.forms);
  const submitHandler = function(e) {

    const allInputs = Array.from(this.querySelectorAll('input'));
    const inputs = this.querySelectorAll('[valid]')
    const invalid = [...inputs].filter(el => !Boolean(el.getAttribute('valid')));
    console.log(invalid);
    if (allInputs.some(el => el.value == '') || invalid.length !== 0) {
      e.preventDefault();
      allInputs.forEach((el) => {
        if (el.value == '') {
          el.parentNode.querySelector('.tooltip').classList.add('d-block');
          el.nextElementSibling.nextElementSibling.style.fontSize = '18px';
          el.nextElementSibling.style.fontSize = '0';
        }

      })
    }
  }

  const blurHandler = function(e) {
    e.target.onblur = function() {
      const currentElem = e.target.getAttribute('name');
      if (!this.value.match(REGEXP[currentElem].reg)) {
        this.nextElementSibling.nextElementSibling.style.fontSize = '18px';
        this.nextElementSibling.style.fontSize = '0';
        this.setAttribute('valid', '');
        this.parentNode.querySelector('.tooltip').classList.add('d-block');
      }
      else {
        this.nextElementSibling.style.fontSize = '18px';
        this.nextElementSibling.nextElementSibling.style.fontSize = '0';
        this.setAttribute('valid', true)
        this.parentNode.querySelector('.tooltip').classList.remove('d-block');

      }
    }
  }

  forms.forEach((el) => {
    el.onsubmit = submitHandler;
    el.addEventListener('blur', blurHandler, true)
  })

})()
