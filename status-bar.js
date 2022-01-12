// Time in status-bar

const time = document.querySelector(".clock");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 60000);

// Battery in status-bar

const percent = document.querySelector(".battery-percent");
let battery = Math.floor(Math.random() * 100) + 1;

const empty = document.querySelector(".fa-battery-empty");
const quarter = document.querySelector(".fa-battery-quarter");
const half = document.querySelector(".fa-battery-half");
const threeQuarters = document.querySelector(".fa-battery-three-quarters");
const full = document.querySelector(".fa-battery-full");

percent.innerText = `${battery}\%`;

if (battery > 75) {
  full.classList.remove("hidden");
  threeQuarters.classList.add("hidden");
  half.classList.add("hidden");
  quarter.classList.add("hidden");
  empty.classList.add("hidden");
} else if (battery > 50) {
  full.classList.add("hidden");
  threeQuarters.classList.remove("hidden");
  half.classList.add("hidden");
  quarter.classList.add("hidden");
  empty.classList.add("hidden");
} else if (battery > 25) {
  full.classList.add("hidden");
  threeQuarters.classList.add("hidden");
  half.classList.remove("hidden");
  quarter.classList.add("hidden");
  empty.classList.add("hidden");
} else if (battery > 10) {
  full.classList.add("hidden");
  threeQuarters.classList.add("hidden");
  half.classList.add("hidden");
  quarter.classList.remove("hidden");
  empty.classList.add("hidden");
} else {
  full.classList.add("hidden");
  threeQuarters.classList.add("hidden");
  half.classList.add("hidden");
  quarter.classList.add("hidden");
  empty.classList.remove("hidden");
}
