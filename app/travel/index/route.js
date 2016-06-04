import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// return this.store.find('page');
		return this.store.findRecord('page', 90);
	}
});
