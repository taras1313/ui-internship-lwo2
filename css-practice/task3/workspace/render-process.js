/* global document */
import LatestItem from './latest-blog.js';
import FooterItem from './footer-blog.js';

const latestContainer = document.querySelector('.blog-container');
const footerBlogContainer = document.querySelector('.blogs');

function objFilter(obj) {
  const latest = obj.latest;
  const blogs = obj.blogs;
  return {
    latest: blogs.filter((el) => latest.includes(el.id)),
    footer: blogs.filter((el) => !latest.includes(el.id)),
  };
}

function render(res) {
  const latestItems = objFilter(res).latest;
  const footerItems = objFilter(res).footer;
  latestItems.forEach((el) => {
    latestContainer.appendChild(new LatestItem(el).render());
  });

  footerItems.forEach((el) => {
    footerBlogContainer.appendChild(new FooterItem(el).render());
  });
}

export default render;
