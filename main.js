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

if(navOpen){

    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/**------------------------------------------------------------------------
 * *                                REMOVE MENU MOBILE
 *   
 *   
 *   
 *
 *------------------------------------------------------------------------**/

const navLink = document.querySelectorAll('.nav__link');

    navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}) )


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
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
// function scrollHeader(){
//     const nav = document.getElementById('header');
//     // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
// }
// window.addEventListener('scroll', scrollHeader);