import IWeatherModel from '../models/weather';
import { weatherAPI } from './axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY || '5f91c1639e1e488027aacb3a78b18a1f';

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
