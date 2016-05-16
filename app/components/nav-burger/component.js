import Ember from 'ember';

const {Component, inject} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNameBindings: ['layout.onMobile'],
	actions: {
		toggleAside() {
			this.toggleProperty('layout.onMobile');
		}
	}
});
