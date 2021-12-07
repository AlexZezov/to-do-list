import {
  Form
} from './form';
import {
  List
} from './list';

const formNode = document.querySelector('#form');
new Form(formNode);

// ---------------------------------------------------

const listNode = document.querySelector('#list');

fetch('/api/data', {
    method: 'GET'
  })
  .then((response) => response.json())
  .then((data) => new List(listNode, data.list))
  .catch((error) => console.error(error));

// function validateInput() {
//   const input = document.querySelector('title');
//     if(input.checkValidity()) {
//       document.getElementById("demo").innerHTML = input.validationMessage;
//     }
// }

// validateInput();

const input = document.querySelector('#title');
console.log(input);