import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/WeatherSlice";

export const store = configureStore({
	reducer: {
		weatherWatch: weatherReducer,
	},
});