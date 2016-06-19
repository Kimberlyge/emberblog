import ScrollMagic from 'npm:scrollmagic';
import Ember from 'ember';

const {Component, $, on} = Ember;

export default Component.extend({
	classNames: ['NavFilter'],

	sticky: on('didRender', function() {
		// init controller
		var controller = new ScrollMagic.Controller();

		// create a scene
		new ScrollMagic.Scene({
			triggerElement: '.NavFilter--inline',
			triggerHook: 0

		})
		.setClassToggle(".js-scrollTrigger", "is-sticky")
		.addTo(controller); // assign the scene to the controller
	})


});
