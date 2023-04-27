// NAVIGATION
const toggleMenu = () => {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
};
// END NAVIGATION

// GALLERY
const swiper = new Swiper('.gallery-slider', {
	// Optional parameters
	slidesPerView: 1,
	spaceBetween: 70,

	// Navigation arrows
	navigation: {
		nextEl: '.gallery-slider .swiper-button-next',
		prevEl: '.gallery-slider .swiper-button-prev',
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
});

// END GALLERY

// treatments
const swiper2 = new Swiper('.treatments-slider', {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: '.treatments-slider .swiper-button-next',
		prevEl: '.treatments-slider .swiper-button-prev',
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween:20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});
// end treatments

// change theme
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme-variables');

	themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
	themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});