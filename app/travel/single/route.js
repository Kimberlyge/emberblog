import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		id: {
			refreshModel: true
		}
	},

	model(params) {
		// return this.store.findRecord('page', 101);
		return this.store.findRecord('page', params.id);
		// return this.store.query('page', {filter: {id: params.id}});
		return this.get('id');
	}
});
