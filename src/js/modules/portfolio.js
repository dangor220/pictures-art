const portfolio = (trigger, content, worksNotFound) => {
	const menu = document.querySelector(trigger),
		contentMenu = document.querySelectorAll(content),
		worksModal = document.querySelector(worksNotFound);

	menu.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			menu.querySelectorAll('li').forEach((item) => {
				item.classList.remove('active');
			});
			e.target.classList.add('active');

			showWorks(e.target.classList[0]);
		}
	});

	function showWorks(className) {
		if (className === 'grandmother' || className === 'granddad') {
			contentMenu[0].parentNode.style.display = 'none';
			worksModal.style.display = 'block';
			worksModal.classList.add('animated', 'fadeInUp');
		} else {
			contentMenu[0].parentNode.style.display = 'flex';
			worksModal.style.display = 'none';
		}

		contentMenu.forEach((elem) => {
			elem.style.display = 'none';
			if (elem.classList.contains(className)) {
				elem.classList.add('animated', 'fadeIn');
				setTimeout(() => {
					elem.style.display = 'block';
				});
			}
		});
	}
};

export default portfolio;
