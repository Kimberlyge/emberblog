import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({
	classNames: ['PageItem'],

	detail: on('didInsertElement', function() {
		console.log('page item');
		this._scrollPosition();
	}),

	_scrollPosition() {

		var scrollPosition = $(window).scrollTop();

		console.log(scrollPosition);

		if (scrollPosition > 0) {
			setTimeout( function () {
				$("html, body").animate({ scrollTop: "0px" }, 350);
			}, 500);
		}

	}
});
