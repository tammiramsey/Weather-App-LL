var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function handleSearchSubmit(e){
    e.preventDefault();
    var searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

function searchCity(city){
    var apiKey = `5a3o950fc274379347b6a44aft08a3cb0`;
    var apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(updateWeatherInfo);
}

function updateWeatherInfo(response){
    console.log(response.data);
    var temperatureElement = document.querySelector("#temperature");
    var temperature = response.data.temperature.current;
    var cityElement = document.querySelector("#city");
    var descriptionElement = document.querySelector("#description");
    var humidityElement = document.querySelector("#humid");
    var windElement = document.querySelector("#wind");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humid}%`;
    windElement.innerHTML = `${response.data.temperature.wind}%`;
}

searchCity("London");