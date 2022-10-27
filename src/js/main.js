import accordeon from './modules/accordeon';
import calc from './modules/calc';
import checkTextLang from './modules/checkTextLang';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modal';
import portfolio from './modules/portfolio';
import showMoreStyles from './modules/showMoreStyles';
import showPicture from './modules/showPicture';
import slider from './modules/slider';

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
})
