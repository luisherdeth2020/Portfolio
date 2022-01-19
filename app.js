// button responsive (hamburger)

const burger = document.getElementById('hamburger');
const liright = document.getElementById('nav_hamburger');

burger.addEventListener('click', () => {
	liright.classList.toggle('show');
});

//Get the button
var mybutton = document.getElementById('btop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// Animations

window.addEventListener('scroll', () => {
	let currentPosition = document.documentElement.scrollTop;

	const elements = {
		scrollDown: {
			// classes for scroll down, id is on the left and class is on the right
			mainImage: 'left-to-right-main',
			leftImage: 'left-to-right',
			centerImage: 'down-to-up',
			rightImage: 'rigth-to-down',
			rightImage2: 'rigth-to-down',
		},
		scrollUp: {
			// classes for scroll up
			mainImage: 'right-to-left-main',
			leftImage: 'right-to-left',
			centerImage: 'up-to-down',
			rightImage: 'left-to-right',
			rightImage2: 'left-to-right',
		},
	};

	Object.keys(elements.scrollDown).forEach(($element, $index, $array) => {
		console.log(currentPosition);

		if (document.getElementById($element).offsetTop - 600 < currentPosition) {
			console.log(currentPosition);
			console.log($element);

			document.getElementById($element).classList.add(elements.scrollDown[$element]);
			document.getElementById($element).classList.remove(elements.scrollUp[$element]);
		} else {
			document.getElementById($element).classList.add(elements.scrollUp[$element]);
			document.getElementById($element).classList.remove(elements.scrollDown[$element]);
		}
	});
});
