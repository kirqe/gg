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

/* Load more posts on button click */

	$(".loadMoreOne, .loadMore").click(loadMorePosts);
	$(".loadMoreOne, .loadMore").click(scrollBot);

	function loadMorePosts() {
		var _this = this;
		var $blogContainer = $("#blogContainer");
		var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
		var totalPages = parseInt($blogContainer.attr("data-totalPages"));

		$.get("/blog/page" + nextPage, function (data) {
			var htmlData = $.parseHTML(data);
			var $posts = $(htmlData).find(".post");

			$blogContainer.attr("data-page", nextPage).append($posts);

			if ($blogContainer.attr("data-totalPages") == nextPage) {
				$(".loadMoreOne, .loadMore").remove();
			}
			$(".loadMoreOneWrap").remove();
			sameHeightTextBlocks();
		});
	}

	function scrollBot(){
		$('html, body').animate({ scrollTop: $(document).height() }, 1200)
		return;
	}
})
