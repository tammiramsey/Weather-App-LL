function displayForecast(response) {
    var forecast = document.querySelector("#forecast");
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var forecastHTML = "";

    // Validate response data
    if (response.data && response.data.daily) {
        response.data.daily.forEach(function(dayData) {
            if (dayData.time && typeof dayData.time === 'number') {
                var day = days[new Date(dayData.time * 1000).getDay()];
                var maxTemp = dayData.temperature && dayData.temperature.maximum ? Math.round(dayData.temperature.maximum) : "N/A";
                var minTemp = dayData.temperature && dayData.temperature.minimum ? Math.round(dayData.temperature.minimum) : "N/A";
                var iconUrl = dayData.condition && dayData.condition.icon_url ? dayData.condition.icon_url : "";

                forecastHTML += 
                    `<div class="WeatherForecastPreview">
                        <div class="forecast-time">${day}</div>
                        <div id="icon"><img src="${iconUrl}" class="weather-app-icon" alt="Weather Icon"/></div>
                        <canvas width="38" height="38"></canvas>
                        <div class="forecast-temperature">
                            <span class="forecast-icon"></span>
                            <span class="forecast-temperature-max">${maxTemp}°C</span>
                            <span class="forecast-temperature-min">${minTemp}°C</span>
                        </div>
                    </div>`;
            } else {
                console.error("Invalid time data for day:", dayData);
            }
        });
    } else {
        console.error("Invalid response data:", response);
    }

    forecast.innerHTML = forecastHTML;
}

function getForecast(city) {
    var apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    var apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL)
        .then(displayForecast)
        .catch(error => console.error("Error fetching forecast:", error));
}

function updateWeatherInfo(weatherData) {
    const weatherElement = document.getElementById("weatherInfo");
    if (weatherElement) {
        weatherElement.innerHTML = `Weather: ${weatherData}`;
    } else {
        console.error("Element with ID 'weatherInfo' not found in the DOM.");
    }
}

function fetchWeather() {
    // Fetch weather data (simulated)
    let weatherData = "Sunny and 75";
    updateWeatherInfo(weatherData);
}

fetchWeather(); // Call the function to fetch and update weather info


function searchCity(city) {
    var apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    var apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL)
        .then(updateWeatherInfo)
        .catch(error => console.error("Error fetching weather info:", error));
}

function handleSearchSubmit(event) {
    event.preventDefault();
    var searchInput = document.querySelector("#search-form-input");
    var cityElement = document.querySelector("#selected-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");
