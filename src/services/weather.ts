import IWeatherModel from '../models/weather';
import { weatherAPI } from './axios';

export async function getWeather(location: string): Promise<IWeatherModel> {
	/*return {
		coord: {
			lon: -122.08,
			lat: 37.39
		},
		weather: [
			{
				id: 800,
				main: 'Clear',
				description: 'clear sky',
				icon: '01d'
			}
		],
		main: {
			temp: 282.55,
			feels_like: 281.86,
			temp_min: 280.37,
			temp_max: 284.26,
			pressure: 1023,
			humidity: 100
		},
		wind: {
			speed: 1.5,
			deg: 350
		},
		sys: {
			country: 'MX'
		},
		name: 'Monterrey'
	};*/
	const res = await weatherAPI.get(
		`/weather?q=${location}&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
	);
	return res.data;
}
