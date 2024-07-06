function init() {
	window.addEventListener('scroll', function(e) {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		shrinkOn = 40,
		navbar = document.querySelector("#navbar");
		if (distanceY >= shrinkOn) {
			navbar.classList.add("smaller");
		} else {
			navbar.classList.remove("smaller");
		}
	});

	var menuShowing = false;
	var menuToogler= document.querySelector('#menuToggler');
	menuToogler.addEventListener("click", function(e) {
		var menu = document.querySelector("#menuItems");
		var logo = document.querySelector("#logo");
		menuShowing = !menuShowing;
		if (menuShowing) {
			menu.classList.add("showMenu");
			logo.classList.add("showMenu");
			menuToogler.classList.add("showMenu");
		} else {
			menu.classList.remove("showMenu");
			logo.classList.remove("showMenu");
			menuToogler.classList.remove("showMenu");
		}
	});
}

window.onload = init();
