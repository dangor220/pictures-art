const accordeon = (
	selector,
	selectorHeaders,
	selectorActiveHeaders,
	selectorBlocks
) => {
	const accord = document.querySelector(selector),
		headers = document.querySelectorAll(selectorHeaders),
		blocks = document.querySelectorAll(selectorBlocks);

	function hideBlocks() {
		blocks.forEach((block) => {
			block.style.display = 'none';
		});
	}

	hideBlocks();

	function setClassActive(target) {
		headers.forEach((item) => {
			item.classList.remove(selectorActiveHeaders);
		});
		target.classList.add(selectorActiveHeaders);
	}

	function showBlock(target) {
		target.classList.add('animated', 'fadeInUp');
		target.style.display = 'block';
	}

	accord.addEventListener('click', (e) => {
		const item = e.target.closest('.accordion-heading');
		if (item) {
			hideBlocks();
			setClassActive(item);
			showBlock(item.nextElementSibling);
		}
	});

	headers[0].click();
};

export default accordeon;
