const strike = document.getElementById('kill');
const miss = document.getElementById('lose');

function reload() {
	strike.textContent = 0;
	miss.textContent = 0;
}

const getHole = index => document.getElementById('hole${index}')

for (let i=0; i<9; i++) {
	const hole = getHole(i);
	hole.onclick = function() {
		hole.className.includes('hole_has-mole') ? strike.textContent++ : miss.textContent++;

		if (strike.textContent == 10) {
			window.alert('Победа!');
			reload();
		} else if (miss.textContent == 5) {
			window.alert('Поражение!');
			reload();
		}
	}
}