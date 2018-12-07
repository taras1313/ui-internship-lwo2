/* global document */

class LatestBlogItem {
  constructor(model) {
    this.el = null;
    this.model = model;
  }

  parseDate(dateString) {
    /* eslint-disable-next-line*/
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: new Date(dateString).getDate() - 1,
      month: month[new Date(dateString).getMonth() + 1],
    };
  }

  render() {
    const {
      previewImg,
      published,
      title,
      description,
      watched,
    } = this.model;
    /* eslint-disable-next-line*/
    const { day, month } = this.parseDate(published);

    this.el = document.createElement('div');
    this.el.classList.add('blog-item');
    this.el.innerHTML = `
          <div class="blog-img" style="background-image: url(${previewImg})">
            <div class="date">
              <span class="date-num">${day}</span>
              <span class="month"><i>${month}</i></span>
            </div>
          </div>
          <h4 class="f-size-14 uppercase">${title}</h4>
          <p>${description}</p>
          <div class="hr"></div>
          <p class="icons"><i>
              <img src="./img/blog/view.png" alt="eye">
              ${watched}
              <img src="./img/blog/dialig-icon.png" alt="dialog" class="view">
              17
            </i></p>
    `;
    return this.el;
  }
}

export default LatestBlogItem;


