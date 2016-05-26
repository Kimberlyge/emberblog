import Ember from 'ember';

export default Ember.Route.extend({
	// Refresh the model hook whenever the category changes.
	queryParams: {
		category: {
			refreshModel: true
		}
	},

	model(params) {
		// return Ember.RSVP.hash({
		// 	posts: this.store.query('post', {filter: {category_name: 'breakfast'}})
		// });
		console.log(params);
		return this.store.query('post', {filter: {category_name: params.category}});
		// return this.store.query('post', params);
		// return this.store.findAll('post');
	}
});
