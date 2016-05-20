import Ember from 'ember';

export default Ember.Route.extend({
	// Refresh the model hook whenever the category changes.
	// queryParams: {
	// 	category: {
	// 		refreshModel: true
	// 	}
	// },

	model() {
		return Ember.RSVP.hash({
			// page: this.store.findRecord('page', 67)
			// artists: this.store.findAll('artist'),
			// news: this.store.query('post', {per_page: 2})

			// categories: this.store.findAll('category'),
			posts: this.store.findAll('post')
		});

	}
});
