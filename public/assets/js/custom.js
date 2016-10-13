---
---
/**
 * Custom JS
 */


/*** Load blog items ***/


$.getJSON("{{site.baseurl}}/posts.json", function(data) {
	var items = [];

	for (var key in data) {
		if(data[key]['middle'] != "true"){
			items.push(data[key]);
		}
	}

	function renderMarkup(arr) {
		var markup = "";

		for (var i = 0; i < arr.length; i++) {

			if ( (i + 1) % 2 ) {
				markup += '<div class="row">';
			}

			markup += '<div class="col-xs-12 col-sm-6 bg-image" style="background-image: url(' + arr[i]["featured_image"] + ');">'
			markup += '<div class="text-block">';
			markup += '<h3 class="text-block__heading">';
			markup += arr[i]["title"];
			markup += '</h3>';
			markup += '<div class="text-block__time">';
			markup += '<i class="fa fa-clock-o"></i> ' + arr[i]["date"];
			markup += '</div>';
			markup += '<p class="text-block__content">';
			markup += arr[i]["summary"];
			markup += '</p>';
			markup += '<div class="text-center">';
			markup += '<a href="' + arr[i]["url"] + '" class="btn btn-link">';
			markup += 'Weiterlesen <i class="fa fa-angle-right"></i>';
			markup += '</a></div></div></div>';

			if ( (i + 2) % 2 || i == (arr.length - 1) ) {
				markup += '</div> <!-- / .row -->';
			}
		}

		return markup;
	}

	// Append default blog items
	var defaultItems = items.slice(1,3);

	$(".section_2 > .container").append( renderMarkup(defaultItems) );

	// Load more items on click
	var itemsLoaded = 3;
	var itemsLoad = itemsLoaded + 6;

	$("#blog-items__load").click(function() {
		var moreItems = items.slice(itemsLoaded, itemsLoad);

		$(".section_4 > .container").append( renderMarkup(moreItems) )
		$(".section_4").removeClass("section_empty");

		if (itemsLoad >= items.length) {
			$(".section_5").hide();
		}

		itemsLoaded = itemsLoad;
		itemsLoad = itemsLoaded + 6;


		return false;
	});

});
