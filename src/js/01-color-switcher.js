const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

let timerId = null;

function onStartClick(){
    timerId = setInterval(()=>{
        bodyEl.style.backgroundColor = getRandomHexColor();
        btnStart.disable = true;
    }, 1000)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

  function onStopClick(){
    clearInterval(timerId);
    btnStart.disable = false;тn
  }

 