const apiKey = "63727c626e64ffedc4e7b89fe7efcd4c";
const searchBox = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');

async function checkWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (response.ok) {
        const data = await response.json();
        console.log(data);

        document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        document.getElementById('city').innerText = data.name;
        document.getElementById('date-time').innerText = new Date().toLocaleString();
        document.getElementById('condition').innerText = data.weather[0].description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } else {
        alert('Location not found');
    }
}

searchBtn.addEventListener('click', () => {
    const location = searchBox.value;
    if (location) {
        checkWeather(location);
    }
});

checkWeather('Accra');
