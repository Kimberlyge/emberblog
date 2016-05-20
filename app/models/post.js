import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
	title: attr('string'),
	content: attr('string'),
	excerpt: attr('string'),
	slug: attr('string'),
	date: attr('date'),
	featured_media: attr('number'),
	better_featured_image: attr(),
	format: attr(),
	categories: attr('string'),
	tags: attr('string'),
	acf: attr()
});
