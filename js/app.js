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


mainNavFunction();