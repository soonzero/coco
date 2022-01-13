const API_KEY = "74a1050665b50a1d7e6e94c9cb6854db";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector(".current");
      const tomorrow = document.querySelector(".tomorrow");
      weather.innerText = `It's ${Math.round(data.current.temp * 10) / 10}\° now
      ${data.timezone}`;
      tomorrow.innerText = `Tommorow
      ${Math.round(data.daily[1].temp.min * 10) / 10}\°\/${
        Math.round(data.daily[1].temp.max * 10) / 10
      }\°`;
    });
}

function onGeoError() {
  const weather = document.querySelector(".weather span:first-child");
  const tomorrow = document.querySelector(".tomorrow");
  weather.innerText = `I can't find you.`;
  tomorrow.innerText = `No weather information.`;
}

function getWeather() {
  navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
}

getWeather();

const positionBtn = document.querySelector(".getPosition");

positionBtn.addEventListener("click", getWeather);
