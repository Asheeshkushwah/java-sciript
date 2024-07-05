const apiKey = "aab807cf44cdec0cbd4fb016a295ef18"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="




const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("temp").innerHTML = math.round(data.main.temp) + "";
    document.querySelector("humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("wind").innerHTML = data.wind.speed + "km/h";
}

// checkweather()

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})
