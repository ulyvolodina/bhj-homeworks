const chat = document.querySelector(".chat-widget");
const widget = document.querySelector(".chat-widget__input");
const messages = document.getElementById("chat-widget__messages");
const answers = [
	"Кто тут?",
	"Где ваша совесть?",
	"К сожалению, все операторы сейчас заняты. Не пишите нам.",
	"Вы не купили ни  одного товара для того, чтобы так с нами разговаривать!",
	"Добрый день! До свидания!",
	"Мы не будем ничего вам продавать!",
];

function timework() {
	let seconds = 30;
	clearInterval(this.set);
	const timer = function () {
		seconds -= 1;
		console.log(seconds)
		if (seconds == 0) {
			messages.innerHTML += `
			<div class="message">
			<div class="message__time">${new Date().toLocaleString()}</div>
			<div class="message__text">Здесь кто-то есть? Отзовитесь...</div>
			</div>
			`;
			messages.lastElementChild.scrollIntoView();
			clearInterval(this.set);
		}
	}
	this.set = setInterval(timer, 1000)
}


function returnAnswers() {
	for (let i = 0; i < answers.length; i++) {
		return answers[Math.floor(Math.random() * (answers.length - i))];
	}
}

widget.addEventListener("keyup", (event) => {

	if (event.key === "Enter" && event.target.value !== "") {
		timework();
		messages.innerHTML += `
		<div class="message message_client">
		<div class="message__time">${new Date().toLocaleString()}</div>
		<div class="message__text">${event.target.value}!</div>
		/div>
		<div class="message">
		<div class="message__time">${new Date().toLocaleString()}</div>
		<div class="message__text">${returnAnswers()}</div>
		</div>
	`;
    event.target.value = "";
    messages.lastElementChild.scrollIntoView();
	} else if (event.key === "Enter" && event.target.value == "") {
		alert("Вы не написали сообщение!")
	}

});
chat.addEventListener("click", () => chat.classList.add("chat-widget_active"));