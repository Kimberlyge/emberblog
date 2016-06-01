import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['id'],
	id: null,

	filteredID: Ember.computed('id', 'model', function() {
		var id = this.get('id');
		var page = this.get('model');

		if (id) {
			return page.filterBy('id', id);
		} else {
			return page;
		}
	})
});
