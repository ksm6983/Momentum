const body = document.body;

const IMAGE_NUMBER = getRandom();

// 배경이미지 지정
function paintImage(imageNumber) {
	const image = new Image();

	body.style.backgroundImage = `url('./images/bg_img_${imageNumber}.jpg')`;
	
}

// 1 ~ 5 사이의 랜덤 숫자 얻기
function getRandom() {
	// Math.random() => 0과 1사이의 임의의 숫자
	// Math.floor() => 소숫점 버림
	const number = Math.floor(Math.random() * 5) + 1;
	
	return number;
}

function init() {
	const randomNumber = getRandom();
	
	 window.onload = function(){
		paintImage(randomNumber);
	}
}

init();