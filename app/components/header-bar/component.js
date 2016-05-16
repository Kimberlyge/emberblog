import Ember from 'ember';

const {$, Component, on} = Ember;

export default Component.extend({
	detail: on('afterRender', function() {
		$('.Nav').sticky();
	}),

	actions: {
		// $('.burger').on('click', function() {
		// 	$('.Nav').toggleClass('is-active');
		// 	console.log('YEEESSS');
		// });
	}
});
