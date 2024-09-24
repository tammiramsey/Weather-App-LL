var searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
function handleSearchSubmit(e){
    e.preventDefault();
    var searchInput = document.querySelector("#search-form-input");
    var cityElement = document.querySelector("#selectedCity");
    cityElement.innerHTML = searchInput.value;
}