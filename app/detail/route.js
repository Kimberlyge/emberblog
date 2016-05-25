import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findRecord('post', 85);
		// return this.store.findAll('post');

	}

	// model() {
	// 	return Ember.RSVP.hash({
	// 		// page: this.store.findRecord('page', 67)
	// 		// artists: this.store.findAll('artist'),
	// 		// news: this.store.query('post', {per_page: 2})

	// 		// categories: this.store.findAll('category'),
	// 		posts: this.store.findAll('post')
	// 	});
	// }

	// model(params) {
		// return this.store.queryRecord('post');

		// Because we query by filter[name] we get an array back
		// and not a single item.
		// We return the first object in that array and assume that
		// there is only one.
		// The endpoint looks like this:
		// http://pfadfinderei.com/wp-json/posts?type=project&filter[name]=everything-went-black
	// }
});
