$(document).ready(function () {
	changeNavbarStyle();

	$(document).scroll(function () {
		changeNavbarStyle();
	});

	function changeNavbarStyle() {
		var $nav = $('.navbar');
		$nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
	}

	$('.nav-item').click(function (e) {
		var selector = $(this).find('.nav-link').attr('href');
		if (selector.length == 0 || selector[0] != '#') return;
		else e.preventDefault();

		$('.nav-item').removeClass('active');
		$(this).addClass('active');

		var topPosition = $(selector).offset().top;
		var offset = $('.navbar').outerHeight();

		var body = $('html, body');
		body.stop().animate({ scrollTop: topPosition - offset }, 500, 'swing');
	});

	// $("#printing input").keyup(function(){
	//     calculatePrice();
	// });

	// $("#calculate").click(function(){
	//     calculatePrice();
	// });

	// $("#printtime").val($("#printtimeslider").val());

	// $("#printtimeslider").on("input",function () {
	//     $("#printtime").val($(this).val());
	//     calculatePrice();
	// });

	// function calculatePrice(){
	//     var x = parseInt($("#xsize").val());
	//     var y = parseInt($("#ysize").val());
	//     var z = parseInt($("#zsize").val());
	//     var hours = parseFloat($("#printtime").val());

	//     var magicConstant = 0.00155986;

	//     var cost = x*y*z*magicConstant+hours*400;
	//     if (isNaN(cost)) $("#price").text("Töltsd ki a mezőket!");
	//     else $("#price").text(Math.round(cost)+" JMF");
	// }

	var gallery = $('#gallery');
	var items = gallery.children().toArray();
	items.sort(function () {
		return Math.random() - 0.5;
	});
	gallery.empty().append(items);
	gallery.children().removeClass('active');
	gallery.children().first().addClass('active');
});
