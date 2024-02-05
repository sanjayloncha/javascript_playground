let timerValue = document.getElementById("timerValue");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let value = 0;
timerValue.innerText = value;

let timerId;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        value++;
        timerValue.innerText = value;
    }, 1000)
})

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
})