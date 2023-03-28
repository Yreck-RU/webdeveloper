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

/*var swiperTwo = new Swiper(".swiperTwo", {
	//cssMode: true,
	//spaceBetween: 30,
	slidesPerView: 2,
	grid: {
		rows: 2,
	},
	//speed: 700,

	//loop: true,
	/*navigation: {
		//nextEl: ".index-block-slaider__button-navigachion_left",
		//prevEl: ".index-block-slaider__button-navigachion_right",
		prevEl: ".index-block-slaider__button-navigachion_left",
		nextEl: ".index-block-slaider__button-navigachion_right",
	},
	pagination: {
		el: ".index-block-slaider__pagination",
		clickable: true,
	},*/
	//mousewheel: true,
	//keyboard: true,
	//autoHeight: true,

	/*breakpoints: {
		300: {
			allowTouchMove: true,
			//autoHeight: true,
		},
		767.1: {
			allowTouchMove: false,
			//autoHeight: false,
		},
	},
});*/

const mediaQuery = window.matchMedia('(max-width: 767px)')
if (mediaQuery.matches) {
	var swiperTwo = new Swiper(".swiperTwo", {
		slidesPerView: 2,
		grid: {
			rows: 2,
		},
		spaceBetween: 30,
		slidesPerGroup: 2,
		navigation: {
			//nextEl: ".index-block-slaider__button-navigachion_left",
			//prevEl: ".index-block-slaider__button-navigachion_right",
			prevEl: ".premium-block__button-navigachion_left",
			nextEl: ".premium-block__button-navigachion_right",
		},
		pagination: {
			el: ".premium-block__pagination",
			clickable: true,
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				grid: {
					rows: 2,
				},
			},
			540: {
				slidesPerView: 2,
				//autoHeight: false,
			},
		},
	});
	var swiperThree = new Swiper(".swiperThree", {
		spaceBetween: 30,
		slidesPerGroup: 1,
		navigation: {
			//nextEl: ".index-block-slaider__button-navigachion_left",
			//prevEl: ".index-block-slaider__button-navigachion_right",
			prevEl: ".portfolio__button-navigachion_left",
			nextEl: ".portfolio__button-navigachion_right",
		},
		pagination: {
			el: ".portfolio__pagination",
			clickable: true,
		},
	});
}

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


//=========================================================================================================

const Forms =  document.querySelectorAll('._input-placeholder');

if (Forms) {
	for (let i = 0; i < Forms.length; i++) {
		let Form = Forms[i];
		let FormPlaceholder = Form.placeholder;

		Form.addEventListener("focus", function (e) {
			Form.placeholder = "";
			//Form.classList.toggle('_focus');
			if (!Form.value) {
				Form.classList.toggle('_focus');
			}
		});
		Form.addEventListener("blur", function (e) {
			Form.placeholder = FormPlaceholder;
			if (!Form.value) {
				Form.classList.toggle('_focus');
			}
		});
	}
}

//=========================================================================================================

//=========================================================================================================

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
	for (let i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i];
		popupLink.addEventListener("click", function (e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let i = 0; i < popupCloseIcon.length; i++) {
		const el = popupCloseIcon[i];
		el.addEventListener('click', function (e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let i = 0; i < lockPadding.length; i++) {
			const el = lockPadding[i];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	if ( !(body.classList.contains("on")) ) {
		body.classList.add('_lock');
	}

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let i = 0; i < lockPadding.length; i++) {
				const el = lockPadding[i];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		if (document.querySelector(".burger-form") && document.querySelector(".burger-wrapper")) {
			if ( !(document.querySelector(".burger-form").classList.contains("_active")) && !(document.querySelector(".burger-wrapper").classList.contains("_active"))) {
				body.classList.remove('_lock');
			}
		} else {
			body.classList.remove('_lock');
		}
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

//=========================================================================================================

//=========================================================================================================

const FormValidationWrappers =  document.querySelectorAll('._form-validation__wrapper');

if (FormValidationWrappers) {
	for (var i = 0; i < FormValidationWrappers.length; i++) {
		//alert(i);
		let FormValidationWrapper = FormValidationWrappers[i];
		let FormValidationButton =  FormValidationWrapper.querySelector('._form-validation__button'); //onclick="return false"
		let FormValidationBodys =  FormValidationWrapper.querySelectorAll('._form-validation__body');
		let FormValidationInputs =  FormValidationWrapper.querySelectorAll('._form-validation__input');

		FormValidationButton.addEventListener( 'click', (e) => {
			if (FormValidationInputs.length = FormValidationBodys.length) {
				let sum = 0;
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					//alert(FormValidationInput);
					if (FormValidationInput.getAttribute("type") === "checkbox") {
						if (FormValidationInput.checked === true) {

						} else {
							FormValidationInput.classList.add('error');
							FormValidationBody.classList.add('error');
							sum++;
						}
					} else {
						if (FormValidationInput.value) {

						} else if (false) {

						} else {
							FormValidationInput.classList.add('error');
							FormValidationBody.classList.add('error');
							sum++;
						}
					}
				}
				if (sum <= 0) {
					FormValidationWrapper.submit();
				}
			}
		});

		for (let i = 0; i < FormValidationInputs.length; i++) {
			let FormValidationInput = FormValidationInputs[i];
			
			FormValidationInput.addEventListener( 'click', (e) => {
				for (let i = 0; i < FormValidationBodys.length; i++) {
					let FormValidationInput = FormValidationInputs[i];
					let FormValidationBody = FormValidationBodys[i];

					FormValidationInput.classList.remove('error');
					FormValidationBody.classList.remove('error');
				}
			});
		}

	}
}

//=========================================================================================================

//=========================================================================================================



//=========================================================================================================

window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
	let slaiderIndexActive = document.querySelector("._index-block-active");
	if (slaiderIndexActive) {
		slaiderIndexActive.classList.add('_active');
	}
};







// =================================================================
// Начало - "Линивая загруска"
// =================================================================

const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');

const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
			ibg();
		}
	});
}

window.addEventListener("scroll", lazuScroll);
function lazuScroll() {
	if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
		lazyScrollCheck();
		ibg();
	}
}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);

	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}

// =================================================================
// Конец - "Линивая загруска"
// =================================================================