$('.team-carousel').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplaySpeed: 1000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
})
