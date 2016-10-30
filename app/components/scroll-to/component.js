import Ember from 'ember';

const {Component, on, $} = Ember;

export default Component.extend({
	classNames: ['scrollTo'],

	click(event) {
		event.preventDefault();


		var elementHash = event.target.hash;

		// var elementHash = event.target.hash.replace(/\s/g, '');

		console.log(elementHash);

		this.scrollTo(elementHash);

	},

	scrollTo(elementHash) {

		console.log($(elementHash).offset());

		var scrollTop = $(elementHash).offset().top - 1000;

		window.location.hash = elementHash;

	}

});
