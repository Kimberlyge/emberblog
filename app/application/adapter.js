import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://dev-vunchies.pantheonsite.io',
	namespace: 'wp-json/wp/v2'
});
