import axios from "axios";

export const weatherAPI = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API_URL,
  });