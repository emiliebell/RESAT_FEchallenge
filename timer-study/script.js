let intervalId = null;

const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minute');
const secondInput = document.getElementById('second');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const displayDiv = document.getElementById('display');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);



function startTimer() {
  if (intervalId) return;
  hourInput.style.display = 'none';
  minuteInput.style.display = 'none';
  secondInput.style.display = 'none';
  displayDiv.style.display = 'block'; 
  

  intervalId = setInterval(() => {
    let hour = parseInt(hourInput.value) || 0;
    let minute = parseInt(minuteInput.value) || 0;
    let second = parseInt(secondInput.value) || 0;

    if (second > 0) {
      second--;
    } else if (minute > 0) {
      minute--;
      second = 59;
    } else if (hour > 0) {
      hour--;
      minute = 59;
      second = 59;
    }

    hourInput.value = hour;
    minuteInput.value = minute;
    secondInput.value = second;
    displayDiv.innerText = `${hour}시간 ${minute}분 ${second}초`;

    if (hour === 0 && minute === 0 && second === 0) {
      clearInterval(intervalId);
      intervalId = null;
      hourInput.style.display = 'block';
      minuteInput.style.display = 'block';
      secondInput.style.display = 'block';
      displayDiv.style.display = 'none';
      displayDiv.innerText = "타이머 종료!";
    }
  }, 1000);
}

function stopTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  
    hourInput.style.display = 'block';
    minuteInput.style.display = 'block';
    secondInput.style.display = 'block';
    displayDiv.style.display = 'none';
  }

  function resetTimer() {
    hourInput.value = '';
    minuteInput.value = '';
    secondInput.value = '';
  
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  
    hourInput.style.display = 'block';
    minuteInput.style.display = 'block';
    secondInput.style.display = 'block';
    displayDiv.style.display = 'none';
  }
