window.onload = () => {
	const w1200up = () => {
		const mainNavFunction = () => {
			const mainNav = document.querySelector('.main-nav');
			const mainNavBtn = document.querySelector('.main-nav-btn');
			const mainNavList = document.querySelector('.main-nav-list');
			window.addEventListener('scroll', () => {
				if (mainNav.classList.contains('active')) {
					mainNav.classList.remove('active');
					mainNavList.classList.remove('show');
					mainNavBtn.classList.remove('clicked');
				}
			});
			mainNavBtn.addEventListener('click', e => {
				mainNav.classList.add('active');
				mainNavList.classList.add('show');
				mainNavBtn.classList.add('clicked');
			})
		}
		const displayViewingDelay = () => {
			const introTitle = document.querySelector('#intro .intro-title');
			const introSubTitle = document.querySelector('#intro .intro-subtitle');
			const reflectionsTitle = document.querySelector('#reflections .title');
			const reflectionsSubTitle = document.querySelector('#reflections .subtitle');
			const activitiesTitle = document.querySelector('#activities .title');
			const collections = document.querySelector('#activities .collections');
			const activitiesContainer = document.querySelector('#activities .container');
			window.addEventListener('scroll', () => {
				const scrollY = window.scrollY;
				// console.log(scrollY);
				if (scrollY >= 300) {
					introTitle.classList.add('slide-down');
					introSubTitle.classList.add('slide-down');
				} else {
					introTitle.classList.remove('slide-down');
					introSubTitle.classList.remove('slide-down');
				}

				if (scrollY >= 2200) {
					reflectionsTitle.classList.add('slide');
					reflectionsSubTitle.classList.add('slide');
					reflectionsSubTitle.style.transitionDuration = '1.5s';
				} else {
					reflectionsTitle.classList.remove('slide');
					reflectionsSubTitle.classList.remove('slide');
				}

				if (scrollY >= 3900) {
					activitiesTitle.classList.add('rotate');
					collections.classList.add('slide');
					activitiesContainer.classList.add('show');
				} else {
					activitiesTitle.classList.remove('rotate');
					collections.classList.remove('slide');
					activitiesContainer.classList.remove('show');
				}




			})
		}

		mainNavFunction();
		displayViewingDelay();
	}

	const w1200down = () => {
		console.log('width is less than 1200');
	}

	if (window.outerWidth >= 1200) {
		w1200up();
	} else {
		w1200down();
	}

	window.addEventListener('resize', () => {
		if (window.outerWidth >= 1200) {
			w1200up();
		} else {
			w1200down();
		}
	})

}