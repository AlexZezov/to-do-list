import {
  Content
} from './content';

export class List {
  constructor(container, data) {
    this.container = container;
    this.data = data;

    this._init();
  }

  _init() {
    this._render();
    this.container.addEventListener('click', this.handleClickList);
  }

  _clear() {
    this.container.innerHTML = '';
  }

  handleClickList(event) {
    const target = event.target;

    if (target.tagName == 'H5') {
      const id = target.getAttribute('data-id');

      fetch('/api/data', {
          method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => {
          data.list.forEach((item) => {
            if (id == item.id) {
              new Content(document.querySelector('#content'), item);
            }
          });
        })
        .catch((error) => console.error(error));
    }
  }

  _render() {
    this._clear();

    this.data.forEach((item) => {
      const template = `
        <h5 class="list-item p-3" data-id="${item.id}">${item.title}</h5>
      `;

      this.container.innerHTML = this.container.innerHTML + template;
    });
  }
}