import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		console.log(params);
		return this.store.query('post', {
			filter: {name: params.slug}
		}).then(models => models.get('firstObject'));
	},

	afterModel() {
		console.log('uuu');
		var coverImg = $(document).find('.Detail');

		console.log(coverImg);

	}
});
