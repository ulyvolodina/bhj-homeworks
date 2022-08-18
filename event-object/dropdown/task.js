const dropdown = Array.from(document.getElementsByClassName('dropdown__value'));
dropdown[0].addEventListener('click', menu);

function menu() {
	const list = Array.from(document.getElementsByClassName('dropdown__list'));
	list[0].classList.toggle('dropdown__list_active');

	const links = document.querySelectorAll('dropdown__item');

	links.forEach((link) => {
		link.onclick = function(event) {
			list[0].classList.toggle('dropdown__list_active');
			document.querySelector('.dropdown__value').textContent = event.target.innerText;
			return false;
		}
	})
}