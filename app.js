var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function handleSearchSubmit(event){
    event.preventDefault();
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
    var dateElement = new Date(response.data.time * 1000);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humid}%`;
    windElement.innerHTML = `${response.data.temperature.wind}%`;
    console.log(temperatureElement);
    console.log(descriptionElement);
    console.log(humidityElement);
    console.log(windElement);
    console.log(dateElement);
}
searchCity("London");