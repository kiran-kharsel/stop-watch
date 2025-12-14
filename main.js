// dom elem
const startBtn = document.querySelector('.start');
const timerElem = document.querySelector('.timer')

let timer = 0;
let timerInterval;

let milisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

startBtn.addEventListener('click', function(){
    timerInterval = setInterval(()=>{
        milisec++;
        if(milisec === 100){
            milisec = 0;
            seconds++;
        };
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
        if(minutes === 60){
            minutes = 0;
            hours++
        }

        updateTimer(timer)
    }, 10);
});

function updateTimer(){
    let hr = String(hours).padStart(2, '0');
    let min = String(minutes).padStart(2, '0');
    let sec = String(seconds).padStart(2, '0');
    let ms = String(milisec).padStart(2, '0');

    timerElem.innerHTML = `${hr} : ${min} : ${sec} : ${ms}`;
}