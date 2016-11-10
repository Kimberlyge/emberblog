import Ember from 'ember';

const {Component, $} = Ember;

export default Component.extend({
	classNames: ['scrollTo'],

	// didInsertElement() {
	// 	$("a").on('click', function(event) {

	//     if (this.hash !== "") {
	//       event.preventDefault();

	//       var hash = this.hash;
	//       $('html, body').animate({
	//         scrollTop: $(hash).offset().top
	//       }, 800, function(){

	//         window.location.hash = hash;
	//       });
	//     } // End if
	//   });
	// }

	click(event) {
		event.preventDefault();


		var elementHash = event.target.hash;

		// var elementHash = event.target.hash.replace(/\s/g, '');

		console.log(elementHash);

		this.scrollTo(elementHash);

		// $('html, body').animate(window.location.hash, {
		// 	// console.log('aniamte');
		// 	scrollTop: $(elementHash).offset().top - 1000
		// }, 500);

	},

	scrollTo(elementHash) {

		console.log($(elementHash).offset());

		// var scrollTop = $(elementHash).offset().top - 1000;

		// window.location.hash = elementHash;

		$('html, body').animate({
			scrollTop: $(elementHash).offset().top
		}, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = elementHash;
		});

	}

});
