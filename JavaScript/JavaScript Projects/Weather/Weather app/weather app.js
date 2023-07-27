const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}02d.png`

const userInput = document.querySelector('#city-input');
const button = document.querySelector('#searchBtn');
const weather = document.querySelector('.info');




const getWeather = async (city) => {
    weather.innerHTML = "<h3>Loading Weather Info...</h3>"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    data = await response.json();
    console.log(data)
    return showWeather(data);
};

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h3 class="error-message" id="error">City not found. Please Try Again</h3>`
    }
    weather.innerHTML = `
        <div class="weather-icon">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Weather Icon" id="weather-icon">
            </div>
            <div class="weather-info">
                <p><strong>City:</strong> <span id="city"></span>${data.name} ${data.sys.country}</p>
                <p><strong>Temperature:</strong> <span id="temperature"></span>${data.main.temp} ℃ (Feels Like : ${data.main.feels_like})</p>
                <p><strong>Conditions:</strong> <span id="conditions"></span>${data.weather[0].main} (${data.weather[0].description}) </p>
            </div>
        `
};

button.addEventListener(
    'click',
    function () {
        getWeather(userInput.value)
    }
)
