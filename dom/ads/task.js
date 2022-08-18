const rotate = document.querySelectorAll('.rotator .rotator__case');

function changeText(count) {
	rotate[count].style.color = rotate[count].dataset.color;

	timer = setInterval(() => {
		rotate[count].classList.remove('rotator__case_active');

		count = count >= rotate.length - 1 ? 0 : count = count + 1;

		rotate[count].classList.add('rotator__case_active');

		clearInterval(timer);
		changeText(count);
	}, rotate[count].dataset.speed);
}

changeText(0);