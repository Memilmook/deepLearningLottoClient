const MODEL_URL = '/model/model.json'; //모델링 주소
let result; //모델에서 예측된 결과가 저장될곳
let numbers = new Array(); //결과값이 저장되는 곳
var lottoNumer = [];
var luckyNumber = [];
//10 x 6 배열을 생성
//ES6에서 10x6 배열을 생성하는 방법
var intervalEvent = Array.from(Array(10), () => new Array(6).fill(0));
var stopTime = Array.from(Array(10), () => new Array(6).fill(0));

var color = ["#fbc400", "#69c8f2", "#ff7272", "#aaa", "#b0d840", "#aaa"];

$( document ).ready(function() {
	var canvas = document.getElementById("lotto");
	canvas.width = 450;
	canvas.height = 705;
	var circle = canvas.getContext("2d");
	for(let i=0; i<10; i++) { //10개의 기본 로또구를 만든다.
		makeLottoCircleDefault(i);
	}

	function makeLottoCircleDefault(line) {
		for (var i=0; i<6; i++) {
		circle.beginPath();
		circle.fillStyle = color[i];
		circle.arc(35+(i*70), 40+(line*70), 30, 0, 2*Math.PI, true);
		circle.fill();
		circle.strokeStyle = "#000000";
		circle.stroke();
		circle.fillStyle = "#ffffff";
		circle.font="bold 21pt sans-serif";
		circle.fillText("?", 29+(i*70), 50+(line*70));
		}
	}
	//각 위치에 맞게 로또번호를 만들어주는 함수
	function settingLottoBall(ball, number, line) {
		var balllColor = "";
		if (number <= 10) balllColor = color[0];
		else if (number <= 20) balllColor = color[1];
		else if (number <= 30) balllColor = color[2];
		else if (number <= 40) balllColor = color[3];
		else balllColor = color[4];

		var x = (number<10)?(27+(ball*70)):(18+(ball*70));
		circle.beginPath();
		circle.fillStyle = balllColor;
		circle.arc(35+(ball*70), 40+(line*70), 30, 0, 2*Math.PI, true);
		circle.fill();
		circle.strokeStyle = "#000000";
		circle.stroke();
		circle.closePath();
		circle.fillStyle = "#ffffff";
		circle.font="bold 22pt sans-serif";
		circle.fillText(number, x, 50+(line*70));
	}
	//로또번호 생성을 실행한다.
	function luckyNumGen() {
		document.getElementById("btnNumGen").setAttribute("disabled", "disalbed");
		document.getElementById("btnNumGen").innerText = "생성 중"
		$('.js-layer').removeClass('hidden');
		numbers = new Array();
		tf.loadLayersModel(MODEL_URL, false).then(model => {
			lastWinNumber = [17, 25, 33, 35, 38, 45] //직전회차의 당첨번호(1002회)
			let ohbin = numbers2Ohbin(lastWinNumber); //당첨번호를 ont hot binary로 변환
			const xs = tf.tensor3d(ohbin, [1,1,45]); //tensor3d [1,1,45] 모델로 생성
			result = model.predict(xs); // 다음회차에 대한 예상결과값을 불러온다
			for(i in new Array(10).fill(1)) { //10회 반복해서 결과값을 꺼내온다.
				numbers.push(getNumbers(result.arraySync()[0]));
			}
			numbers.sort();
			let numbersTxt = '';
			$('.js-layer').addClass('hidden');
			for(let i in numbers) {
				numbersTxt += (parseInt(i)+1)+'번 : '+numbers[i] + '\n';
			}
			//document.getElementById("lottoTxt").textContent  = numbersTxt;
			//displayNumberList(numbers);
			luckyNumber = numbers;
			for(let i in luckyNumber) {
				makeLottoNumbers(i, numbersTxt);
			}
		});
	}
	//캔버스의 각 라인에 맞춰서 로또번호 생성을 시작
	function makeLottoNumbers(line, numbersTxt) {
		for(let i in intervalEvent[line]) { //랜덤한 인터벌 효과를 주기위함. 6번 반복
			intervalEvent[line][i] = setInterval(function(){changeLottoBall(i, line, numbersTxt)}, 50);
		}
	}
	function changeLottoBall(num, line, numbersTxt) {
		var randomNum = Math.floor(Math.random()*45)+1;
		settingLottoBall(parseInt(num), randomNum, parseInt(line));
		if (stopTime[line][num] >= 20+5*num*line ) {
			settingLottoBall(num, luckyNumber[line][num], line);
			clearInterval(intervalEvent[line][num]); 
			stopTime[line][num]=0;
			if(num == 5 && line == 9) { //마지막까지 생성이 끝나면 다시 사용할수 있게 한다.
				document.getElementById("btnNumGen").removeAttribute("disabled");
				document.getElementById("btnNumGen").innerText = "다시 받기";
				document.getElementById("lottoTxt").textContent  = numbersTxt;
			}
		}
		stopTime[line][num]++;
	
	}
	//버튼에 onClick 리스너 선언
	//document.getElementById('btnNumGen').addEventListener('click', luckyNumGen);
	$('#btnNumGen').on('click', luckyNumGen);
	$('#btnCopy').on('click', copy_to_clipboard);
	$('#btnContent').on('click', showLogicContent);
})
function showLogicContent() {
	alert('1회차에서 마지막회차까지 학습한 딥러닝 모델 사용');
}
function getNumbers(numsProb) {
	let ballBox = [];
	let ball_count, ball;
	
	//한번 루프 돌면서
	for(let i in numsProb) {
		ballCount = parseInt(numsProb[i] * 100 + 1);
		ballBox.push(ballCount);
	}
	let max = 0;
	//let maxIndexList = findMaxTenValue(ballBox);
	let maxIndexList = findMaxValue(ballBox);
	let selected_ball = new Array();
	while(1) {
		if(selected_ball.length == 6) break;
		ball_index = Math.floor(Math.random() * maxIndexList.length);
		let ball = maxIndexList[ball_index];
		if(!selected_ball.includes(ball) && ball !=0) {
			selected_ball.push(ball);
		}
	}
	
	//오름차순 정렬
	selected_ball.sort((a,b) => {
		return a-b;
	});
	
	return selected_ball;
}
//1번 로직과는 전혀다른 로직
function getNumbers2(numsProb) {
	let ballBox = [];
	let ball_count, ball;
	
	for(let i=0;i<45;i++) {
		ballCount = parseInt(numsProb[i] * 100 + 1);
		let ball = new Array(ball_count).fill(i+1);
		ballBox.push(ball);
	}
	for(let i in ballBox) {
		if(i == 0) {
			tempResult = new Array().concat(ball_box[i]);
		} else {
			tempResult = new Array().concat(tempResult, ballBox[i]); 
		}
	}
	let selectedBall = new Array();
	while(1) {
		if(selectedBall.length == 6) break;
		ballIndex = Math.floor(Math.random() * tempResult.length);
		let ball = tempResult[ballIndex];
		if(!selectedBall.includes(ball) && ball != 0) {
			selectedBall.push(ball);
		}
	}
	//오름차순 정렬
	selected_ball.sort((a,b) => {
		return a-b;
	});
	
	return selected_ball;
}
function numbers2Ohbin(value) {
	let ohbin = new Array(45).fill(0);
	for(let i in value) {
		ohbin[value[i]-1] = 1;
	}
	return ohbin;
}


function ohbin2Numbers(value) {
	numbers = new Array();
	for(let i in value) {
		if(value[i] == 1) {
			numbers.push(parseInt(i)+1);
		}
	}
	return numbers;
}

function displayNumberList(numberList) {
	for(let i in numberList) {
		console.log(`${parseInt(i)+1}번째 당첨번호 : ${numberList[i]}`);
	}
}

function findMaxValue(ballBox) {
	let indexList = [];
	for(let i in ballBox) {
		if(ballBox[i] != 1) {
			indexList.push(i); 
		}
	}
	indexList.splice(0, 1);
	return indexList;
}

function findMaxTenValue(ballBox) {
	let maxIndexList = [];
	let max;
	let maxIndex;
	while(1) {
		if(maxIndexList.length == 15) {
			break;
		}
		for(let i in ballBox) {
			if(max < ballBox[i]) {
				max = ballBox[i];
				maxIndex = i;
			}
		}
		maxIndexList.push(maxIndex);
		ballBox.splice(maxIndex, 1);
		maxIndex = 0;
		max = 0;
	}
	maxIndexList.splice(0, 1);
	return maxIndexList;
}
function copy_to_clipboard() {    
	var copyText = document.getElementById('lottoTxt');
	var copyBtn = document.getElementById('btnCopy');
	navigator.clipboard.writeText(copyText.textContent);
	if(copyBtn.textContent !== '복사됨!') {
		const origianlText = copyBtn.textContent;
		copyBtn.textContent = '복사됨!';
		setTimeout( () => {
			copyBtn.textContent = origianlText;
		}, 1000);
	} 
  }

