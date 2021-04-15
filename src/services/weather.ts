import IWeatherModel from '../models/weather';
import { weatherAPI } from './axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY || '9b7ec3200065415fdb3761f9c7ed5e81';

export async function getWeather(location: string): Promise<IWeatherModel> {
	const res = await weatherAPI.get(
		`/weather?q=${location}&units=metric&APPID=${apiKey}`
	);
	return res.data;
}

export async function getWeatherUsingCoordinates(lat: number, lon: number): Promise<IWeatherModel> {
	const res = await weatherAPI.get(
		`/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`
	);
	return res.data;
}
