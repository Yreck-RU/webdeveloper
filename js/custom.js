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

var swiperOne = new Swiper(".swiperOne", {
	//cssMode: true,
	spaceBetween: 60,
	speed: 700,
	navigation: {
		//nextEl: ".index-block-slaider__button-navigachion_left",
		//prevEl: ".index-block-slaider__button-navigachion_right",
		prevEl: ".index-block-slaider__button-navigachion_left",
		nextEl: ".index-block-slaider__button-navigachion_right",
	},
	pagination: {
		el: ".index-block-slaider__pagination",
	},
	//mousewheel: true,
	//keyboard: true,
});

//=========================================================================================================