import Ember from 'ember';

const {run} = Ember;

export default Ember.Controller.extend({
	actions: {

	}

	// queryParams: ['category'],
	// category: 'featured',

	// // get all, unique categories for our menu
	// categories: Ember.computed('model.@each.categories', function() {
	// 	return this.get('model').mapBy('categories.firstObject').uniq();
	// }),
	// // this either returns all or a filtered subset of projects
	// filteredProjects: Ember.computed('category', 'model.[]', function() {
	// 	let categoryFilter = this.get('category');
	// 	let projects = this.get('model');

	// 	// without a filter, return all projects
	// 	if (categoryFilter === 'all') {
	// 		return projects;
	// 	}

	// 	// custom featured filter
	// 	if (!categoryFilter || categoryFilter === 'featured') {
	// 		return projects.filterBy('meta.isFeatured');
	// 	}

	// 	return projects.filter((project) => {
	// 		let categories = project.get('categories');

	// 		// undefined = no item in array so false
	// 		if (!categories) {
	// 				Ember.debug('no categories?');
	// 				return false;
	// 		}

	// 		// loop in the project.category[] in order to find the category FilteredBy
	// 		return categories.any((category) => {

	// 			// if there is any in the category we look for in the array, set weHaveMatch to true
	// 			return category.get('slug') === categoryFilter;
	// 		});
	// 	});
	// })
});
