$('.menu_secondary .menuItem').each(function(idx, itm) {
	var split = new URL(window.location.href).pathname.split('/');
	var current_page = split[split.length - 1]

	split = new URL(itm).pathname.split('/');
	var page = split[split.length - 1]

	if(page == current_page) {
		$(itm).addClass("selected");
	}
});
