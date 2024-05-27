let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;
let timeRef = document.querySelector(".timer-display");

document.getElementById("start-timer").addEventListener("click", () => {
  if (intervalId!== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(displayTimer, 1); // changed to 1 millisecond
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
});

document.getElementById("stop-timer").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

function displayTimer() {
  milliseconds += 1; // changed to 1
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10? "0" + hours : hours;
  let m = minutes < 10? "0" + minutes : minutes;
  let s = seconds < 10? "0" + seconds : seconds;
  let ms = milliseconds.toString().padStart(3, "0"); // changed to padStart
  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
  return; // added return statement
}
