window.onload = () => {
	const w800up = () => {
		const clock = () => {
			const clockContainer = document.querySelector('#time');
			const dateContainer = document.querySelector('#date');
			const today = new Date();

			const mt = today.getMonth() + 1;
			let month;
			const date = today.getDate();
			const year = today.getFullYear();

			const hr = today.getHours();
			const mn = today.getMinutes();
			const sc = today.getSeconds();

			switch (mt) {
				case 1:
					month = 'January';
					break;
				case 2:
					month = 'February';
					break;
				case 3:
					month = 'March';
					break;
				case 4:
					month = 'April';
					break;
				case 5:
					month = 'May';
					break;
				case 6:
					month = 'June';
					break;
				case 7:
					month = 'July';
					break;
				case 8:
					month = 'August';
					break;
				case 9:
					month = 'September';
					break;
				case 10:
					month = 'October';
					break;
				case 11:
					month = 'November';
					break;
				case 12:
					month = 'December';
					break;
				default:
					month = 'unset';
					break;
			}

			function setZero(n) {
				return n < 10 ? '0'+n : n;
			}

			dateContainer.innerHTML = `${month} ${setZero(date)}, ${year}`;
			clockContainer.innerHTML = `${setZero(hr)}:${setZero(mn)}:${setZero(sc)}`;
			setTimeout(clock, 1000);
		}
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

				if (scrollY >= 3400) {
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
		const mainContentQuestions = () => {
			const body = document.querySelector('body');
			const mainContentBtn = document.querySelector('#main-content-btn');
			const mainContent = document.querySelector('.content');
			const closeContentBtn = document.querySelector('#close-content-btn');
			const questionsBtn = document.querySelectorAll('.content .question-btn');

			mainContentBtn.addEventListener('click', () => {
				mainContent.classList.add('open');
				body.style.overflow = 'hidden';

				Array.from(questionsBtn).forEach(button => {
					button.addEventListener('click', e => {
						const answer = e.target.parentNode.children[1];
						answer.classList.toggle('show');
						button.classList.toggle('btn-toggle');
					})
				})

				closeContentBtn.addEventListener('click', () => {
					mainContent.classList.remove('open');
					body.style.overflow = 'auto';
				})
			})
		}

		mainNavFunction();
		displayViewingDelay();
		mainContentQuestions();
		clock();
	}

	const w800down = () => {
		const mobileNavFunction = () => {
			const mobileNav = document.querySelector('.mobile-nav');
			const mobileNavBtn = document.querySelector('.mobile-nav-btn');
			const mobileNavList = document.querySelector('.mobile-nav-list');

			mobileNavBtn.addEventListener('click', () => {
				mobileNavList.classList.toggle('show');
			})

			window.addEventListener('scroll', () => {
				mobileNavList.classList.remove('show');
			})
		}
		const mainContentQuestions = () => {
			const body = document.querySelector('body');
			const mainContentBtn = document.querySelector('#mobile-content-btn');
			const mainContent = document.querySelector('.content');
			const closeContentBtn = document.querySelector('#close-content-btn');
			const questionsBtn = document.querySelectorAll('.content .question-btn');

			mainContentBtn.addEventListener('click', () => {
				mainContent.classList.add('open');
				body.style.overflow = 'hidden';

				Array.from(questionsBtn).forEach(button => {
					button.addEventListener('click', e => {
						const answer = e.target.parentNode.children[1];
						answer.classList.toggle('show');
						button.classList.toggle('btn-toggle');
					})
				})

				closeContentBtn.addEventListener('click', () => {
					mainContent.classList.remove('open');
					body.style.overflow = 'auto';
				})
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
				console.log(scrollY);
				if (scrollY >= 200) {
					introTitle.classList.add('slide-down');
					introSubTitle.classList.add('slide-down');
				} else {
					introTitle.classList.remove('slide-down');
					introSubTitle.classList.remove('slide-down');
				}

				if (scrollY >= 3000) {
					reflectionsTitle.classList.add('slide');
					reflectionsSubTitle.classList.add('slide');
					reflectionsSubTitle.style.transitionDuration = '1.5s';
				} else {
					reflectionsTitle.classList.remove('slide');
					reflectionsSubTitle.classList.remove('slide');
				}

				if (scrollY >= 5800) {
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
		mobileNavFunction();
		mainContentQuestions();
		displayViewingDelay();
	}

	if (window.outerWidth >= 800) {
		w800up();
	} else {
		w800down();
	}

	window.addEventListener('resize', () => {
		if (window.outerWidth >= 800) {
			w800up();
		} else {
			w800down();
		}
	})

}