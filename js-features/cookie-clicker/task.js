const image = document.getElementById('cookie');
let click = 0;

function clicker() {
	click = click + 1;
	document.getElementById('clicker__counter').innerHTML = click;

	image.width = click % 2 == 0 ? 300 : 200;
}

document.getElementById('cookie').onclick = function() {
	clicker();
}