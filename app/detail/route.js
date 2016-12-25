import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  // Scrolls to top
  // resetScroll: undefined
  resetScroll: 0
});

export default Ember.Route.extend({

	model(params) {
		return this.store.query('post', {
			filter: {name: params.slug, id: params.post}
		}).then(models => models.get('firstObject'));
	}

});
