import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  // Scrolls to top
  // resetScroll: undefined
  resetScroll: 0
});

export default Ember.Route.extend({
	model() {
		// return this.store.find('page');
		return this.store.findRecord('page', 90);
	}
});
