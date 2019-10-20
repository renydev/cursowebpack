import { abc } from './my-file';
import jslogo from './js-logo.png';
import css from './style.css';

console.log(css);

const imgElement = document.querySelector('#my-img');

imgElement.setAttribute('src', `../dist/${jslogo}`);
imgElement.classList.add(css['img-border']);

console.log('mensagem do indec');

abc();