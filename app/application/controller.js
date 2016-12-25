import Ember from 'ember';

const {inject, on} = Ember;

export default Ember.Controller.extend({
	layout: inject.service()
});
