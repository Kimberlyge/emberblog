export default function () {
	// Set velocity.js defaults
	this.setDefault({
		duration: 450,
		easing: [0.860, 0.000, 0.070, 1.000]
	});

	this.transition(
		this.toRoute('detail'),
		this.use('toLeft'),
		this.reverse('toRight')
	);
	// // Animate the title in the header-bar
	// this.transition(
	// 	this.matchSelector('.TitleFade'),
	// 	this.use('explode', {
	// 		pickOld: '.TitleFade-inner',
	// 		use: ['fade', {duration: 50}]
	// 	}, {
	// 		pickNew: '.TitleFade-inner',
	// 		use: ['fade', {duration: 300, delay: 50}]
	// 	})
	// );

	// // between city.bar models
	// // this.transition(
	// // 	this.matchSelector('.BarAnimation'),
	// // 	this.media('(max-width: 969px)'),
	// // 	this.use('toLeft')
	// // 	// compare them by id and only run this animation if we're moving to
	// // 	// a value with a higher id.
	// // 	// this.toValue(function (toValue, fromValue) {
	// // 	// 	console.log('to: ' + toValue.get('id'));
	// // 	// 	console.log('from: ' + fromValue.get('id'));
	// // 	// 	return toValue && fromValue && toValue.get('id') > fromValue.get('id');
	// // 	// }),
	// // 	// this.use('toLeft')
	// // );

	// // between city.bar models
	// this.transition(
	// 	this.matchSelector('.BarAnimation'),
	// 	this.use('explode', {
	// 		pick: '.Bar-gallery .FlickityGallery',
	// 		use: ['fade', {duration: 300}]
	// 	})
	// );

	// // between city.bar models
	// this.transition(
	// 	this.matchSelector('.BarAnimation'),
	// 	this.media('(min-width: 970px)'),
	// 	this.use('explode', {
	// 		pick: '.Bar-text',
	// 		use: ['toDown']
	// 	})
	// );
}
