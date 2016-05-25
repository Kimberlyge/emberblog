import DS from 'ember-data';

const {Model, attr, hasMany} = DS;

export default Model.extend({
	title: attr('string'),
	content: attr('string'),
	excerpt: attr('string'),
	slug: attr('string'),
	date: attr('date'),
	categories: hasMany('category', {async: true}),
	tags: hasMany('tag', {async: true}),
	acf: attr()
});
