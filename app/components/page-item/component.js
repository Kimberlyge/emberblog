import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({
	classNames: ['PageItem'],

	detail: on('didInsertElement', function() {
		this._scrollPosition();
	}),

    _scrollPosition(event) {

    	var scrollPosition = $(window).scrollTop();

    	console.log(scrollPosition);

    	if (scrollPosition > 0) {
    		$("html, body").animate({ scrollTop: "0px" });
    	}

	},

	actions() {
	}
});
