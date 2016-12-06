import Ember from 'ember';

export default Ember.Route.extend({
	layout: Ember.inject.service(),

	activate() {
		this.set('layout.onTravelSingle', true);
	},
	deactivate() {
		this.set('layout.onTravelSingle', false);
	},

 	model(params) {
		console.log(params);

		// return this.store.query('page', {
		// 	filter: {name: params.slug}
		// }).then(models => models.get('firstObject'));

		return this.store.query('page', {
			filter: {
				name: params.slug
			}
		}).then(models => models.get('firstObject'));
	}
});
