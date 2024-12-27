var apiKey = "868811b93b275931ada16307f7a716b7"; // Your API key

function getWeather() {
    var city = document.getElementById("city-input").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",FR&units=metric&appid=" + apiKey;


    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("City not found. Please try again.");
            }
            return response.json();
        })
        .then(function (data) {
            var weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = "<h2>" + data.name + "</h2>" +
                "<p>Temperature: " + data.main.temp + "°C</p>" +
                "<p>Weather: " + data.weather[0].description + "</p>" +
                "<p>Humidity: " + data.main.humidity + "%</p>" +
                "<p>Wind Speed: " + data.wind.speed + " m/s</p>";
        })
        .catch(function (error) {
            alert(error.message);
        });
}
