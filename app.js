function updateWeatherInfo(response){
    var temperatureElement = document.querySelector("#temperature");
    var temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    var cityElement = document.querySelector("#selected-city");
    cityElement.innerHTML = response.data.city;
    var descriptionElement = document.querySelector("#description");
    var description = response.data.condition.description;
    var descriptionElement = document.querySelector("#description");
    description = description.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    descriptionElement.innerHTML = description;
    console.log(description);
    var humidityElement = document.querySelector("#humid");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    var windElement = document.querySelector("#wind");
    windElement.innerHTML = `${response.data.temperature.wind} km/h`;
    var iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}" class="weather-app-icon"/>`;
    var timeElement = document.querySelector("#time");
    var date = new Date (response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day = days[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    return `${day}, ${hours}:${minutes}`;
}
    

function searchCity(city){
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

var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit());
searchCity("London");