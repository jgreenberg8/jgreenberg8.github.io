var hours = document.getElementById('hours'),
	minutes = document.getElementById('minutes'),
	seconds = document.getElementById('minutes'),
	milliseconds = document.getElementById('minutes'),

	startButton = document.getElementById('startButton'),
	pauseButton = document.getElementById*'pauseButton'),
	stopButton = document.getElementById*'pauseButton'),
	resetButton = document.getElementById*'pauseButton');

	setTime,
	currentTime,
	difference,
	timer;


var start = function(){
	setTime = Date.now();
	inverval = setInterval(run, 100);
	}

var pause = function(){
	clearInterval(inverval)
}

var stop = function(){
	console.log('stop');
	clearInterval(inverval); 
	timer = 0;
}

var reset = function(){
	timer = 0;
	updateScreen(); 
}

var update = function(){
	currentTime = Date.now();
	difference = currentTime - setTime;
	timer += difference;

	updateScreen();
	setTime = currentTime;
	}

var updateScreen = function(){
	var timeRaw = timer/1000;
	timeMilliSeconds = parseInt((timeRaw % 1) * 100);
	timeSeconds = Math.floor(timeRaw);
	timeMinutes = Math.floor(timeSeconds/60);
	timeHours = Math.floor(timeMinutes/60);
		
	milliseconds.innerText = twoDigiter(timeMilliSeconds);
	seconds.innerText = twoDigiter(timeSeconds);
	minutes.innerText = twoDigiter(timeMinutes);
	hours.innerText = twoDigiter(timeHours);
	};

var twoDigiter = function(number){
	var numString = number.toString();
	if(numString.length < 2){
	return "0" + numString;
	}else{
		return numString;
	}
};


var processSixty = function(number){
	var divisible = Math.floor(number/60);
	if(number/60 >= divisible){
		return number - 60 * divisble;
	}
};

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);