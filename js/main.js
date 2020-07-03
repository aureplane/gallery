$('#search').on('keyup', function(){
	const userSearch = $(this).val().toLowerCase();


		$('.gallery div').each(function() {
			const imgCaption = $(this).attr("data-sub-html").toLowerCase();
			if (imgCaption.indexOf(userSearch) === -1) {
				$(this).children().hide();
			} else {
				$(this).children().show();
			}
		});
});