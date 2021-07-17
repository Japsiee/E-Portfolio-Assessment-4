window.onload = () => {
	const w1100up = () => {
		const slideDownBtn = document.querySelectorAll('#team .slide-down-btn');
		Array.from(slideDownBtn).forEach(btn => {
			btn.addEventListener('click', e => {
				if (e.target.nodeName === 'I') {
					const btn = e.target;
					const downloadBtn = btn.parentElement.parentElement.children[3];
					downloadBtn.classList.toggle('show');
				} else {
					console.warn('warning error');
				}
			});
		});
		const searchName = () => {
			const input = document.querySelector('#search-name');
			const team = document.querySelector('#team');
			input.addEventListener('keyup', e => {
				let inputValue = input.value.toLowerCase();
				for (let i = 0; i < team.children.length; i++) {
					let name = team.children[i].children[0].textContent.toLowerCase();
					if (name.indexOf(inputValue) !== -1) {
						team.children[i].style.display = 'initial';
					} else {
						team.children[i].style.display = 'none';
					}
				}
			});
		}
		searchName();
	}

	const w1100down = () => {
		console.log('width is less than 1100');
	}

	if (window.outerWidth >= 1100) {
		w1100up();
	} else {
		w1100down();
	}

	window.addEventListener('resize', () => {
		if (window.outerWidth >= 1100) {
			w1100up();
		} else {
			w1100down();
		}
	})

}