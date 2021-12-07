class Content {
  constructor(container, data) {
    this.container = container;
    this.data = data;

    this._init();
  }

  _init() {
    this._render();
  }

  _clear() {
    this.container.innerHTML = '';
  }

  _render() {
    this._clear();

    const template = `
      <h3>${this.data.title}</h3>
      <div>${this.data.content}</div>
    `;

    this.container.innerHTML = this.container.innerHTML + template;
  }
}

export {
  Content
};