import {
  List
} from './list';

export class Form {
  constructor(form) {
    this.form = form;
    this.btnSubmit = document.querySelector('[type="submit"]');
    this.listContainer = document.querySelector('#list');

    this.handleSubmit = this._submit.bind(this);

    this._init();
  }

  _init() {
    this.btnSubmit.addEventListener('click', this.handleSubmit);
  }

  _send(data) {
    const url = '/api/data';

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => new List(this.listContainer, data.list))
      .catch((error) => console.error(error));


  }

  _submit(event) {
    event.preventDefault();

    const currentDate = new Date();
    const formData = new FormData(this.form);

    formData.append('id', currentDate.getTime());
    const data = {};

    for (const [name, value] of formData) {
      data[name] = value;
    }

    this._send(data);

    this.form.reset();
    $('#formModal').modal('hide');
  }
}