const clockContainer = document.querySelector(".js-clock");

const clockTitle = clockContainer.querySelector(".js-title");
const clockHours = clockTitle.querySelector(".hour");
const clockMinutes = clockTitle.querySelector(".minutes");
const clockSeconds = clockTitle.querySelector(".seconds");

const dateTitle = clockContainer.querySelector(".js-date-title");
const dateYear = dateTitle.querySelector(".year");
const dateMonth = dateTitle.querySelector(".month");
const dateDay = dateTitle.querySelector(".day");
const dateDayOfWeeks = dateTitle.querySelector(".day-of-weeks");

function getCurrentDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const dayOfWeeksNum = date.getDay();
	const DAY_OF_WEEKS = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];

	dateYear.innerText = year;
	dateMonth.innerText = month;
	dateDay.innerText = day;
	dateDayOfWeeks.innerText = DAY_OF_WEEKS[dayOfWeeksNum];
}

function getCurrentTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	clockHours.innerText = hours;
	clockMinutes.innerText = minutes;
	clockSeconds.innerText = seconds;
}

function clock() {
	getCurrentTime();
	getCurrentDate();

	setInterval(getCurrentTime, 1000);
}

function init() {
	clock();
}

init();