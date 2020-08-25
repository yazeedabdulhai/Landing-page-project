/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//variables for nav bar links' ids
const sect1 = document.querySelector('#sect1');
const sect2 = document.querySelector('#sect2');
const sect3 = document.querySelector('#sect3');
const sect4 = document.querySelector('#sect4');
//variables for sections' ids

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

/*changed the old function to have more reponsivity for all devices
but meanwhile we lost the accuracy for the web as it requires that
NOT ANY part of other elements are showing so that the
active section could show, hope thats correct! */

const viewportResult = (section) => {
	const bounding = section.getBoundingClientRect();
	const myElementHeight = section.offsetHeight;
	const myElementWidth = section.offsetWidth;

    return (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight)
}

// fill navbar links dynamically 
document.addEventListener(
	/*tried adding the <a> also dynamically but the dynamic creation of <a> ids caused an error to the JS code as it depends mainly on those ids*/
        "DOMContentLoaded", () => {
        	for (let i = 1; i < 5; i++) {
        		const x = document.getElementById("sect"+i);
        		const linknode = document.createTextNode("Section"+i);
        		x.appendChild(linknode);
        		x.setAttribute('href', '#Section'+i);
        	}
        }
);

// Add class 'active' to section when near top of viewport -- LINE 93

 /* End Main Functions
 * Begin Events
 * 
*/

//Events to scroll into the view of the clicked section from the nav bar
//IMPROVED BY USING LOOPS :)

for (let i = 1; i < 5; i++) {
	const x = document.getElementById("sect"+i);
	const y = document.querySelector('#section'+i);
	x.addEventListener('click', function(){
		y.scrollIntoView();
	});
}

document.addEventListener('scroll', function(){
	//setting the active section with red and resetting the rest with black
	//IMPROVED BY USING LOOPS AGAIN:)

	if (viewportResult(section1) == true) { //USED ACTIVE CLASSES TO SET ITS COLOR

		for (let i = 1; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(i == 1)
				x.className = 'active';
			else
				x.className = 'notActive';
		}


		for (let i = 1 ; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(x.className == 'active')
				x.style.backgroundColor = 'red';
			else
				x.style.backgroundColor = 'black';
		}
	}

	else if (viewportResult(section2) == true) {

		for (let i = 1; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(i == 2)
				x.className = 'active';
			else
				x.className = 'notActive';
		}
	
		for (let i = 1 ; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(x.className == 'active')
				x.style.backgroundColor = 'red';
			else
				x.style.backgroundColor = 'black';
		}

	}

	else if (viewportResult(section3) == true) {
		for (let i = 1; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(i == 3)
				x.className = 'active';
			else
				x.className = 'notActive';
		}

		for (let i = 1 ; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(x.className == 'active')
				x.style.backgroundColor = 'red';
			else
				x.style.backgroundColor = 'black';
		}
	}

	else if (viewportResult(section4) == true) {
		for (let i = 1; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(i == 4)
				x.className = 'active';
			else
				x.className = 'notActive';
		}

		for (let i = 1 ; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			if(x.className == 'active')
				x.style.backgroundColor = 'red';
			else
				x.style.backgroundColor = 'black';
		}

	}

	else{
		for (let i = 1 ; i < 5; i++) {
			const x = document.getElementById("sect"+i);
			x.className = '';
			x.style.backgroundColor = 'black';
		}
	}
});

// Scroll to section on link click-- AUTOMATICALLY done by the scroll event as it will be in the viewport

// Set sections as active -- Done using the scroll event




















