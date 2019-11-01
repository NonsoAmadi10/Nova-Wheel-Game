let button = document.getElementById("hit");
let spinner = document.getElementById("example22");
const audio = document.querySelector(`audio[data-key="65"]`);
let angle = 1;
let cAngle;
let timer;
let limit;

const spin = () => {
  if (angle < limit) {
    cAngle = angle % 360;
    spinner.style.transform = `rotate(${cAngle}deg)`;
  } else {
    angle = 1;
  }

  angle += 30;
};

const checker = () => {
  if (angle < limit) {
    audio.play();
    spin();
  } else {
    angle = 1;
    button.disabled = false;
    clearInterval(timer);
  }
};

button.addEventListener("click", function() {
  limit = Math.floor(Math.random() * 700) + 30;
  button.disabled = true;
  timer = setInterval(checker, 50);
});
