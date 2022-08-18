const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const closeButton = document.querySelectorAll('.modal__close');
closeButton[0].onclick = () => modalMain.classList.remove('modal_active');

const modalSuccess = document.getElementById('modal_success');
const successButton = document.querySelector('.show-success');
successButton.onclick = () => {
	modalSuccess.classList.add('modal_active');
	modalMain.classList.remove('modal_active');
}

closeButton[2].onclick = () => modalSuccess.classList.remove('modal_active');