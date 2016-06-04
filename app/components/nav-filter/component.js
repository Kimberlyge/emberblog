// import Stickyjs from 'npm:flickity';
import Ember from 'ember';

const {Component, $, on} = Ember;

export default Component.extend({
	classNames: ['NavFilter'],

	sticky: on('didRender', function() {
		// $('.Nav').sticky(); @todo: not working for some reason
		this.stick();
		// console.log('yess');
	}),

	stick() {
		// $(document).ready(function(){
		// 	$(".NavFilter--left").sticky({topSpacing:0});
		// });

		// $('.NavFilter--left').sticky();

	}
});
