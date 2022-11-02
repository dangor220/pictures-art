const up = (btn) => {
	const btnUp = document.querySelector(btn),
		links = document.querySelectorAll('[href^="#"]');

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1650) {
			btnUp.style.opacity = 1;
		} else {
			btnUp.style.opacity = 0;
		}
	});

	const elem = document.documentElement,
		body = document.body;

	function calcScroll() {
		links.forEach((link) => {
			link.addEventListener('click', function (event) {

				let scrollTop = Math.round(elem.scrollTop || body.scrollTop);

				if (this.hash !== '') {
					event.preventDefault();

					let hashElement = document.querySelector(this.hash),
						hashElementTop = 0;
          
					while (hashElement.offsetParent) {
						hashElementTop += hashElement.offsetTop;
						hashElement = hashElement.offsetParent;
					}
          
					hashElementTop = Math.round(hashElementTop);
					smoothScroll(scrollTop, hashElementTop, this.hash);
				}
			});
		});
	}

	function smoothScroll(from, to, hash) {
		let timeInterval = 1,
			prevScrollTop,
			speed;

		if (from < to) {
			speed = 40;
		} else {
			speed = -40;
		}

		let move = setInterval(() => {
			let scrollTop = Math.round(elem.scrollTop || body.scrollTop);
			if (
				prevScrollTop === scrollTop ||
				(to > from && scrollTop >= to) ||
				(to < from && scrollTop <= to)
			) {
				clearInterval(move);
				history.replaceState(
					history.state,
					document.title,
					location.href.replace(/#.*$/g, '') + hash
				);
			} else {
				body.scrollTop += speed;
				elem.scrollTop += speed;
				prevScrollTop = scrollTop;
			}
		}, timeInterval);
	}

	calcScroll();

	// links.forEach(link => {
	//   link.addEventListener('click', function(event) {
	//     event.preventDefault();

	//     const hash = this.hash,
	//           targetPosition = Math.round(document.querySelector(hash).getBoundingClientRect().top);

	//     console.log(document.querySelector(hash).offsetParent);

	//     window.scrollTo({
	//           top: targetPosition,
	//           behavior: "smooth"
	//     });

	//     history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);

	//   })
	// })
};

export default up;
