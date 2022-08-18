const reveal = document.querySelectorAll('.reveal');
const height = window.innerHeight;

reveal.forEach((item) => {
	document.addEventListener('scroll', () => {
		if ((item.getBoundingClientRect().top + item.getBoundingClientRect().height > 0) && item.getBoundingClientRect().top < height) {
			item.classList.add('reveal_active');
		} else {
			item.classList.remove('reveal_active');
		}
	});
})

