const calc = (sum, size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	const calcFunc = (e) => {
		sum.price = Math.round(
			+sizeBlock.value * +materialBlock.value + +optionsBlock.value
		);

		if (e.target.getAttribute('id') !== 'promo') {
			sum[e.target.getAttribute('id')] =
				e.target.value +
				' ' +
				e.target.querySelector(`[value="${e.target.value}"]`).textContent;
		} else {
			if (e.target.value !== 'IWANTPOPART')
				sum[e.target.getAttribute('id')] = e.target.value;
		}

		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Пожалуйста введите размер и материал';
		} else if (promocodeBlock.value === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum.price * 0.7);
		} else {
			resultBlock.textContent = sum.price;
		}
	};
	sizeBlock.addEventListener('change', calcFunc);
	materialBlock.addEventListener('change', calcFunc);
	optionsBlock.addEventListener('change', calcFunc);
	promocodeBlock.addEventListener('change', calcFunc);
};
export default calc;
