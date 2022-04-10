const bodyElement = document.body
const startButtonElement = document.querySelector('[data-start]')
const stopButtonElement = document.querySelector('[data-stop]')
let timerId = null;


startButtonElement.addEventListener("click", onStart)
stopButtonElement.addEventListener("click", onStop)

function onStart() {
    timerId = setInterval(()=>{bodyElement.style.backgroundColor = getRandomHexColor()}, 1000);

    startButtonElement.disabled = true;
    stopButtonElement.disabled = false;
}

function onStop() {
    clearInterval(timerId);
    
    startButtonElement.disabled = false;
    stopButtonElement.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }