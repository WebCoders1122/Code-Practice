// api url and key
// `c602a8a47d17261e62050fb690a93982`
// `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}`
// `api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`
const API_key = `c602a8a47d17261e62050fb690a93982`;

//required elements from html doc
const searchBtn = document.querySelector('#btn'),
    userInput = document.querySelector('#weather-search'),
    locationInput = document.querySelector('.location i'),
    timeline = document.querySelector('.timeline'),
    week = document.querySelector('.week'),
    celsius = document.querySelector('.celsius'),
    fahrenheit = document.querySelector('.fahrenheit')
var weatherOBJ = {},
    dailyforecast2 = [],
    hourlyForecast2 = [],
    cityName2;
let dark = false;


//05 to insert 3 hourly forecast in html
const hourlyForecastCard = (hourlyForecast) => {
    document.querySelector('.weather-boxes').innerHTML = ``;
    hourlyForecast.forEach(
        async (weather) => {
            let time = new Date(weather.dt_txt).getHours(),
                PM = 'AM';
            if (time > 12) {
                time = time - 12
                PM = 'PM'
            } else {
                PM = 'AM'
            }
            let weatherDiv = document.createElement('div');
            weatherDiv.classList.add('weatherbox')
            weatherDiv.innerHTML =
                `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="" class="icon">
                <div class="span weatherbox-temp"><p>${weather.main.temp}</p> &#8451;</div>
                    <span class="weatherbox-time">${time}:00 ${PM}</span>`
            document.querySelector('.weather-boxes').appendChild(weatherDiv)
        }
    )
    darkmode()
};

//04 
const weatherCard = (dailyforecast) => {
    console.log(dailyforecast)
    document.querySelector('.weather-boxes').innerHTML = ``;
    dailyforecast.forEach((element) => {
        let weatherDiv = document.createElement('div');
        weatherDiv.classList.add('weatherbox');
        weatherDiv.innerHTML =
            `<img src="https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png" alt="" class="icon">
            <div class="span weatherbox-temp"><p>${element.main.temp}</p> &#8451;</div>
                 <span class="weatherbox-time">${new Date(element.dt_txt).toDateString()}</span>`
        document.querySelector('.weather-boxes').appendChild(weatherDiv)
    })
    darkmode()
};

//03 getting forecast of 5 days
const getForecast = (weatherOBJ) => {
    const URL_2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${weatherOBJ.lat}&lon=${weatherOBJ.lon}&appid=${API_key}&units=metric`;
    fetch(URL_2).then(resp => resp.json()).then(data => {
        const uniqueForecastDays = new Array();
        const uniqueArray = data.list.filter(
            (dailyforecast) => {
                let date = new Date(dailyforecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(date)) {
                    return uniqueForecastDays.push(date)
                }
            }
        )
        dailyforecast2 = uniqueArray.splice(0, 5)
    }).catch(() => {
        alert('Failed to Load Weather Forecast')
    })

    const URL_3 = `http://api.openweathermap.org/data/2.5/forecast?lat=${weatherOBJ.lat}&lon=${weatherOBJ.lon}&appid=${API_key}&units=metric`;
    fetch(URL_3).then(resp => resp.json()).then(data => {
        if (hourlyForecast2.length > 1) {
            hourlyForecast2 = []
        }
        let hourlyForecast = data.list.splice(0, 5);
        hourlyForecast.forEach((element) => {
            hourlyForecast2.push(element)
        })
        cityName2 = weatherOBJ.cityname;
        hourlyForecastCard(hourlyForecast2, weatherOBJ.cityname);
    }).catch(() => {
        alert('Failed to Load Weather Forecast')
    })
    const URL_4 = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherOBJ.lat}&lon=${weatherOBJ.lon}&appid=${API_key}&units=metric`;
    fetch(URL_4).then(resp => resp.json()).then(data => {
        let sunrisers = new Date(data.sys.sunrise * 1000).getHours();
        if (sunrisers > 12) {
            sunrisers = sunrisers - 12;
        }
        document.querySelector('.day').innerText = `${weatherOBJ.cityname}, ${data.sys.country}`
        document.querySelector('.date').innerText = `${data.weather[0].description}`
        document.querySelector('.temperature').innerText = `${data.main.temp}`
        document.querySelector('.mainImage').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`
        document.querySelector('.weatherbox2-temp1').innerText = `${data.main.humidity} %`
        document.querySelector('.weatherbox2-temp2').innerText = `${data.main.feels_like}`
        document.querySelector('.weatherbox2-temp3').innerText = `${data.main.pressure} mb`
        document.querySelector('.weatherbox2-temp4').innerText = `--`
        document.querySelector('#max-temperatures').innerText = `${data.main.temp_max} `
        document.querySelector('#min-temperatures').innerText = `${data.main.temp_min} `
        document.querySelector('#sun-risers').innerText = `${sunrisers}:${new Date(data.sys.sunrise * 1000).getMinutes()}`
        document.querySelector('#sun-setters').innerText = `${new Date(data.sys.sunset * 1000).getHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`
    }).catch(() => {
        alert('Failed to Load Weather Forecast')
    })
    document.querySelector('.background').classList.remove('show')


};

//02 get city details and latitude and longitude of user entered city
const getLocationDetails = () => {
    document.querySelector('.background').classList.add('show')
    let city = userInput.value.trim();
    const URL_1 = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;
    fetch(URL_1).then(resp => resp.json()).then(
        data => {
            if (!data.length) {
                return alert('Error loading Weather Data')
            }
            let cityname = data[0].name,
                lat = data[0].lat,
                lon = data[0].lon;
            weatherOBJ = {
                cityname,
                lat,
                lon
            };
            getForecast(weatherOBJ);
        }
    ).catch(() => {
        alert('Please Enter a Valid City Name')
    })
};

// 06 get weather by location 
locationInput.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords;
        document.querySelector('.background').classList.add('show')
        const URL_6 = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${API_key}&units=metric`;
        fetch(URL_6).then(resp => resp.json()).then(
            data => {
                console.log(data)
                // if (!data.length) {
                //     return alert('Error loading Weather Data')
                // }
                let cityname = data.city.name;
                weatherOBJ = {
                    cityname,
                    lat: latitude,
                    lon: longitude
                };
                getForecast(weatherOBJ);
            }
        ).catch(() => {
            alert('Please Enter a Valid City Name')
        })
    })
})

//07 activing week on click
timeline.addEventListener('click', () => {
    if (userInput.value != '') {
        timeline.classList.remove('inactive')
        document.querySelector('.weather-boxes').innerHTML = ``;
        hourlyForecastCard(hourlyForecast2, weatherOBJ.cityname);
        if (week.className.includes('inactive')) {
            return
        } else {
            week.classList.add('inactive')
        }
    } else {
        return alert('Please Search for Any Location to Show Hourly Forecast')
    }
})
week.addEventListener('click', () => {
    if (userInput.value != '') {
        week.classList.remove('inactive')
        timeline.classList.add('inactive')
        weatherCard(dailyforecast2)
    } else {
        return alert('Please Search for Any Location to Show Weekly Forecast')
    }
})

//01 get cityname from user
// const firstFunction = () => {
searchBtn.addEventListener(
    'click',
    getLocationDetails
)
// };firstFunction();
userInput.addEventListener('keyup', e => e.key === 'Enter' && getLocationDetails())

// 08 dark mode
let x = document.querySelectorAll('body, .container-mode, #btn, .search-btn input, .location, .location i,.time,.forecast,.header,.weather-headings span.inactive,.weatherbox,.weathrbox2,.temp-min-max,.sun,.weatherbox2-temp,.weathrbox2, .weather-headings span,.highlights-text,.weatherbox span,.weatherbox2-heading,.weatherbox2-temp,.temp-min-max div span,.sun div span, .temp-min-max .max,.sun .sunset, .weatherbox2-temp,.weatherbox2-temp1,.weatherbox2-temp2,.weatherbox2-temp3,.weatherbox2-temp4,.min');
document.querySelector('.darkicon').addEventListener('click', () => {
    x.forEach((element) => {
        element.classList.toggle('dark')
    })
    dark = !dark;
    darkmode()
})


// 09 to enable dark mode
const darkmode = () => {
    if (dark) {
        document.querySelectorAll('.weatherbox').forEach((element) => {
            element.classList.add('dark')
        })
        document.querySelectorAll('.weatherbox-temp').forEach((element) => {
            element.classList.add('dark')
        })
        document.querySelectorAll('.weatherbox-time').forEach((element) => {
            element.classList.add('dark')
        })
    } else {
        document.querySelectorAll('.weatherbox').forEach((element) => {
            element.classList.remove('dark')
        })
        document.querySelectorAll('.weatherbox-temp').forEach((element) => {
            element.classList.remove('dark')
        })
        document.querySelectorAll('.weatherbox-time').forEach((element) => {
            element.classList.remove('dark')
        })
    }
};

// 10 to show calsius and fahrenheit
//functions
function cToF(celsius) {
    var cTemp = celsius;
    return cTemp * 9 / 5 + 32;
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    return (fTemp - 32) * 5 / 9;
}
//calculations
celsius.addEventListener('click', () => {
    if (!fahrenheit.classList.contains('inactive')) {
        let temp2 = document.querySelectorAll('.temperature, .weatherbox-temp p, .min-temperatures, .max-temperatures, .weatherbox2-temp2')
        temp2.forEach((element) => {
            element.innerText = fToC(Number(element.innerText)).toFixed(2)
        })
    }
    celsius.classList.remove('inactive')
    fahrenheit.classList.add('inactive')
})
fahrenheit.addEventListener('click', () => {
    if (!celsius.classList.contains('inactive')) {
        let temp2 = document.querySelectorAll('.temperature, .weatherbox-temp p, #min-temperatures, #max-temperatures, .weatherbox2-temp2')
        temp2.forEach((element, index) => {
            element.innerText = cToF(Number(element.innerText)).toFixed(2)
            console.log(element, index)
        })
    }
    celsius.classList.add('inactive')
    fahrenheit.classList.remove('inactive')

})
