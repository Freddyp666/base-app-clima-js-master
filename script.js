let api_key = "a62031a7145b770609c8db06b823546e";
let url_base = "https://api.openweathermap.org/data/2.5/weather";



document.getElementById('btnSearch').addEventListener('click', () => {
    const city = document.getElementById("inputCity").value;
    if (city) {
        fetchWeatherDate(city);
    }
});

function fetchWeatherDate(city) {
    let urlFull = `${url_base}?q=${city}&appid=${api_key}`;

    fetch(urlFull)
        .then((response) => response.json())
        .then((response) => showWeatherData(response))
        .catch((error) => console.error("Error fetching weather data:", error));
}

function showWeatherData(data) {
    const divWeatherDate = document.getElementById("weatherDate");

    divWeatherDate.innerHTML = "";
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const iconCode = data.weather[0].icon;

    divWeatherDate.innerHTML = `
        <h2>Weather in ${cityName}</h2>
        <p>Temperature: ${(temperature - 273.15).toFixed(2)} °C</p>
        <p>Description: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${weatherDescription}">
    `;
}
