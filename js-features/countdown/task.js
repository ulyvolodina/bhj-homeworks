let timer = null;
const countdown = function() {
	const cycle = document.getElementById('cycle');

	cycle.textContent = cycle.textContent - 1;

	if (cycle.textContent <= 0) {
		clearInterval(timer);
		alert('Вы победили в конкурсе!');
	}
}

timer = setInterval(countdown, 1000);