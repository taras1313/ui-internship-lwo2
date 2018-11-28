const prevEvent = {
  prev: null,
};

const accordrionContainer = document.querySelector('.workflow-info');

accordrionContainer.addEventListener('click', function(e) {
  const currentPosition = e.target;
  currentPosition.onclick = function(e) {
    if (this.nextElementSibling.classList.contains('descr')) {
      // this.nextElementSibling.classList.toggle('show-block');
      
      if(!this.nextElementSibling.classList.contains('show-block')) {
        this.nextElementSibling.classList.add('show-block');

        if(prevEvent.prev) {
          prevEvent.prev.classList.remove('show-block');
        }

        prevEvent.prev = this.nextElementSibling;
      } else {
        this.nextElementSibling.classList.remove('show-block');
        prevEvent.prev = null;
      }
  }
} 
}, true);


// accordrionContainer.addEventListener('click', function(e) {
//   const test = e.path.forEach((el) => {
//     if(el.classList.contains('activity')) {
//       el.innerText = 'govno';
//     }
//   })
//   console.log(test);
// }, true)



// accord.onclick = (e) => {
  // const curr = e.target;
  // const currP = curr.querySelector('p');

  // if (currP.classList.contains('d-none')) {
  //   currP.classList.remove('d-none');
  //   curr.style.height = '100px';

  //   if (prevEvent.prev) {
  //     prevEvent.prev.style.height = '30px';
  //     prevEvent.prev.querySelector('p').classList.add('d-none');
  //   }
  //   prevEvent.prev = curr;
  // } else {
  //   currP.classList.add('d-none');
  //   curr.style.height = '30px';
  //   prevEvent.prev = null;
  // }
// };

