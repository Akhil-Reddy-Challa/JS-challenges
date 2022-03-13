const doc = document;
let timer;
const minutes = doc.querySelector(".minutes").children[0];
const seconds = doc.querySelector(".seconds").children[0];

doc.querySelector(".start").addEventListener("click", function () {
  const btnType = this.textContent;
  if (btnType === "start") {
    minutes.disabled = true;
    seconds.disabled = true;
    startTimer(parseInt(minutes.value), parseInt(seconds.value));
    this.textContent = "pause";
  } else {
    clearInterval(timer);
    this.textContent = "start";
  }
});

function startTimer(mins, secs) {
  timer = setInterval(() => {
    if (mins === 0 && secs === 0) {
      clearInterval(timer);
      timerUp();
      return;
    }
    if (secs === 0) {
      mins--;
      secs = 59;
    } else secs--;
    printTime(mins, secs);
  }, 1000);
}

function printTime(mins, secs) {
  if (mins < 10) minutes.value = "0" + mins;
  else minutes.value = mins;
  if (secs < 10) seconds.value = "0" + secs;
  else seconds.value = secs;
}

function timerUp() {
  document.querySelector(".ring").classList.add("ending");
  setTimeout(alert("Time is up!"), 1000);
}

doc.querySelector(".settings").addEventListener("click", function () {
  minutes.disabled = false;
  seconds.disabled = false;
});
