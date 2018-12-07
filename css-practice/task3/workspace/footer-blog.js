/* global document */
class FooterBlogItem {
  constructor(model) {
    this.el = null;
    this.model = model;
  }
  parseDate(dateString) {
    /* eslint-disable-next-line*/
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      day: new Date(dateString).getDay(),
      month: month[new Date(dateString).getMonth() + 1],
      year: new Date(dateString).getFullYear(),
    };
  }
  render() {
    const {
      previewImg,
      published,
      title,
    } = this.model;

    const {
      day,
      month,
      year,
    } = this.parseDate(published);

    this.el = document.createElement('div');
    this.el.classList.add('bl-item');
    this.el.innerHTML = `
          <img src="${previewImg}" class="width-33-percent" alt="lamp">
          <div class="bl-content">
            <h4 class="uppercase">${title}</h4>
            <p><i>${month} ${day}, ${year}</i></p>
          </div>
        `;
    return this.el;
  }
}

export default FooterBlogItem;
