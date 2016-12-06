export default function () {
	// Set velocity.js defaults
	this.setDefault({
		duration: 450,
		easing: [0.860, 0.000, 0.070, 1.000]
	});

	this.transition(
		this.toRoute(['detail']),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('detail'),
		this.toRoute('index'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.toRoute('travel'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('travel'),
		this.toRoute('city'),
		this.use('toLeft'),
		this.reverse('toRight')
	);
}
