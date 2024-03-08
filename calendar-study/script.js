

let now = new Date();
let date = new Date(2024, 2);
let month = date.getMonth();
let year = date.getFullYear();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById('monthName').innerText = monthNames[month] + ' ' + year;
let memos = JSON.parse(localStorage.getItem('memos')) || {};

function saveCurrentMemo() {
  let currentSelectedDate = document.getElementById('selectedDate').innerText;
  let currentMemoText = document.getElementById('memoText').value;
  memos[currentSelectedDate] = currentMemoText;
  localStorage.setItem('memos', JSON.stringify(memos));
  updateDays();
  setClickEventListener(); 
}

function updateDays() {
    let daysContainer = document.getElementById('days');
    daysContainer.innerHTML = '';
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    for(let i = 1; i <= firstDay; i++) {
        let emptySpot = document.createElement('div');
        emptySpot.className = 'empty';
        daysContainer.appendChild(emptySpot);
    }

    for(let i = 1; i <= daysInMonth; i++) {
        let dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.innerText = i;

        let thisDate = monthNames[month] + ' ' + i + ', ' + year;

        if(memos[thisDate]) {
            dayElement.classList.add('hasMemo');
        }

        if(now.getFullYear() === year && now.getMonth() === month && now.getDate() === i) {
            dayElement.classList.add('today');
        }

        daysContainer.appendChild(dayElement);
    }
}

function setClickEventListener() {
  let days = document.querySelectorAll("#days .day");

  for(let day of days) {
      day.addEventListener('click', function() {
          saveCurrentMemo(); 
          let selectedDay = document.querySelector('.day.selected');
          if(selectedDay) {
              selectedDay.classList.remove('selected');
          }
          day.classList.add('selected');
          let newSelectedDate = monthNames[month] + ' ' + this.innerText + ', ' + year;
          document.getElementById('selectedDate').innerText = newSelectedDate;
          document.getElementById('memoText').value = memos[newSelectedDate] || '';
          document.getElementById('memo').style.display = 'block';
      });
  }
}


updateDays();
setClickEventListener();

document.getElementById('prev').addEventListener('click', function() {
  saveCurrentMemo(); 
  month--;
  if(month < 0) {
      month = 11;
      year--;
  }
  date = new Date(year, month);
  document.getElementById('monthName').innerText = monthNames[month] + ' ' + year;
  updateDays();
  setClickEventListener();
});

document.getElementById('next').addEventListener('click', function() {
  saveCurrentMemo(); 
  month++;
  if(month > 11) {
      month = 0;
      year++;
  }
  date = new Date(year, month);
  document.getElementById('monthName').innerText = monthNames[month] + ' ' + year;
  updateDays();
  setClickEventListener(); 
});

document.getElementById('saveMemo').addEventListener('click', function() {
  saveCurrentMemo(); 
  document.getElementById('memo').style.display = 'none';
});
