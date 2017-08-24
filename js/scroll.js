$(document).ready(function () {
	
	function isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	
	if (!isMobile()) {

		$(window).scroll(function () {
	        if ($(this).scrollTop() > 100) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	    });
	
	    $('.scrollup').click(function () {
	        $("html, body").animate({
	            scrollTop: 0
	        }, 600);
	        return false;
	    });
	    
	    $(function() {
			$.stickysidebarscroll("#bookmaker-form",{offset: {top: 10, bottom: 200}});
		});
	}
		
	
});