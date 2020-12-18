(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');
	})
})();


(function () {
	$('.mobile-nav ul li a').on('click', function() {
		$('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
	mobileNav.toggleClass('hide show');
	})
})();


// lightbox slider


