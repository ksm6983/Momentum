const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = 'fc428746d3eabf8d0762039b1ee5b6f1';

// 날씨 가져오기
function getWeather(latitude, longitude) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
	).then(function(response) {
		return response.json();
	}).then(function(json) {
		console.log(json);

		const temperature = json.main.temp;
		const place = json.name;

		weather.innerText = `${temperature}℃ / ${place}`;
	});
}

// 좌표 저장
function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표 불러오기 성공
function handleGeoSuccess(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	console.log(coordsObj);
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

// 좌표 불러오기 실패
function handleGeoError() {
	console.log("Can't access geo location");
}

// 좌표 물어보기
function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// 위치 불러오기
function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);

	if(loadedCoords === null) {
		askForCoords();
	} else {
		const parseCoords = JSON.parse(loadedCoords);

		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();