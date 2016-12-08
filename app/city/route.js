import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  // Scrolls to top
  // resetScroll: undefined
  resetScroll: 0
});

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
