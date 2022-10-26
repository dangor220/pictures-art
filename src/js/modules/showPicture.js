const showPicture = (selector) => {
	const blocks = document.querySelectorAll(selector);

	const showBlock = (target) => {
		const img = target.querySelector('img');
		img.src = img.src.slice(0, -4) + '-1.png';

		target
			.querySelectorAll('p:not(.sizes-hit)')
			.forEach((p) => (p.style.display = 'none'));
	};

	const hideBlock = (target) => {
		const img = target.querySelector('img');
		img.src = img.src.slice(0, -6) + '.png';

		target
			.querySelectorAll('p:not(.sizes-hit)')
			.forEach((p) => (p.style.display = 'block'));
	};

	blocks.forEach((block) => {
		block.addEventListener('mouseover', () => {
			showBlock(block);
		});

		block.addEventListener('mouseout', () => {
			hideBlock(block);
		});
	});
};

export default showPicture;
