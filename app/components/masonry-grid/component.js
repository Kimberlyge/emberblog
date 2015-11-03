import Ember from 'ember';
import imagesLoaded from 'npm:imagesLoaded';
import isotope from 'npm:isotope-layout';

const {$, Component, on} = Ember;

export default Component.extend({

	masonry: on('didInsertElement', function () {
		var $grid = this.$().find('.Masonry');
		var $teaser = this.$().find('.Teaser');
		var $navButtons = this.$().find('.Nav');

		console.log($navButtons);

		$grid.imagesLoaded( function() {

			$teaser.addClass('is-loaded');

			$grid.isotope({
				itemSelector: '.Teaser'
			});

			$grid.masonry({
				columnWidth: '.Masonry-sizer',
				percentPosition: true,
				gutter: '.Masonry-gutter'
			});

		});

		$('.Nav, .NavSub').on('click', 'a', function() {
			var filterValue = $(this).attr('data-filter');
			var $subNav = $('.NavSub');

			//$(this).addClass('is-active');


			$grid.masonry({
				columnWidth: '.Masonry-sizer',
				percentPosition: true,
				gutter: '.Masonry-gutter'
			});
			$grid.isotope({
				filter: filterValue
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
