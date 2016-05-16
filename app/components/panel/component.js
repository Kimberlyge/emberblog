import Ember from 'ember';

export default Ember.Component.extend({
	// layout: inject.service(),
	classNames: 'SideNav',
	classNameBindings: ['isShown'],

	// Close panel, if open, when a link inside is clicked.
	click(event) {
		const clickedElementHasAnHref = event.target.href;
		if (clickedElementHasAnHref && this.get('isShown')) {
			this.send('toggle');
		}
	},

	actions: {
		toggle() {
			this.toggleProperty('isShown');
		}
	}
});
