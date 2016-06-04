import Ember from 'ember';

const {Component, inject, on, $} = Ember;

export default Component.extend({
	layout: inject.service(),
	classNames: ['Header'],

	detail: on('didInsertElement', function() {
		// $('.Nav').sticky(); @todo: not working for some reason
		this.actions();
	}),

	// open subNav
	open(event) {
		const target = $(event.currentTarget);
		const nav = target.find($('.NavSub'));

		nav.removeClass('is-hidden');

		target.on('mouseleave', event => this.close(event));
	},

	// close subNav Dropdown
	close(event) {
		event.preventDefault();

		const dropdown = $('.NavSub');

		$(dropdown).addClass('is-hidden');
	},

	// hide menu overlay on nav-item click
	mobileNav() {
		var headerMobile = $('.Header');

		if (headerMobile.hasClass('on-mobile')) {
			headerMobile.removeClass('on-mobile');
		}
	},

	actions() {
		// get events data attribute and check if another elemnt has the same
		// $('.Nav a').on('mouseenter', function(event) {
		// 	var target = $(event.currentTarget);
		// 	var targetVal = target.attr('data-target');
		// 	var targetParent = target.parents('.Nav');
		// 	var targetSub = targetParent.find('.NavSub-content');
		// 	console.log(targetSub);
		// 	if (targetSub.attr('data-target') === targetVal) {
		// 		console.log('SAME SAME');
		// 	}
		// })

		// add subnav
		this.$subNav = $('.js-navToggleRecipes, .js-navToggleTravel');
		this.$subNav.on('mouseenter', event => this.open(event));

		$('.Nav a').on('click', event => this.mobileNav(event));
	}
});
