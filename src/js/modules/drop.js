const drop = () => {
	const inputFiles = document.querySelectorAll('[name="upload"]');

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
		inputFiles.forEach((input) => {
			input.addEventListener(eventName, preventDefaults, false);
		});
	});

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	const showDropStyle = (item) => {
		item.closest('.file_upload').style.border = '2px solid yellow';
		item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.7)';
	};

	const hideDropStyle = (item) => {
		item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc-from')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
	};

	['dragenter', 'dragover'].forEach((eventName) => {
		inputFiles.forEach((input) => {
			input.addEventListener(eventName, () => showDropStyle(input), false);
		});
	});

	['dragleave', 'drop'].forEach((eventName) => {
		inputFiles.forEach((input) => {
			input.addEventListener(eventName, () => hideDropStyle(input), false);
		});
	});

	inputFiles.forEach((input) => {
		input.addEventListener('drop', (e) => {
			input.files = e.dataTransfer.files;

			let dots;
			const arr = input.files[0].name.split('.');
			arr[0].length > 6 ? (dots = '...') : (dots = '.');

			input.previousElementSibling.textContent =
				arr[0].substring(0, 6) + dots + arr[1];
		});
	});
};

export default drop;
