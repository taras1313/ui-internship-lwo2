/* global document */
import LatestBlogItem from './latest-blog.js';
import BlogItem from './blog-item.js';

function objFilter(obj) {
  const latest = obj.latest;
  const blogs = obj.blogs;
  const latestBlogsArr = [];
  const footerBlogsArr = [];

  blogs.forEach((el) => {
    if (latest.includes(el.id)) {
      latestBlogsArr.push(el);
    } else {
      footerBlogsArr.push(el);
    }
  });
  return {
    latest: latestBlogsArr,
    footer: footerBlogsArr,
  };
}

function renderBlogItems(items, container, ItemView) {
  items.forEach((item) => container.appendChild(new ItemView(item).render()));
}

function render(res) {
  const latestContainer = document.querySelector('.blog-container');
  const footerBlogContainer = document.querySelector('.blogs');
  const latestItems = objFilter(res).latest;
  const footerItems = objFilter(res).footer;

  renderBlogItems(latestItems, latestContainer, LatestBlogItem);
  renderBlogItems(footerItems, footerBlogContainer, BlogItem);
}

export default render;
