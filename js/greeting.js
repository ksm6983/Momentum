const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

// 이름 저장하기
function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

// 이름 입력 이벤트
function handleSubmit(event) {
	event.preventDefault();

	const currentValue = input.value;
	
	paintGreeting(currentValue);
	saveName(currentValue);
	showTodos();
}

// 이름 보내기
function askForName() {
	form.classList.add(SHOWING_CN);

	form.addEventListener("submit",handleSubmit);
}

// 인삿말 그리기
function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	
	greeting.innerText = `Hi! ${text}`
}

// 이름 불러오기
function loadName() {
	const currentUser = localStorage.getItem(USER_LS);

	if(currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();