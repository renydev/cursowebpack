import { abc } from './my-file';
import jslogo from './js-logo.png';
const path = require('path');

const imgElement = document.querySelector('#my-img');

imgElement.setAttribute('src', `../dist/${jslogo}`);



console.log('mensagem do indec');

abc();