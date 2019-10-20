import { abc } from './my-file';
import jslogo from './js-logo.png';
import $ from 'jquery';

const imgElement = document.querySelector('#my-img');

imgElement.setAttribute('src', `../dist/${jslogo}`);

$(imgElement).on('click', function() {
  $(this).hide();
})

console.log('mensagem do indec');

abc();