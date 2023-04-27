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
	// loop: true,
	
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

// FILTER TREATMENTS


//filter cards
const filtersCat = document.querySelectorAll('.filter-btn');

let activeCards = document.querySelectorAll(
	'.explore-cards .card:not(.d-none)'
);

// filter cards by category
filtersCat.forEach((filter) => {
	filter.addEventListener('click', function () {
		filtersCat.forEach((filter) => {
			filter.classList.remove('active');
		});
		this.classList.add('active');
		const category = this.dataset.cat;
		const cards = document.querySelectorAll('.explore-cards .card');
		cards.forEach((card) => {
			if (category === card.dataset.type || category === 'all') {
				card.classList.remove('d-none');
			} else {
				card.classList.add('d-none');
			}
		});
		const cardsCount = document.querySelectorAll(
			'.explore-cards .card:not(.d-none)'
		);
		if (cardsCount.length === 0) {
			document.querySelector('.no-results').classList.remove('d-none');
		} else {
			document.querySelector('.no-results').classList.add('d-none');
		}
		activeCards = document.querySelectorAll(
			'.explore-cards .card:not(.d-none)'
		);
	});
});
// END FILTER TREATMENTS

// filter gallery
// FILTER TREATMENTS


//filter cards
const filtersCat2 = document.querySelectorAll('.filter-btn2');

let activeCards2 = document.querySelectorAll(
	'.explore-treatments .imag:not(.d-none)'
);

// filter cards by category
filtersCat2.forEach((filter) => {
	filter.addEventListener('click', function () {
		filtersCat2.forEach((filter) => {
			filter.classList.remove('active');
		});
		this.classList.add('active');
		const category2 = this.dataset.cat;
		const cards2 = document.querySelectorAll('.explore-treatments .imag');
		cards2.forEach((card) => {
			if (category2 === card.dataset.type || category2 === 'all') {
				card.classList.remove('d-none');
			} else {
				card.classList.add('d-none');
			}
		});
		const cardsCount2 = document.querySelectorAll(
			'.explore-treatments .imag:not(.d-none)'
		);
		if (cardsCount2.length === 0) {
			document.querySelector('.no-results').classList.remove('d-none');
		} else {
			document.querySelector('.no-results').classList.add('d-none');
		}
		activeCards2 = document.querySelectorAll(
			'.explore-treatments .imag:not(.d-none)'
		);
	});
});

// end filter gallery