const image = document.getElementById('cookie');
let click = 0;

function clicker() {
	click = click + 1;
	document.getElementById('clicker__counter').innerHTML = click;

	if (click % 2 == 0) {
		image.width = 300;
	}
	else {
		image.width = 200;
	}
}

document.getElementById('cookie').onclick = function() {
	clicker();
}