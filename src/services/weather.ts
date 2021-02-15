import IWeatherModel from '../models/weather';
import { weatherAPI } from './axios';

export async function getWeather(location: string): Promise<IWeatherModel> {
	const res = await weatherAPI.get(
		`/weather?q=${location}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
	);
	return res.data;
}
