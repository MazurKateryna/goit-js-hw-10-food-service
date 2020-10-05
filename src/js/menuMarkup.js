import itemsTemplate from '../templates/menuMarkup.hbs'
import menuItems from './menu.json';

const markup = itemsTemplate(menuItems);

const galleryRef = document.querySelector('.menu');

galleryRef.insertAdjacentHTML('beforeend', markup)
