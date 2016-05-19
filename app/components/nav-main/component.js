import Ember from 'ember';

const {Component, inject, on, $} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNames: ['Header'],

	detail: on('didInsertElement', function() {
		// $('.Nav').sticky();
		this.actions();
	}),

	// open subNav
	open(event) {
		console.log('open');
		event.preventDefault();

		const dropdown = $('.Nav--sub');

		$(dropdown).removeClass('is-hidden');

		$('.Nav--sub').on('mouseleave', event => this.close(event));
	},

	// close subNav Dropdown
	close(event) {
		console.log('close');
		event.preventDefault();

		const dropdown = $('.Nav--sub');

		$(dropdown).addClass('is-hidden');
	},

	actions() {
		this.$subNav = $('.js-openSub');

		$('.Nav a').on('click', function() {
			console.log('clicked');
		})

		this.$subNav.on('mouseenter', event => this.open(event));
	},

	click(event) {
		const clickedElementHasAnHref = $(this);
		// console.log(clickedElementHasAnHref);
		// console.log(event);

		// if (clickedElementHasAnHref && this.get('layout.showAside')) {
		// 	this.get('layout').perhapsCloseAside();
		// }
	}
});
