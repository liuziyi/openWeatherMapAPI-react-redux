import axios from 'axios';

const API_KEY = '5eea8fdd4528c52faa61af037a52c8db';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('REQUEST: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}