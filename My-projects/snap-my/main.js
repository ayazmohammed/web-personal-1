// const parllax = document.querySelector(".parallax");

// window.addEventListener("scroll", function() {
// 	let offset = window.pageYOffset;
// 	parllax.style.backgroundPositionY = offset * 0.5 + 'px';
// });


// burger menu mobile

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.link')
	const navLinks = document.querySelectorAll(`.nav-links li`);


	burger.addEventListener('click', () => {
		nav.classList.toggle('link-active');
	})

	// navLinks.forEach(link, index) => {
	// 	link.style.animation = 'navLinkFade'
	// }
}

navSlide();


// scroll to the top

	const toTop = document.querySelector(".toTop");

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 50) {
			toTop.classList.add("active");
		}else {
			toTop.classList.remove("active");
		}
	})

