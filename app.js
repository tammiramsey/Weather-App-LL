var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
function handleSearchSubmit(e){
    e.preventDefault();
    var searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

function searchCity(city){
    var apiKey = "5oa4a52efabffa028f08et03bf538250";
    var apiURL = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
    axios.get(apiURL).then(updateWeatherInfo);
}

function updateWeatherInfo(response){
    console.log(response.data);
    var temperatureElement = document.querySelector("#temperature");
    var temperature = response.data.temperature.current;
    var cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

searchCity("London");