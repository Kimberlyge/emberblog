import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['category', 'tag'],
	category: null,
	tag: null,

	filteredCategories: Ember.computed('category', 'model', function() {
		var category = this.get('category');
		var posts = this.get('model');

		if (category) {
			return posts.filterBy('category', category);
		} else {
			return posts;
		}
	}),

	filteredTags: Ember.computed('tag', 'model', function() {
		var tag = this.get('tag');
		var posts = this.get('model');

		if (tag) {
			return posts.filterBy('tag', tag);
		} else {
			return posts;
		}
	})
});
