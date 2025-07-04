let api_key='a62031a7145b770609c8db06b823546e';

let api_url = 'https://api.openweathermap.org/data/2.5/weather';

let city = 'London';

let url = `${api_url}?q=${city}&appid=${api_key}`;


fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })