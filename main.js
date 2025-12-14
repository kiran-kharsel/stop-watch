// dom elem
const timerElem = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");
const lapsElem = document.querySelector(".laps");

let timerInterval;
let milisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let laps = [];
let lapNumber = 0;
let lapTime = 0;
let totalTime = 0;

function updateTimer() {
  let hr = String(hours).padStart(2, "0");
  let min = String(minutes).padStart(2, "0");
  let sec = String(seconds).padStart(2, "0");
  let ms = String(milisec).padStart(2, "0");

  timerElem.innerHTML = `${hr} : ${min} : ${sec} : ${ms}`;
}

startBtn.addEventListener("click", function () {
  timerInterval = setInterval(() => {
    milisec++;
    if (milisec === 100) {
      milisec = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateTimer();
  }, 10);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
});

resetBtn.addEventListener("click", function () {
  milisec = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(timerInterval);
  timerElem.innerHTML = `00 : 00 : 00 : 00`;
  lapsElem.innerHTML = '';
});

lapBtn.addEventListener("click", function () {
  lapNumber++;
  let totalMilisec =
    hours * (60 * 60 * 1000) + minutes * (60 * 1000) + seconds * 1000 + milisec;
  lapTime = totalMilisec - lapTime;
  // convert times to format time
  let formattedTotalTime = formatTime(totalMilisec);
  let formattedLaptime = formatTime(lapTime);
  console.log(formattedTotalTime);
  console.log(formattedLaptime);

  // push into array
  let lapsObj = {
    lapNo: lapNumber,
    laptime: formattedLaptime,
    totaltime: formattedTotalTime,
  };

  laps = [...laps, lapsObj];

   lapsElem.innerHTML = '';

  console.log(laps[0]);

  laps.forEach((lap) => {

    let li = document.createElement("li");
    li.classList.add("lap");
    li.innerHTML = `
        <p class="lapNumber">${lap.lapNo}</p>
        <p class="laptimes">${lap.laptime.hours} : ${lap.laptime.minutes} : ${lap.laptime.seconds}</p>
        <p class="overallTime">${lap.totaltime.hours} : ${lap.totaltime.minutes} : ${lap.totaltime.seconds}</p>
        `;
    lapsElem.appendChild(li);
  });
});

function formatTime(totalTime) {
  const hours = Math.floor(totalTime / 3600000);
  const minutes = Math.floor((totalTime % 3600000) / 60000);
  const seconds = Math.floor((totalTime % 60000) / 1000);
  const milliseconds = totalTime % 1000;

  return { hours, minutes, seconds, milliseconds };
}
