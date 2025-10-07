// const apikey = "8ed4835eb3c6617894fbcd34e7f4b00e";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=london";

// async function checkweather() {
//     const response = await fetch(apiurl + `&appid=${apikey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = data.main.temp + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
// }

// checkweather();