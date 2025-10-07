const apikey = "8ed4835eb3c6617894fbcd34e7f4b00e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Assets/clear-png.webp";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Assets/img.rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Assets/img.drizzle.webp";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Assets/img.misty.webp";
    }

}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

checkweather();