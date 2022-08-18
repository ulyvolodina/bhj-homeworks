const slider = Array.from(document.getElementsByClassName("slider__item"));
const previous = document.getElementsByClassName("slider__arrow_prev");
const next = document.getElementsByClassName("slider__arrow_next");
active = 0;

next[0].onclick = nextImage;

function nextImage() {
	slider[active].className = "slider__item";
	
	if (active < slider.length - 1) {
		active += 1;
	} else {
		active = 0;
	}

	slider[active].className = "slider__item slider__item_active";
}

prev[0].onclick = previousImage;

function previousImage() {
	slider[active].className = "slider__item";

	if (active > 0) {
		active -= 1;
	} else {
		active = 4;
	}

	slider[active].className = "slider__item slider__item_active";
}