const items = Array.from(document.getElementsByClassName("menu__item"));
const subs = Array.from(document.querySelectorAll("ul.menu_sub"));

function closeMenu(menu) {
	menu.classList.remove("menu_active");
}

for (let item of items) {
	const subMenu = item.querySelector("ul.menu_sub");
	const menuLink = item.querySelector("a.menu__link")
	menuLink.onclick = () => {
		if (subMenu) {
			if (subMenu.classList.contains("menu_active")) {
			closeMenu(subMenu);
		} else {
			for (menuSubChild of subs) {
				closeMenu(menuSubChild);
			}
			subMenu.classList.add("menu_active");
		}
		return false;
		}
	}
}
