/**
 * Custom JS
 */


/*** Text blocks ***/

/* Equal height text blocks */

$(function() {

	function sameHeightTextBlocks() {
		var windowWidth = $(window).width();

		if (windowWidth > 767) {

			var textBlockHeight = 0;

			$(".same-height-text-blocks").find(".text-block").each(function() {
				var height = $(this).outerHeight();

				if (textBlockHeight < height)
					textBlockHeight = height;
			});

			$(".same-height-text-blocks").find(".text-block").css("height", textBlockHeight + "px");
		}
	}

	sameHeightTextBlocks();

	$(window).resize(sameHeightTextBlocks);

});