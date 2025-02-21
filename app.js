function searchCity(city){
    let query = document.getElementById('searchInput').value;
    var apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    var apiURL = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(updateWeatherInfo);
}

function handleSearchSubmit(event){
    event.preventDefault();
    var searchInput = document.querySelector("#search-form-input");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}
function updateWeatherInfo(response){
    var temperatureElement = document.querySelector("#temperature");
    var temperature = response.data.temperature.current;
    var cityElement = document.querySelector("#selected-city");
    var descriptionElement = document.querySelector("#description");
    var humidityElement = document.querySelector("#humid");
    var windElement = document.querySelector("#wind");
    var timeElement = document.querySelector("#time");
    var iconElement = document.querySelector("#icon");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    capitalize(description);
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.temperature.wind} km/h`;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-app-icon"/>`;
    console.log(response.data.condition.description);
}
function capitalize(description){
    var description = response.data.condition.description;
    var descriptionElement = document.querySelector("#description");
    description = description.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    descriptionElement.innerHTML = description;
}
function formatDate(date){
    var date = new Date (response.data.time * 1000);
    var day = days[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
}
var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");