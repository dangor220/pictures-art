import { getData } from '../services/requests';

const showMoreStyles = (trigger, styles) => {
	const btn = document.querySelector(trigger),
		styleWrap = document.querySelector(styles);

	btn.addEventListener('click', () => {
		getData('assets/d3.json')
			.then((data) => {
				createStyles(data.styles);
        btn.remove();
			})
			.catch((error) => {
        if (document.querySelector('.error-popup')) {
          document.querySelector('.error-popup').remove();
        }
        let errorPopup = document.createElement('div');
        errorPopup.classList.add('error-popup', 'animated', 'fadeInUp');
        errorPopup.textContent = 'Не удалось получить данные. Попробуйте позже!';
        btn.style.position ='relative';
        errorPopup.style.cssText = `
          font-size: 2rem;
          position: absolute;
          top: -40px;
          left: 50%;
          width: 600px;
          margin-left: -300px;
        `
        btn.insertAdjacentElement('afterbegin', errorPopup);
			})
      
	});

	function createStyles(data) {
		data.forEach(({ src, title, link }) => {
			let item = document.createElement('div');
			item.classList.add(
        'animated', 'fadeInUp',
				'col-sm-3',
				'col-sm-offset-0',
				'col-xs-10',
				'col-xs-offset-1'
			);

			item.innerHTML = `
          <div class=styles-block>
              <img src=${src} alt>
              <h4>${title}</h4>
              <a href="${link}">Подробнее</a>
					</div>
        `;
			styleWrap.appendChild(item);
		});
	}
};

export default showMoreStyles;
