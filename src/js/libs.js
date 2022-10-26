import 'bootstrap'

import Plyr from 'plyr';
const player1 = new Plyr('#player1');

//swiper
import Swiper from 'swiper/bundle';

const reviewSwiper = new Swiper('.review__swiper', {
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		1260: {
			slidesPerView: 3,
			spaceBetween: 44,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		}
	},
	navigation: {
		prevEl: ".review .swiper__buttons .btn__swiper-prev",
		nextEl: ".review .swiper__buttons .btn__swiper-next"
	},
	pagination: {
		el: ".review .swiper-pagination",
		clickable: true,
	},
})

var SwiperGalleryThumbs = new Swiper(".swiper-gallery-thumbs", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
var SwiperGalleryMain = new Swiper(".swiper-gallery-main", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".about-doctor__gallery .btn__swiper-next",
		prevEl: ".about-doctor__gallery .btn__swiper-prev",
	},
	thumbs: {
		swiper: SwiperGalleryThumbs,
		slidesPerView: 4,
	},
});

var SwiperSymtoms = new Swiper(".swiper-symtoms", {
	spaceBetween: 20,
	breakpoints: {
		1260: {
			slidesPerView: 4,
			spaceBetween: 38,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		}
	},
	navigation: {
		prevEl: ".swiper-symtoms .btn__swiper-prev",
		nextEl: ".swiper-symtoms .btn__swiper-next"
	},
});

var OtherSymtoms = new Swiper(".swiper-other-symtoms", {
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		360: {
			slidesPerView: 1,
			spaceBetween: 10,
			grabCursor: true,
		}
	},
	navigation: {
		prevEl: ".other-symtoms .btn__swiper-prev",
		nextEl: ".other-symtoms .btn__swiper-next"
	},
	pagination: {
		el: ".other-symtoms .swiper-pagination",
		clickable: true,
	},
});