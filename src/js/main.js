import calc from './modules/calc';
import checkTextLang from './modules/checkTextLang';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modal';
import showMoreStyles from './modules/showMoreStyles';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  
  modals();
  slider('.main-slider-item', 'vertical');
  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  forms();
  mask('[name="phone"]');
  checkTextLang('[name="name"]');
  checkTextLang('[name="message"]');
  showMoreStyles('.button-styles', '.styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
})
