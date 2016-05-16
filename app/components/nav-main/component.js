import Ember from 'ember';

const {Component, inject, on, $} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNames: ['Header'],

	detail: on('afterRender', function() {
		// $('.Nav').sticky();
	}),

	click(event) {
		const clickedElementHasAnHref = event.target.href;
		console.log(clickedElementHasAnHref);
		if (clickedElementHasAnHref && this.get('layout.showAside')) {
			this.get('layout').perhapsCloseAside();
		}
	}
});
