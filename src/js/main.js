import accordeon from './modules/accordeon';
import burger from './modules/burger';
import calc from './modules/calc';
import checkTextLang from './modules/checkTextLang';
import drop from './modules/drop';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modal';
import portfolio from './modules/portfolio';
import showMoreStyles from './modules/showMoreStyles';
import showPicture from './modules/showPicture';
import slider from './modules/slider';
import up from './modules/up';

window.addEventListener('DOMContentLoaded', () => {

  let orderPrice = {};

  calc(orderPrice, '#size', '#material', '#options', '.promocode', '.calc-price');

  modals();
  slider('.main-slider-item', 'vertical');
  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  forms(orderPrice);
  mask('[name="phone"]');
  checkTextLang('[name="name"]');
  checkTextLang('[name="message"]');
  showMoreStyles('.button-styles', '.styles .row');
  portfolio('.portfolio-menu', '.portfolio-block', '.portfolio-no');
  showPicture('.sizes-block');
  accordeon('#accordion', '.accordion-heading', 'accordion-heading-active', '.accordion-block');
  burger('.burger', '.burger-menu');
  up('.pageup');
  drop();
})
