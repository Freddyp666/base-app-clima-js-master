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
    console.log(urlFull);

    fetch(urlFull)
        .then((response) => response.json())
        .then((response) => showWeatherData(response))
        .catch((error) => console.error("Error fetching weather data:", error));
}

function showWeatherData(data) {
    console.log(data);
    const divWeatherDate = document.getElementById("weatherDate");

    divWeatherDate.innerHTML = "";
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;

    divWeatherDate.innerHTML = `
        <h2>Clima en ${cityName}</h2>
        <p>Temperatura: ${(temperature - 273.15).toFixed(2)} °C</p>
        <p>Descripción: ${weatherDescription}</p>
        <p>Humedad: ${humidity}%</p>
    `;
}
