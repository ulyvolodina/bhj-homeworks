const countdown = function() {
	const timer = document.getElementById('timer');
	if (timer.textContent > 0) {
		timer.textContent = timer.textContent - 1;
	} else {
		clearInterval(count);
		alert('Вы победили в конкурсе!');
	}
}

let count = setInterval(countdown, 1000);