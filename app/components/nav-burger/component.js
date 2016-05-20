import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	layout: inject.service(),
	// classNameBindings: ['layout.onMobile'],
	actions: {
		toggleMobile() {
			$('.Header').toggleClass('on-mobile');
		}
	}
});
