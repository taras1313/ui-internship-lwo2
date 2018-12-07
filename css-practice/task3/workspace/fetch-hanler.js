import render from './render-process.js';
function fetchData() {
  /* eslint-disable-next-line*/
  fetch('http://localhost:3000/api/blogs')
      .then((res) => res.json())
      .then(render);
}

fetchData();
