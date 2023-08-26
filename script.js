
const apiKey = '5c4538f6fbmsh8351488e7040765p131055jsn8c49e2af3918';
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';
const weatherEndpoint = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

async function fetchData(city) {
    const url = `${weatherEndpoint}?city=${encodeURIComponent(city)}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // Update weather data display
        cloud_pct.innerHTML=result.cloud_pct;
        temp.innerHTML=result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        sunset.innerHTML = result.sunset;
        sunrise.innerHTML = result.sunrise;
       
    } catch (error) {
        console.error(error);
    }
}

function submit() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    fetchData(city);
}
