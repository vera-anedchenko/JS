var slider = document.querySelector('.slider');
var slidesWrapper = document.querySelector('.slides');

var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

var slides = document.getElementsByClassName('slide');
var slidesCount = slides.length;

var slideWidth = slider.clientWidth;



[].forEach.call(slides, function(slide) {
	slide.style.width = slideWidth + 'px';
})

slidesWrapper.style.width = (slidesCount * slideWidth + 'px');

var currentImg = 0;

var controlsParent = document.querySelector('.controls');
var controls = [];

for ( i = 0; i < slidesCount; i++ ) {
	var control = document.createElement('span');
	control.onclick = slideTo;
	control.className = 'slide-' + i;
	controlsParent.appendChild(control);
	controls.push(control);
}

controls[currentImg].classList.add('is-active');

function slideTo() {
	var slideNumTo = this.classList[0].split('-')[1];
	var margin = slideWidth * slideNumTo;
	controls[currentImg].classList.remove('is-active');
	currentImg = slideNumTo;
	controls[currentImg].classList.add('is-active');
	slidesWrapper.style.marginLeft = -margin + 'px';
}

arrowLeft.onclick = slideLeft;
arrowRight.onclick = slideRight;

function slideLeft() {
	controls[currentImg].classList.remove('is-active');
	if( currentImg == 0 ) {
		currentImg = slidesCount - 1;
	} else {
		currentImg--;
	}
	slidesWrapper.style.marginLeft = -(currentImg * slideWidth) + 'px';
	console.log(currentImg);
	controls[currentImg].classList.add('is-active');
}

function slideRight() {
	controls[currentImg].classList.remove('is-active');
	if( currentImg == (slidesCount - 1)) {
		currentImg = 0;
	} else {
		currentImg++;
	}
	slidesWrapper.style.marginLeft = -(currentImg * slideWidth) + 'px';
	console.log(currentImg);
	controls[currentImg].classList.add('is-active');
}

var interval = setInterval(slideRight, 3000);

slider.onmouseover = function() {
	clearInterval(interval);
	arrowLeft.style.opacity = 1;
	arrowRight.style.opacity = 1;
}

slider.onmouseout = function() {
	interval = setInterval(slideRight, 3000);
	arrowLeft.style.opacity = 0;
	arrowRight.style.opacity = 0;
}



