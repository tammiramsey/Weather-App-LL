function searchCity(city){
    let query = document.getElementById('searchInput').value;
    var apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    var apiURL = `https://api.shecodes.io/weather/v1/current?query=${query}&key${apiKey}&units=metric`;
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
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    capitalize(description);
    console.log(response.data.condition.description);
}
function capitalize(description){
    var description = response.data.condition.description;
    description = description.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    descriptionElement.innerHTML = description;
}
var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("London");