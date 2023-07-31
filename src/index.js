

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", async () => {
    const weatherData = await getWeatherData(searchInput.value)
    if (!weatherData) {
        return
    }
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    const temp = Math.round(weatherData.current.temperature * (9/5) + 32 * 100) / 100
    const ftemp = Math.round(weatherData.current.feelslike * (9/5) + 32 * 100) / 100

    cityName.textContent = `${weatherData.location.name}`;
    temperature.textContent = `${temp} °F`;
    feelsLike.textContent = `Feels like: ${ftemp} °F`;
    humidity.textContent = `Humidity: ${weatherData.current.humidity} %`;
    wind.textContent = `Wind: ${weatherData.current.wind_speed} km/h`;

})

async function getWeatherData(zipcode) {
    console.log(searchInput.value)
    const API_KEY = '6b9311c57c8b444b8cd174916232707'
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${zipcode}`
    // const API_KEY = '8b505d4177a8b436d10e8eb25541de30'
    // const endpoint = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${zipcode}`
    try {
        const response = await fetch(endpoint, { mode: "cors" });
        // console.log(response)
        if (!response.ok){
            throw new Error(`${zipcode} not found.`)
        }
        // convert data more
        const data = await response.json()
        console.log(data)
        return data
    } catch (error){
        alert(error);
        return null;
    }
}