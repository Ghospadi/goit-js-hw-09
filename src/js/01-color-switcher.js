const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let color;
let timer;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onColorChange = () => {
  color = getRandomHexColor();
  body.style.backgroundColor = color;
};

const startTimer = () => {
  timer = setInterval(onColorChange, 750);
  startButton.disabled = true;
};

const stopTimer = () => {
  clearInterval(timer);
  startButton.disabled = false;
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);