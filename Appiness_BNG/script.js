let signs = document.querySelector('.signs'),
	path = './images/warnings/';

let signs = [
	{
		img: '1.png',
		desc:
			'Failure to thrive – not gaining weight and height as per the age norms',
	},
	{
		img: '1.png',
		desc:
			'Failure to thrive – not gaining weight and height as per the age norms',
	},
	{
		img: '1.png',
		desc:
			'Failure to thrive – not gaining weight and height as per the age norms',
	},
	{
		img: '1.png',
		desc:
			'Failure to thrive – not gaining weight and height as per the age norms',
	},
];

var accorTabs = document.getElementsByClassName('ac-head');

for (var i = 0; i < accorTabs.length; i++) {
	accorTabs[i].addEventListener('click', function () {
		var elments = document.getElementsByClassName('ac-body');

		for (var j = 0; j < elments.length; j++) {
			console.log(
				elments[j].classList.value.indexOf(this.getAttribute('id')) === -1
			);
			if (elments[j].classList.value.indexOf(this.getAttribute('id')) !== -1) {
				elments[j].classList.remove('ac-hide');
			} else {
				elments[j].classList.add('ac-hide');
			}
		}
	});
}
