import Ember from 'ember';

export default Ember.Route.extend({
	// Refresh the model hook whenever the category changes.
	queryParams: {
		category: {
			refreshModel: true
		},
		tag: {
			refreshModel: true
		}
	},

	model(params) {
		console.log(params);
		return this.store.query('post', {filter: {category_name: params.category, term: params.tag}});
	}
});
