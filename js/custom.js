function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

//=========================================================================================================

//=========================================================================================================

var swiperOne = new Swiper(".swiperOne", {
	//cssMode: true,
	spaceBetween: 120,
	speed: 700,
	//loop: true,
	navigation: {
		//nextEl: ".index-block-slaider__button-navigachion_left",
		//prevEl: ".index-block-slaider__button-navigachion_right",
		prevEl: ".index-block-slaider__button-navigachion_left",
		nextEl: ".index-block-slaider__button-navigachion_right",
	},
	pagination: {
		el: ".index-block-slaider__pagination",
		clickable: true,
	},
	//mousewheel: true,
	//keyboard: true,
	autoHeight: true,

	breakpoints: {
		300: {
			allowTouchMove: true,
			//autoHeight: true,
		},
		767.1: {
			allowTouchMove: false,
			//autoHeight: false,
		},
	},
});

//=========================================================================================================

//=========================================================================================================

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerBlur = document.querySelector('.header-blur');
const header = document.querySelector('.header');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		header.classList.toggle('_active');
	});
	headerBlur.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
		header.classList.remove('_active');
	});
}

//=========================================================================================================