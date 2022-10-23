const mask = (selector) => {
	let setCurrentPosition = (pos, elem) => {
		elem.focus();
		// elem.selectionStart = pos;
		// elem.selectionEnd = pos;

		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
		} else if (elem.createTextRage) {
			let range = elem.createTextRage();

			range.collapse(true);
			range.moveEnd('chatacter', pos);
			range.moveStart('chatacter', pos);
			range.select();
		}
	};

	function createMask(event) {
		let matrix = '+7 (___) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length
				? val.charAt(i++)
				: i >= val.length
				? ''
				: a;
		});

		if (event.type === 'blur') {
			if (this.value.length === 2) {
				this.value = '';
			}
		} else if ('click') {
			if (this.value.length === 2) {
				this.selectionStart = this.value.length;
				this.selectionEnd = this.value.length;
			}
		} else {
			setCurrentPosition(this.value.length, this);
		}
	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach((input) => {
		input.addEventListener('click', createMask);
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});
};

export default mask;
