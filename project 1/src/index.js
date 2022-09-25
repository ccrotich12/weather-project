function formatDate(date) {
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes}`;
}

let currentDate = document.querySelector("#city-time");
let now = new Date();
currentDate.innerHTML = formatDate(now);

console.log(response.data);
function showTemp(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperatureElement");
  let description = document.querySelector("#temp-description");

  temperatureElement.innerHTML = `${temperature}`;
  description.innerHTML = response.data.weather[0].description;

  console.log(response.data.wind.speed);
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");

  windElement.innerHTML = `Wind: ${wind} km/h`;

  document.querySelector("#location").innerHTML = response.data.name;

  console.log(response.data.main.humidity);
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");

  humidityElement.innerHTML = `Humidity: ${humidity}%`;
}

function search(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  search(city);
}

let searchForm = document.querySelector("#search-text-input");

searchForm.addEventListener("submit", handleSubmit);

search("New York");
//////////////////////
