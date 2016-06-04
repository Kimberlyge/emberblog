import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	activate() {
		this.set('layout.onTravel', true);
	},
	deactivate() {
		this.set('layout.onTravel', false);
	}
});
