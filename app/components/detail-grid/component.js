import Ember from 'ember';
import imagesLoaded from 'npm:imagesLoaded';

const {$, Component, on} = Ember;

export default Component.extend({

	masonry: on('didInsertElement', function () {
		var $grid = this.$().find('.Masonry');
		var $detailItem = this.$().find('.DetailGrid-item');

		console.log('hi');

		$grid.imagesLoaded( function() {

			$detailItem.addClass('is-loaded');

			$grid.masonry({
				columnWidth: '.Masonry-sizer',
				percentPosition: true,
				gutter: '.Masonry-gutter'
			});

		});
	}),

	actions: {
		// filter: function() {
		// 	var $grid = this.$().find('.Masonry');
		// 	var filterValue = $(this).attr('data-filter');
		// 	$grid.isotope({ filter: filterValue });

		// 	console.log('clicked');
		// }
	}
});
