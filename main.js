const navOpen = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

/**------------------------------------------------------------------------
 * *                                SHOW MENU
 *
 *
 *
 *
 *------------------------------------------------------------------------**/

if (navOpen) {
	navOpen.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/**------------------------------------------------------------------------
 * *                                REMOVE MENU MOBILE
 *
 *
 *
 *
 *------------------------------------------------------------------------**/

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((n) =>
	n.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	// devuelve los píxeles del documento actual se ha desplazado
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		// Devuelve la altura
		const sectionHeight = current.offsetHeight;
		// retorna la distancia del elemento actual respecto al borde superior
		const sectionTop = current.offsetTop - 50;
		// devuelve el valor del atributo especificado en el elemento
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
// setInterval(() => {

// 	alert(this.scrollY + 'num')
// }, 3000);
// function scrollHeader() {
// 	const scrollNav = document.getElementById('header');
// 	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
// 	if (this.scrollY >= 80) {
// 		scrollNav.classList.add('scroll-header');
// 	} else {
// 		scrollNav.classList.remove('scroll-header');
// 	}
// }
// window.addEventListener('scroll', scrollHeader);

window.addEventListener('scroll', () => {
	const scrollNav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (scrollY >= 80) {
		scrollNav.classList.add('scroll-header');
	} else {
		scrollNav.classList.remove('scroll-header');
	}
});

/**========================================================================
 *                             Dark theme
 *
 *
 *
 *
 *========================================================================**/

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun');

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

// barraaaaa

window.addEventListener('scroll', () => {
	let currentPosition = document.documentElement.scrollTop;

	const elements = {
		scrollDown: {
			// classes for scroll down, id is on the left and class is on the right
			skillHtml: 'skills__html',
			skillCss: 'skills__css',
			skillJs: 'skills__js',
			sass: 'skills__sass',
			skillsBootstrap: 'skills__bootstrap',
			skillsTailwind: 'skills__tailwind',
			skillsReact: 'skills__react',
			skillsGit: 'skills__git',
			skillsFigma:'skills__figma',
			skillsXd: 'skills__xd',
			skillsPhotoshop: 'skills__photoshop',
		},
	};
	// Object.keys => Devuelve en array
	Object.keys(elements.scrollDown).forEach((idBar) => {
		//offsetTop => retorna distancia del elemento actual respecto al borde superior
		if (document.getElementById(idBar).offsetTop - 800 < currentPosition) {
			document.getElementById(idBar).classList.add(elements.scrollDown[idBar]);
		} else {
			document.getElementById(idBar).classList.remove(elements.scrollDown[idBar]);
		}
	});
});

// skills

const skillsHeader = document.querySelectorAll('.skills__header');
const skillsContent = document.getElementsByClassName('skills__content');

skillsHeader.forEach((skill) => {
	skill.addEventListener('click', function () {
		let itemClass = this.parentNode.className;
		for (i = 0; i < skillsContent.length; i++) {
			skillsContent[i].className = 'skills__content skills__close';
		}
		if (itemClass === 'skills__content skills__close') {
			this.parentNode.className = 'skills__content skills__open';
		}
	});
});

/**----------------------------------------------
 *                SLIDER
 *  
 *  
 *  
 *  
 *---------------------------------------------**/

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
const puntito = document.querySelectorAll('.puntito');
// const img1=document.querySelector('.img1');

punto.forEach((cadaPunto, i) => {
	cadaPunto.addEventListener('click', () => {
		let posicion = i;
		// posicion es 0 transformX es 0
		// posicion es 0 transformX es -50%
		let operacion = posicion * -50;
		console.log(operacion);

		grande.style.transform = `translateX(${operacion}%)`;

		punto.forEach((cadaPunto, i) => {
			punto[i].classList.remove('activo');
			// img1.style.display = 'none';
		});
		punto[i].classList.add('activo');
	});
});

// ARROW

puntito.forEach((cadaPunto, i) => {
	cadaPunto.addEventListener('click', () => {
		let posicion = i;
		// posicion es 0 transformX es 0
		// posicion es 0 transformX es -50%
		let operacion = posicion * -50;
		console.log(operacion);

		grande.style.transform = `translateX(${operacion}%)`;

		puntito.forEach((cadaPunto, i) => {
			punto[i].classList.remove('activo');
		});
		punto[i].classList.add('activo');
	});
});