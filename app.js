function updateWeatherInfo(response) {
    console.log(response.data);
    var temperatureElement = document.querySelector("#temperature");
    var temperature = response.data.main.temp; // Corrected property
    var cityElement = document.querySelector("#city");
    var descriptionElement = document.querySelector("#description");
    var humidityElement = document.querySelector("#humid");
    var windElement = document.querySelector("#wind");
    var dateElement = new Date(response.data.dt * 1000); // Corrected property
    var timeElement = document.querySelector("#time");
    var iconElement = document.querySelector("#icon");
    timeElement.innerHTML = formatDate(dateElement); // Corrected variable name
    cityElement.innerHTML = response.data.name; // Corrected property
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.weather[0].description; // Corrected property
    humidityElement.innerHTML = `${response.data.main.humidity}%`; // Corrected property
    windElement.innerHTML = `${response.data.wind.speed} m/s`; // Corrected property
    iconElement.innerHTML = `<img src="${response.data.weather[0].icon}" class="weather-app-icon"/>`; // Corrected property
    console.log(temperatureElement);
    console.log(descriptionElement);
    console.log(humidityElement);
    console.log(windElement);
    console.log(dateElement);
}
