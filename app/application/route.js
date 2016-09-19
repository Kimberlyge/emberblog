import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
	model(params) {
		// console.log(params);
		return this.store.query('page', {
			filter: {name: params.slug}
		}).then(models => models.get('firstObject'));
	}
});
