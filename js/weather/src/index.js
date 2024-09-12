import "./style.css";

const weatherAPIKey = process.env.WEATHER_API_KEY;

async function getWeatherData(searchQuery) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${weatherAPIKey}`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  return weatherData;
}

async function displayWeatherFor(city) {
  const data = await getWeatherData(city);
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = `${data.city.country} ${data.city.name}`;
  const days = document.createElement("div");

  weatherDiv.appendChild(header);
  weatherDiv.appendChild(days);

  for (let i = 0; i < data.list.length; i += 8) {
    const day = data.list[i];
    const dayDiv = document.createElement("div");
    const dayHeader = document.createElement("h3");
    const date = new Date(day.dt * 1000);
    dayHeader.textContent = `${weekDay[date.getDay()]} ${date.getDate()}`;

    const textDiv = document.createElement("div");
    const weatherDesc = day.weather[0].description;
    textDiv.innerHTML = `${weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)}<br>`;
    textDiv.innerHTML += `Temperature: ${(day.main.temp - 273.15).toFixed(1)}<br>`;
    textDiv.innerHTML += `Humidity: ${day.main.humidity}%`;

    dayDiv.appendChild(dayHeader);
    dayDiv.appendChild(textDiv);
    days.appendChild(dayDiv);
  }
}

const form = document.querySelector("form");
const input = form.elements["city"];
const button = document.getElementById("submit");

button.addEventListener("click", (event) => {
  event.preventDefault();
  displayWeatherFor(input.value);
});
