import axios from 'axios';

const API_KEY = '19ae5cc139c7b64c544358ffdbd6a7da';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Template: http://api.openweathermap.org/data/2.5/forecast?appid=
// Append to all requests: &AppID={API_KEY}
// City Name: api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
// City ID: api.openweathermap.org/data/2.5/forecast?id={city ID} 
// Geographic Coordinates: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}
// Zipcode: api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code} 
// Weather Conditions Codes and Icons: https://openweathermap.org/weather-conditions

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
