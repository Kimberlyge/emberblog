import Ember from 'ember';

const {on, $} = Ember;

export default Ember.Component.extend({

	detail: on('didInsertElement', function() {
		this.actions();
	}),

    _generatePin(event) {

		var target = event.target;

    	if (target.classList.contains('js-pin-it-active')) {
    		return;
    	}

    	target.classList.add('js-pin-it-active');

    	target.insertAdjacentHTML('beforebegin', '<a href="http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + encodeURIComponent(event.target.currentSrc) + '&description=' + encodeURIComponent(event.target.title) + '" target="_blank" class="pinterest-anchor js-pin-icon"><div class="icon icon-pinterest icon-pinterest--big"> </div></a>');

	},

	actions() {

		var pinImg = document.querySelectorAll('.js-pin-it');

		$(pinImg).on('mouseenter', event => this._generatePin(event));

	}
});
