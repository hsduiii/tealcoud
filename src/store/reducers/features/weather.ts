import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IWeatherModel from '../../../models/weather';
import { getWeather, getWeatherUsingCoordinates } from '../../../services/weather';
import { AppDispatch, AppThunk } from '../../store';

interface WeatherState {
	location?: string;
	weather?: IWeatherModel;
	isLoading?: boolean;
}

const initialState: WeatherState = {
	location: '',
	weather: {},
	isLoading: false
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setLocation: (state, action: PayloadAction<string>) => {
			state.location = action.payload;
		},
		setWeather: (state, action: PayloadAction<IWeatherModel>) => {
			state.weather = action.payload;
		}
	}
});

export const { setLocation, setWeather, setLoading } = weatherSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setLocationAction = (location: string): AppThunk => (
	dispatch: AppDispatch
) => {
	dispatch(setLocation(location));
};

export const searchWeatherAction = (location: string): AppThunk => async (
	dispatch: AppDispatch
) => {
	dispatch(setLoading(true));
	dispatch(setLocation(location));
	try {
		console.log("Getting Weather...")
		const weather: IWeatherModel = await getWeather(location);
		if (weather) {
			dispatch(setWeather(weather));
		}
	} catch (error) {
		console.log(error);
	}
	dispatch(setLoading(false));
};

export const searchWeatherCoordinatesAction = (lat: number, lon: number): AppThunk => async (
	dispatch: AppDispatch
) => {
	dispatch(setLoading(true));
	try {
		console.log("Getting Weather...")
		const weather: IWeatherModel = await getWeatherUsingCoordinates(lat, lon);
		if (weather && weather.name) {
			dispatch(setLocation(weather.name));
			dispatch(setWeather(weather));
		}
	} catch (error) {
		console.log(error);
	}
	dispatch(setLoading(false));
};

export const weatherReducer = weatherSlice.reducer;