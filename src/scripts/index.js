/* eslint-disable no-unused-vars */
import * as boostrap from 'bootstrap';
import '../styles/main.scss';
import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
