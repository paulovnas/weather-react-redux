import axios from 'axios';

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY_API = '2c0febe2eccee684b4aef6e787887766';

export const fetchWeather = (query: string) => {
    var params = { q: query, appid: KEY_API, lang: 'pt', units: 'metric' }
    return axios.get(BASE_URL, { params: params });
}