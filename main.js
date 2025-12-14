// dom elem
const startBtn = document.querySelector('.start');
const timerElem = document.querySelector('.timer')

let timer = 0;
let timerInterval;

let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

startBtn.addEventListener('click', function(){
    timerInterval = setInterval(()=>{
        sec++;
        if(sec === 60){
            sec = 0;
            min++
        };
        if(min === 60){
            min = 0;
            hr++
        }
        updateTimer(timer)
    }, 1000);
});

function updateTimer(){

    timerElem.innerHTML = `${hr} : ${min} : ${sec}`;
}