$(window).scroll(function() {
	if($(this).scrollTop() >= 150) {
		$("header").addClass("small")
	}else {
		$("header").removeClass("small")
	}
});