import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		// return this.store.findRecord('page', params.90);
		return this.store.findRecord('page', params.id);
	}
});
