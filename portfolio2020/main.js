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


let arrow = document.getElementById('buttonArrow');

arrow.addEventListener('click', function(){
	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})


// lightbox slider


